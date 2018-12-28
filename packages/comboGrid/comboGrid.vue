<template>
  <div class="combo-grid-wrap" ref="comboGrid">
    <el-select
      v-model="val"
      :multiple="multiple"
      :disabled="disabled"
      :placeholder="placeholder"
      :size="size"
      :collapse-tags="collapseTags"
      :clearable="clearable"
      reserve-keyword
      popper-class="combo-grid-list"

      :loading="loading"
      :remote="filterable"
      :filterable="filterable"
      :remote-method="remoteMethod"

      @visible-change="visibleChange"
      @change="setSelectValue"
      @remove-tag="removeSelectVal"
    >
      <el-option
        v-for="item in listData"
        :key="item[id]"
        :label="item[text]"
        :value="item[id]"
      >
        <span class="combo-grid-checkbox"></span>
        <span style="padding-left: 10px">{{item[text]}}</span>
      </el-option>
      <div class="cg-pagination">
        <el-pagination
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="total"
          :current-page.sync="currentPage"
          @current-change="onCurrentPageChange"
          :small="true"
          :background="true"
          :page-count="5"
        ></el-pagination>
      </div>
    </el-select>
  </div>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter'
  export default {
    name: "combo-grid",
    mixins: [Emitter],
    model: {
      prop: 'selectValue',
      event: 'change'
    },
    props: {
      // 用户传入的隐藏的值
      selectValue: {
        type: [Array, String, Number],
        required: true
      },
      // 用户传入的显示的值
      selectShowValue: {
        type: [Array, String],
        default: this.multiple ? [] : ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      // 查询条件
      searchParam: {
        type: Object,
        default () {
          return {}
        }
      },
      // 每页显示条数
      pageSize: {
        type: Number,
        default: 6
      },
      // 数据请求方法
      dataUrlFunc: {
        type: Function,
        default: null
      },
      collapseTags: {
        default: true,
        type: Boolean
      },
      clearable: {
        default: false,
        type: Boolean
      },
      filterable: {
        default: true,
        type: Boolean
      },
      filterField: {
        default: '',
        type: String
      },
      id: {
        default: 'value',
        type: String
      },
      text: {
        default: 'text',
        type: String
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      size: {
        default: 'small',
        type: String
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false, // 请求是否加载中
        queryStr: '', // 查询字符串
        listData: [], // 表格当前页数据
        currentPage: 1, // 当前分页页码
        total: 0, // 总条数

        val: this.multiple ? [] : '', // el-select选中值
        originalSelectObj: {}, // 原始选中的对象
        originalSelectValue: JSON.parse(JSON.stringify(this.selectValue)) // 原始选中的值
      }
    },
    watch: {
      // 监听用户传入的显示值，显示值变化时，才会修改内部的val
      selectShowValue: {
        immediate: true,
        handler (val) {
          if (val instanceof Array) {
            let tempObj = {};
            this.selectShowValue.forEach((item, index) => {
              tempObj[item] = this.selectValue[index];
            });
            this.originalSelectObj = tempObj;
            this.originalSelectValue = JSON.parse(JSON.stringify(this.selectValue));
          } else {
            this.originalSelectObj = {
              [this.selectShowValue]: this.selectValue
            };
            this.originalSelectValue = this.selectValue;
          }
          this.val = this.selectShowValue;
        }
      }
    },
    mounted () {
      this.getRemoteData();
    },
    methods: {
      // 远程搜索方法
      remoteMethod (query) {
        this.queryStr = query;
        if (query !== '') {
          this.currentPage = 1;
          let param = {};
          this.filterField ? param[this.filterField] = query : param[this.text] = query;
          this.getRemoteData(param);
        } else {
          this.getRemoteData();
        }
      },
      // 获取下拉数据
      getRemoteData (param) {
        if (!this.dataUrlFunc) {
          return;
        }
        this.loading = true;
        this.dataUrlFunc({
          pageSize: this.pageSize,
          pageNum: this.currentPage,
          ...this.searchData,
          ...param
        }).then(res => {
          this.loading = false;
          if (res.code === '0') {
            this.listData = res.rows;
            this.total = res.total;
            if (res.rows.length > 0 && this.originalSelectValue !== null) {
              this.setSelected(res.rows);
            }
          }
        })
      },
      // 设置表格选中的值
      setSelected (rows) {
        if (this.multiple) {
          let tempObj = JSON.parse(JSON.stringify(this.val));
          rows.forEach(row => {
            let index = this.originalSelectValue.indexOf(row[this.id]);
            if (index > -1) {
              tempObj.splice(index, 1, row[this.id]);
              this.originalSelectValue.splice(index, 1, undefined)
            }
          });
          this.val = tempObj;
        } else {
          if (this.originalSelectValue !== undefined) {
            rows.forEach(row => {
              if (this.originalSelectValue === row[this.id]) {
                this.val = row[this.id];
                this.originalSelectValue = undefined;
              }
            });
          }
        }
      },
      onCurrentPageChange (page) {
        this.currentPage = page;
        this.getRemoteData();
      },
      visibleChange (state) {
        if (state) {
          this.currentPage = 1;
          this.getRemoteData();
        }
      },
      setSelectValue (selection) {
        if (this.multiple) {
          let tempObj = [];
          selection.forEach(item => {
            if (this.originalSelectObj[item] !== undefined) {
              tempObj.push(this.originalSelectObj[item]);
            } else {
              tempObj.push(item);
            }
          });
          this.$emit('change', tempObj);
          this.dispatch('ElFormItem', 'el.form.change', tempObj);
        } else {
          this.originalSelectValue = undefined;
          let row = this.listData.filter(item => item[this.id] === selection);
          this.$emit('change', selection, row[0]);
          this.dispatch('ElFormItem', 'el.form.change', selection);
        }
      },
      removeSelectVal (tag) {
        let tagId = this.originalSelectObj[tag];
        if (tagId !== undefined) {
          let index = this.originalSelectValue.indexOf(tagId);
          if (index > -1) {
            this.originalSelectValue.splice(index, 1, undefined);
          }
        }
      }
    }
  }
</script>


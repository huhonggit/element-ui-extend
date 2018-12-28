<template>
  <div>
    <el-row :gutter="60">
      <el-col :span="12" :offset="6">
        {{searchData.comboGrid1}}
        <combo-grid
          v-model='searchData.comboGrid1'
          :select-show-value="comboGrid1ShowField"
          :data-url-func="API.comboGridQuery"
          :multiple="false"
          filterField="nameLike"
        >
        </combo-grid>

        <combo-grid
          v-model='searchData.comboGrid3'
          :select-show-value="comboGrid3ShowField"
          :data-url-func="API.comboGridQuery"
          :multiple="false"
          @change="getChange"
        >
        </combo-grid>
      </el-col>

      <el-col :span="5">
        {{searchData.comboGrid2}}
        <combo-grid
          v-model='searchData.comboGrid2'
          :select-show-value="comboGrid2ShowField"
          :data-url-func="API.comboGridQuery"
          :multiple="true"
          :clearable="true"
          filterField="nameLike"
          @change="getChange"
        >
        </combo-grid>
        <combo-grid
          v-model='searchData.comboGrid2'
          :data-url-func="API.comboGridQuery"
          :multiple="true"
          :clearable="true"
          filterField="nameLike"
          @change="getChange"
        >
        </combo-grid>
      </el-col>
      <el-col :span="6">
        <el-button size="small" @click="search">查询</el-button>
        <el-button size="small" @click="reset">重置</el-button>
        <el-button size="small" @click="change">修改</el-button>
      </el-col>
    </el-row>
    <div>
      <!--<pagination-table-->
      <!--ref="myTable"-->
      <!--:data-url-func="API.paginationTableQuery"-->
      <!--:search-param="searchParam"-->
      <!--:vertical-resize-offset="62"-->
      <!--&gt;-->
      <!--<template slot="tableColumns">-->
      <!--<el-table-column type="index" width="70"></el-table-column>-->
      <!--<el-table-column type="selection" width="56"></el-table-column>-->
      <!--<el-table-column prop="columns1" label="第一列" min-width="180"></el-table-column>-->
      <!--<el-table-column prop="columns2" sortable="custom" show-overflow-tooltip label="第二列" min-width="220"></el-table-column>-->
      <!--<el-table-column prop="columns4" show-overflow-tooltip label="第四列" min-width="170"></el-table-column>-->
      <!--</template>-->
      <!--</pagination-table>-->
    </div>

  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        comboGrid1ShowField: '',
        comboGrid2ShowField: ['combo-grid测试数据1', 'combo-grid测试数据2', 'combo-grid测试数据7'],
        comboGrid3ShowField: 'combo-grid测试数据7',
        searchData: {
          comboGrid1: "",
          comboGrid2: [1, 2, 7],
          comboGrid3: 7
        },
        // 表格实际查询参数
        searchParam: {}
      }
    },
    methods: {
      search() {
        this.searchParam = JSON.parse(JSON.stringify(this.searchData));
      },
      reset() {
        this.searchParam = {};
        this.comboGrid2ShowField = [];
        this.searchData.comboGrid2 = [];
      },
      change() {
        // this.searchData.comboGrid2 = [6, 8];
        // this.comboGrid2ShowField = ['combo-grid测试数据6', 'combo-grid测试数据8']
        this.searchData.comboGrid3 = 14;
        this.comboGrid3ShowField = 'combo-grid测试数据14';
      },
      reset2() {
        this.comboGrid3ShowField = [];
      },
      change2() {
        this.searchData.comboGrid3 = [6, 8];
        this.comboGrid3ShowField = ['combo-grid测试数据6', 'combo-grid测试数据8']
      },
      testOldChange(a) {
        console.log(a);
      },
      getChange(data, test) {
        console.log(data);
        console.log(test);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

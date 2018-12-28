---
sidebar: auto
---

# ComboGrid 可分页下拉框

## API

### select-value
- 类型: `String | Array`
- 默认值: `''`
- 说明: 下拉框选中值，可以通过 `v-modal` 进行双向绑定

### select-show-value
- 类型: `String | Array`
- 默认值: `'' | []`
- 说明: 下拉框选中值的显示值
- 备注: 这个组件的v-modal是假的，由于下拉框中需要显示选中项的显示值，
第一页之外的其他数据的显示值组件内是没办法知道的，
所以组件实际监听的是 `select-show-value` 的值。
要进行重置或者修改操作的话，需要同时修改 `v-modal` 与 `select-show-value` 的值。

### multiple
- 类型: `Boolean`
- 默认值: `false`
- 说明: 是否多选

### search-param
- 类型: `Object`
- 默认值: `{}`
- 说明: 下拉框查询参数

### page-size
- 类型: `Number`
- 默认值: `6`
- 说明: 下拉框每页显示条数

### data-url-func
- 类型: `Function`
- 默认值: `null`
- 说明: 下拉框查询方法
- 备注: 一个返回Promise对象的方法。示例如下，其中post为封装的axios方法。
``` js
comboGridQuery (param) {
  return post(baseUrl + '/comboGrid.do', param)
}
```

### collapse-tags
- 类型: `Boolean`
- 默认值: `true`
- 说明: 多选时是否将选中值按文字的形式展示

### clearable
- 类型: `Boolean`
- 默认值: `false`
- 说明: 是否可以清空选项

### filterable
- 类型: `Boolean`
- 默认值: `true`
- 说明: 是否远程搜索

### filter-field
- 类型: `String`
- 默认值: `''`
- 说明: 下拉框远程模糊搜索时携带参数的字段名

### id
- 类型: `String`
- 默认值: `value`
- 说明: 表格数据隐藏值，唯一标识

### text
- 类型: `String`
- 默认值: `text`
- 说明: 表格数据显示值

### placeholder
- 类型: `String`
- 默认值: `请选择`
- 说明: 占位符

### size
- 类型: `String`
- 默认值: `small`
- 说明: 下拉框尺寸，提供`medium / small / mini`

### disabled
- 类型: `Boolean`
- 默认值: `false`
- 说明: 是否禁用

## 代码示例

### 单选下拉
``` vue
<template>
  <combo-grid
    v-model="comboGridDemo"
    :data-url-func="API.comboGridQuery"
  >
  </combo-grid>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        comboGridDemo: ''
      }
    }
  }
</script>
```

### 多选下拉
``` vue
<template>
  <combo-grid
    v-model="comboGridDemo"
    :data-url-func="API.comboGridQuery"
    :select-show-value="comboGridShowValue"
    :multiple="true"
  >
  </combo-grid>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        comboGridDemo: [],
        comboGridShowValue: []
      }
    }
  }
</script>
```

### 单选设置初始值
``` vue
<template>
  <combo-grid
    v-model="comboGridDemo"
    :data-url-func="API.comboGridQuery"
    :select-show-value="comboGridShowValue"
  >
  </combo-grid>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        comboGridDemo: 1,
        comboGridShowValue: 'combo-grid测试数据1'
      }
    }
  }
</script>
```

### 多选设置初始值
::: tip
修改组件值时需要，需要同时修改 `v-modal` 与 `select-show-value` 的值。
:::
``` vue
<template>
  <div>
    <combo-grid
      v-model="comboGridDemo"
      :data-url-func="API.comboGridQuery"
      :select-show-value="comboGridShowValue"
      :multiple="true"
    >
    </combo-grid>
    <el-button @click="change">修改</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        comboGridDemo: [1, 2],
        comboGridShowValue: ['combo-grid测试数据1', 'combo-grid测试数据2']
      }
    },
    methods: {
      change () {
        this.comboGridDemo = [6, 7];
        this.comboGridShowValue = ['combo-grid测试数据6', 'combo-grid测试数据7'];
      },
      reset () {
        this.comboGridDemo = [];
        this.comboGridShowValue = [];
      }
    }
  }
</script>
```


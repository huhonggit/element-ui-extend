---
sidebar: auto
---

# ComboGrid 可分页下拉框

## API

### placeholder
- 类型: `string`
- 默认值: `请选择`
- 说明: 占位符

### search-param
- 类型: `object`
- 默认值: `{}`
- 说明: 下拉框查询参数

### size
- 类型: `string`
- 默认值: `small`
- 说明: 下拉框尺寸，提供`medium / small / mini`

### multiple
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否多选

### filterable
- 类型: `boolean`
- 默认值: `true`
- 说明: 是否远程搜索

### data-url
- 类型: `string`
- 默认值: ``
- 说明: 下拉框查询地址

### data-url-func
- 类型: `function`
- 默认值: `null`
- 说明: 下拉框查询方法

### page-size
- 类型: `number`
- 默认值: `6`
- 说明: 下拉框每页显示条数

### id
- 类型: `string`
- 默认值: `value`
- 说明: 表格数据隐藏值，唯一标识

### text
- 类型: `string`
- 默认值: `text`
- 说明: 表格数据显示值

### select-value
- 类型: `string | array`
- 默认值: ``
- 说明: 下拉框选中值，可以通过 `v-modal` 进行双向绑定

### select-show-value
- 类型: `string | array`
- 默认值: `'' | []`
- 说明: 下拉框选中值的显示值

### filter-field
- 类型: `string`
- 默认值: `''`
- 说明: 下拉框远程模糊搜索时携带参数的字段名

### disabled
- 类型: `boolean`
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
        comboGridDemo: [1, 2],
        comboGridShowValue: ['combo-grid测试数据1', 'combo-grid测试数据2']
      }
    }
  }
</script>
```

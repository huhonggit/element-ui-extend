---
sidebar: auto
---

# PaginationTable 分页表格

## 扩展API

### search-param
- 类型: `object`
- 默认值: `{}`
- 说明: 表格查询参数
- 备注: `searchParam` 发生变化时，会请求数据，并将表格页数重置到第一页

### auto-load
- 类型: `boolean`
- 默认值: `true`
- 说明: 是否主动加载表格数据
- 备注: 设置为 `false` 时，需要手动调用表格的 `getTableData` 方法，在修改 `searchParam` 时，也不会发出请求

### data-url-func
- 类型: `function`
- 默认值: `null`
- 说明: 表格查询方法

### vertical-resize-offset
- 类型: `number`
- 默认值: `60`
- 说明: 设置表格体（不包括分页部分）距离页面底部的距离
- 备注: 当页面高度只占一屏，需要将滚动条设置于表格内部时，可以设置该属性

### has-total
- 类型: `boolean`
- 默认值: `true`
- 说明: 表格底部是否有选中数据统计

### search-field
- 类型: `object`
- 默认值: 
``` js
{
  sortType: 'sortType|asc|desc', // 表格排序类型，升序、降序对应字段
  sortName: 'sortName',          // 表格排序字段
  pageNum: 'pageNum',            // 表格数字字段
  pageSize: 'pageSize'           // 表格每页数量字段
}
```
- 说明: 表格查询字段设置字段

## 表格API

### height
- 类型: `number | string`
- 默认值: `true`
- 说明: 表格底部是否有选中数据统计

### stripe
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否为斑马纹 table

### border
- 类型: `boolean`
- 默认值: `true`
- 说明: 是否带有纵向边框

### fit
- 类型: `boolean`
- 默认值: `true`
- 说明: 列的宽度是否自撑开

### show-header
- 类型: `boolean`
- 默认值: `true`
- 说明: 是否显示表头

### highlight-current-row
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否要高亮当前行

### current-row-key
- 类型: `number | string`
- 默认值: `''`
- 说明: 当前行的 key，只写属性

## 分页API

### small
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否使用小型分页样式

### background
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否为分页按钮添加背景色

### page-size
- 类型: `number`
- 默认值: `50`
- 说明: 每页显示条目个数

### pager-count
- 类型: `number`
- 默认值: `7`
- 说明: 页码按钮的数量，当总页数超过该值时会折叠
- 备注: 大于等于 `5` 且小于等于 `21` 的奇数

### layout
- 类型: `string`
- 默认值: `prev, pager, next, sizes, jumper`
- 说明: 组件布局，子组件名用逗号分隔

### page-sizes
- 类型: `number[]`
- 默认值: `[10, 20, 30, 50, 100, 200]`
- 说明: 每页显示个数选择器的选项设置

### popper-class
- 类型: `boolean`
- 默认值: `false`
- 说明: 每页显示个数选择器的下拉框类名

## 表格事件

### on-select
- 参数: `selection, row`
- 说明: 当用户手动勾选数据行的 Checkbox 时触发的事件

### on-select-all
- 参数: `selection`
- 说明: 当用户手动勾选全选 Checkbox 时触发的事件

### on-selection-change
- 参数: `selection`
- 说明: 当选择项发生变化时会触发该事件

### on-row-click
- 参数: `row, event, column`
- 说明: 当某一行被点击时会触发该事件

### on-row-dblclick
- 参数: `row, event`
- 说明: 当某一行被双击时会触发该事件

### on-sort-change
- 参数: `sortName, sortType`
- 说明: 当表格的排序条件发生变化的时候会触发该事件

## 方法
### setTableHeight
- 参数: `''`
- 说明: 设置表格高度
- 备注: 在tab切换或者展开、收缩查询条件时都可以调用该方法

### getTableData
- 参数: `''`
- 说明: 加载表格数据

## 代码示例

### 普通表格
``` vue
<template>
  <pagination-table
    ref="myTable"
    :data-url-func="API.paginationTableQuery"
    :search-param="searchParam"
  >
    <template slot="tableColumns">
      <el-table-column type="index" width="70"></el-table-column>
      <el-table-column type="selection" width="56"></el-table-column>
      <el-table-column prop="columns1" label="第一列" min-width="180"></el-table-column>
    </template>
  </pagination-table>
</template>
```


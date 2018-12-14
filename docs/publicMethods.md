---
sidebar: auto
---

# 公共方法

## formatter 格式化

::: tip 说明
格式化方法放置于 `formatter.js` 中，使用时需要单独引入。
:::

### moneyFormatter 金额格式化
- 参数: `money`
- 说明: 将数字或者能转换为数字的字符串转化为添加小数点与千分位的字符串
- 示例: 
``` js
let a = moneyFormatter(1234); // "1,234.00"
let b = moneyFormatter("1234"); // "1,234.00"
```

### dateFormatter 日期格式化
- 参数: `date, fmt`
``` textmate
y: 年份   M: 月份    d: 日    H: 小时    m: 分钟    s: 秒    q: 季度    S: 毫秒
```
- 说明: 将日期对象转换为对应格式的日期字符串
- 示例: 
``` js
let a = dateFormatter(new Date(), 'yyyy-MM-dd'); // "2018-12-14"
let b = dateFormatter(new Date(), 'yyyy-MM-dd HH:mm:ss'); // "2018-12-14 14:18:33"
let c = dateFormatter(new Date('2018-12-14'), 'qq'); // "04"
let d = dateFormatter(new Date('2018-12-14'), 'S'); // "296"
```

## http 请求

::: tip 说明
`http` 请求放置于 `http.js` 中，使用时需要单独引入。
由于 `http` 个性化要求较高，本项目封装的 `http` 是供项目中的 `comboGrid` 与 `paginationTable` 组件内部使用的，
改写的话可以参考。
:::

## validator 验证

::: tip 说明
验证方法需要与 `form表单` 配合使用，验证方法放置于 `validator.js` 中，使用时需要单独引入。
:::

### validateMobile 手机号码
- 说明: 验证手机号码格式

### validateTel 固定电话
- 说明: 验证固定电话格式

### validatePhone 固定电话或者手机号码
- 说明: 验证固定电话或者手机号码格式

### validatePwd 密码
- 说明: 验证密码复杂度
- 备注: 密码需要不为空，不少于8位，由数字、大写字母、小写字母、特殊字符其中至少三种组成

### validateLength 长度
- 说明: 验证中英文长度
- 备注: 使用时需要length字段
- 示例: 
``` js
 name: [
    { validator: validateLength, trigger: 'blur', length: 32}
 ]
```

### validateNum 正整数
- 说明: 验证输入数字是否全为正整数




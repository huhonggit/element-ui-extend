---
home: true
actionText: 开始使用 →
actionLink: /comboGrid.html
footer: MIT Licensed | Copyright © 2018-present heyyihai
---

<div>
    <p>
      这是一个基于element-ui的小项目，根据公司项目的需要，
      封装了两个经常使用的组件: ComboGrid 与 PaginationTable，
      并提供了几个常用的数据格式化与表单验证方法。
    </p>
</div> 

### install dependencies
``` bash
npm i element-ui-extend

// 完整引入组件
import 'element-ui-extend/dist/element-extend-theme.css'
import ElementUIExtend from 'element-ui-extend';
Vue.use(ElementUIExtend);

// 单独引入组件
import 'element-ui-extend/dist/element-extend-theme.css'
import {comboGrid, paginationTable, formatter, validator};
Vue.use(comboGrid);
Vue.use(paginationTable);
Vue.prototype.formatter = formatter;
Vue.prototype.validator = validator;
```

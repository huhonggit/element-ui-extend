# element-ui-extend

> 这是一个基于element-ui的小项目，根据公司项目的需要，
  封装了两个经常使用的组件: ComboGrid 与 PaginationTable，
  并提供了几个常用的数据格式化与表单验证方法。

## docs

- [element-ui-extend](https://heyyihai.github.io/element-ui-extend/)

## Getting started

### install dependencies
``` bash
npm i element-ui-extend
```

### Usage

#### 完整引入组件
``` bash
import 'element-ui-extend/dist/element-extend-theme.css'
import ElementUIExtend from 'element-ui-extend';
Vue.use(ElementUIExtend);
```
#### 单独引入组件
``` bash
import 'element-ui-extend/dist/element-extend-theme.css'
import {comboGrid, paginationTable, formatter, validator};
Vue.use(comboGrid);
Vue.use(paginationTable);
Vue.prototype.formatter = formatter;
Vue.prototype.validator = validator;
```

## 本地启动项目
### 前端项目
本地启动前端项目时，由于项目依赖 webpack 3.x，使用npm安装会生成错误的依赖树，所以推荐使用yarn进行安装。
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 后台接口
``` bash
# 进入后台接口项目
cd my-express

# 安装依赖
npm install

# 启动项目
npm run dev
```

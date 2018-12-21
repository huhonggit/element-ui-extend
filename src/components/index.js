import '../theme/combo-grid.less';
import comboGrid from './comboGrid';
import '../theme/pagination-table.less';
import paginationTable from './paginationTable';

import formatter from '../utils/formatter';
import validator from '../utils/validator';

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  comboGrid,
  paginationTable,
  formatter,
  validator
}

const ElementUIExtend = {
  comboGrid,
  paginationTable,
  formatter,
  components: ['comboGrid', 'paginationTable'],
  methods: ['formatter'],
  install(Vue) {
    this.components.forEach(item => {
      Vue.component(item, this[item]);
    });
    this.methods.forEach(method => {
      Vue.prototype['$' + method] = this[method];
    })
  }
};

export default ElementUIExtend;


export const Col = require('./col.vue');

export const install = (Vue) => {
  Vue.component('v-col', Col);
};

export default {
  Col,
};

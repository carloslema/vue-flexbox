export const Grid = require('./grid.vue');

export const install = (Vue) => {
  Vue.component('v-grid', Grid);
};

export default {
  Grid,
};

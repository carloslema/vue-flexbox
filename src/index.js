import * as VCol from './components/col/col.vue';
import * as VGrid from './components/grid/grid.vue';
import * as VRow from './components/row/row.vue';
import * as VText from './components/text/text.vue';

require('./assets/stylus/flexbox-grid.styl');

export const components = {
  VCol,
  VGrid,
  VRow,
  VText,
};

export default {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  },
};

export {
  VCol,
  VGrid,
  VRow,
  VText,
};

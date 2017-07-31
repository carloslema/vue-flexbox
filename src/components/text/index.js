export const Text = require('./text.vue');

export const install = (Vue) => {
  Vue.component('v-text', Text);
};

export default {
  Text,
};

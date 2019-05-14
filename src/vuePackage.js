import Vue from 'vue';
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filters from './filters';
import * as methods from './utils/methods';

Vue.use(ELEMENT);

Vue.prototype.$method = methods;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

export default Vue;

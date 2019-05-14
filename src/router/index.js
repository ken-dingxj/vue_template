import Vue from 'vue';
import Router from 'vue-router';
import beforeRouterConf from './before-router';

Vue.use(Router);
const router = new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Login' }
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/views/login/login'], resolve)
    }
  ]
});
router.beforeEach(beforeRouterConf);
export default router;

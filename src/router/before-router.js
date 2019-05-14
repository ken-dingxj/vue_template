import { getStore, removeStore } from '../utils/methods';

export default (to, from, next) => {
  /**
   * 登录
   */
  if (from.fullPath === '/' && to.fullPath === '/Login') {
    next();
    return;
  }
  /**
   * 登出
   */
  if (from.fullPath !== '/' && to.fullPath === '/Login') {
    removeStore('token');
    next();
    return;
  }
  /**
   *  判断该路由是否需要登录权限
   */
  if (getStore('token')) {
    /**
     * 如果未匹配到路由
     * 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
     */
    if (to.matched.length === 0 && to.fullPath !== '/') {
      from.name ? next({ name: from.name }) : next('/');
      return;
    }
    next();
    return;
  }
  /**
   * 默认跳转
   */
  next('/');
};

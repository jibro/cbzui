import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve=>require(['@/pages/login'],resolve)
    },
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/pages/home'],resolve),
      children: [
        {
          path: 'list1',
          name: 'list1',
          component:  resolve=>require(['@/pages/list'],resolve)
        },
        {
          path: 'list2',
          name: 'list2',
          component:  resolve=>require(['@/pages/list2'],resolve)
        },
        {
          path: 'noPage',
          name: 'noPage',
          component:  resolve=>require(['@/pages/noPage'],resolve)
        }
      ]
    }
  ]
});

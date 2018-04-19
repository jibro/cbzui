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
          path: 'noPage',
          name: 'noPage',
          component:  resolve=>require(['@/pages/noPage'],resolve)
        },
        {
          path: 'configList',
          name: 'configList',
          component:  resolve=>require(['@/pages/configList'],resolve),
          meta: {
            title: '配置查询'
          }
        },
        {
          path: 'componentList',
          name: 'componentList',
          component:  resolve=>require(['@/pages/componentList'],resolve),
          meta: {
            title: '中间件查询'
          }
        },{
          path: 'serviceList',
          name: 'serviceList',
          component:  resolve=>require(['@/pages/serviceList'],resolve),
          meta: {
            title: '服务查询'
          }
        },{
          path: 'templateServiceList',
          name: 'templateServiceList',
          component:  resolve=>require(['@/pages/templateServiceList'],resolve),
          meta: {
            title: '模板服务查询'
          }
        },{
          path: 'containerList',
          name: 'containerList',
          component:  resolve=>require(['@/pages/containerList'],resolve),
          meta: {
            title: '容器查询'
          }
        },{
          path: 'environmentList',
          name: 'environmentList',
          component:  resolve=>require(['@/pages/environmentList'],resolve),
          meta: {
            title: '环境查询'
          }
        }
      ]
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';
import configList from '@/pages/configList';
import componentList from '@/pages/componentList';
import serviceList from '@/pages/serviceList';
import templateServiceList from '@/pages/templateServiceList';
import containerList from '@/pages/containerList';
import environmentList from '@/pages/environmentList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'configList',
      component: configList,
      meta: {
        title: '配置查询'
      }
    },
    {
      path: '/componentList',
      name: 'componentList',
      component: componentList,
      meta: {
        title: '中间件查询'
      }
    },
    {
      path: '/serviceList',
      name: 'serviceList',
      component: serviceList,
      meta: {
        title: '服务查询'
      }
    },
    {
      path: '/templateServiceList',
      name: 'templateServiceList',
      component: templateServiceList,
      meta: {
        title: '模板服务查询'
      }
    },
    {
      path: '/containerList',
      name: 'containerList',
      component: containerList,
      meta: {
        title: '容器查询'
      }
    },
    {
      path: '/environmentList',
      name: 'environmentList',
      component: environmentList,
      meta: {
        title: '环境查询'
      }
    }
  ]
});

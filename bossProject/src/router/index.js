import Vue from 'vue';
import Router from 'vue-router';
import list from '@/pages/list';
import list1 from '@/pages/list.1';
import list2 from '@/pages/list.2';
import list3 from '@/pages/list.3';
import list4 from '@/pages/list.4';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list,
      meta: {
        title: '配置查询'
      }
    },
    {
      path: '/list1',
      name: 'list1',
      component: list1,
      meta: {
        title: '中间件查询'
      }
    },
    {
      path: '/list2',
      name: 'list2',
      component: list2,
      meta: {
        title: '服务查询'
      }
    },
    {
      path: '/list3',
      name: 'list3',
      component: list3,
      meta: {
        title: '容器查询'
      }
    },
    {
      path: '/list4',
      name: 'list4',
      component: list4,
      meta: {
        title: '环境查询'
      }
    }
  ]
});

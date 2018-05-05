import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'
import API from '@/api';
Vue.use(Router);
const myRoutes = [
  {
    path: '/login',
    name: 'login',
    component: resolve=>require(['@/pages/login'],resolve)
  },
  {
    path: '/',
    name: 'home',
    redirect:'/welcome',
    component: resolve=>require(['@/pages/home'],resolve),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component:  resolve=>require(['@/pages/welcome'],resolve),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/noPage',
        name: 'noPage',
        component:  resolve=>require(['@/pages/noPage'],resolve),
        meta: {
          title: '找不到页面'
        }
      },
      {
        path: '/userRoleAuth',
        name: 'userRoleAuth',
        component:  resolve=>require(['@/pages/userRoleAuth'],resolve),
        meta: {
          title: '角色权限管理'
        }
      },
      {
        path: '/configList',
        name: 'configList',
        component:  resolve=>require(['@/pages/configList'],resolve),
        meta: {
          title: '统一配置管理'
        }
      },
      {
        path: '/componentList',
        name: 'componentList',
        component:  resolve=>require(['@/pages/componentList'],resolve),
        meta: {
          title: '中间件管理'
        }
      },
      {
        path: '/serviceList',
        name: 'serviceList',
        component:  resolve=>require(['@/pages/serviceList'],resolve),
        meta: {
          title: '服务管理'
        }
      },
      {
        path: '/templateServiceList',
        name: 'templateServiceList',
        component:  resolve=>require(['@/pages/templateServiceList'],resolve),
        meta: {
          title: '模板服务管理'
        }
      },
      {
        path: '/containerList',
        name: 'containerList',
        component:  resolve=>require(['@/pages/containerList'],resolve),
        meta: {
          title: '容器管理'
        }
      },
      {
        path: '/environmentList',
        name: 'environmentList',
        component:  resolve=>require(['@/pages/environmentList'],resolve),
        meta: {
          title: '环境管理'
        }
      }
    ]
  }
];
const router =  new Router({
  mode: 'history',
  base: '/cloud',
  routes: myRoutes
});
let needArr = [];
let fxRouter = function (arr) {
  arr.forEach(obj => {
    needArr.push({
      name: obj.meta ? obj.meta.title : '',
      key: obj.name,
      path: obj.path
    });
    if (obj.children) {
      fxRouter(obj.children);
    }
  })
}
fxRouter(myRoutes);
let menuFun = function (to, from, next) {
  let accessMenu = store.state.menuData;
  if (window.localStorage.token) {
    if (to.name === 'noPage') {
      next();
    } else {
      const toName = to.name;
      if (!toName) {
        next({name: 'noPage'});
      } else {
        store.dispatch('selectedKeyAction', '');
        accessMenu.forEach(obj => {
          if (obj.key === to.name) {
            store.dispatch('selectedKeyAction', obj.key);
            next();
          }
        })
        if (!store.state.selectedKey) {
          next({name: 'noPage'});
        }
      }
    }
  } else {
    next({name: 'login'});
  }
}
let enter = false;
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  } else if (from.name === 'login' || !enter) {
    let userName = window.localStorage.userName;
    let menu = [];
    enter = true;
    if (userName) {
      API.getUserDetail(userName).then((res) => {
        store.dispatch('toSaveUserInfo', res.data);
        let permissions = store.state.userInfo.permissions;
        if (permissions && permissions.length > 0) {
          needArr.forEach(obj => {
            if (permissions.indexOf(obj.path) !== -1) {
              menu.push(obj);
            }
          })
        } else {
          menu = [];
          next({name: 'noPage'});
        }
        store.dispatch('initMenuData', menu);
        menuFun(to, from, next);
      });
    } else {
      next({name: 'login'});
    }
  } else {
    menuFun(to, from, next);
  }
})
export default router;
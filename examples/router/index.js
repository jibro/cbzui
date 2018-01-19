import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)
let router = new Router({
  routes: routes
})
router.beforeEach((to, from, next) => {
  if (document.body.clientWidth < 500 && document.querySelector('.side-nav')) {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.querySelector('.side-nav').style.display = 'none'
  }
  next()
})
export default router

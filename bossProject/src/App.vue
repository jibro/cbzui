<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    computed: mapState({
      menuData: state => state.menuData
    }),
    mounted: function () {
      this.$router.beforeEach((to, from, next) => {
        let accessMenu = this.menuData
        if (to.name === 'login') {
          next()
        } else {
          if(window.localStorage.token){
            if (to.name === 'home' || to.name === 'noPage') {
              next()
            } else {
              const toName = to.name
              console.log(toName)
              if (!toName) {
                next({name: 'noPage'})
              } else {
                let isBl=false
                for (let y = 0; y < accessMenu.length; y++) {
                  if (accessMenu[y].path) {
                    if (accessMenu[y].key == toName) {
                      isBl=true
                      break;
                    }
                  } else if (accessMenu[y].items && accessMenu[y].items.length > 0) {
                    let list = accessMenu[y].items
                    for (let i = 0; i < list.length; i++) {
                      if (list[i].key==toName) {
                        isBl=true
                        break;
                      }
                    }
                  }
                }
                if (isBl) {
                  next()
                } else {
                  next({name: 'noPage'})
                }
              }
            }
          }else{
            next({name: 'login'})
          }
        }
      })
      window.logout = () => {
        window.location.replace(`#/login?url=${encodeURIComponent(window.location.href)}`)
      }
      window.msgbox = (title, fn) => {
        this.$msgbox({
          title: '注意',
          message: title,
          confirmText: '确定'
        }).then((confirm) => {
          console.log(fn)
          if (typeof fn == 'function') {
            fn()
          }
        }, (cancel) => {
        })
      }
    },
  };
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  #app {
    color: #2c3e50;
    height: 100%;
  }
</style>

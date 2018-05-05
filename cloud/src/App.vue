<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    mounted: function () {
      window.logout = () => {
        this.$route.replace('/login')
      }
      window.msgbox = (title, fn) => {
        this.$msgbox(title).then((confirm) => {
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

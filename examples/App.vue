<template>
  <div id="app">
    <!-- <mainSkeleton v-if="!init"></mainSkeleton> -->
    <div>
      <mainHeader></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="page" v-else></router-view>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import sideNav from './components/side-nav.vue'
  // import mainSkeleton from './main.skeleton.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'index'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav
      // mainSkeleton
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  body{
    background-color: #e5e4e4;
  }
  div.myinput{
    margin: 8px 0;
  }
  .container {
    margin: 8vh auto 0;
    width: 90%;
    border-radius: 6px;
    overflow: hidden;
    background-color: #333;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 210px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
      background-color: #fff;
      min-height: 691px;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>

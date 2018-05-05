<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
  <div class="page-wrap">
    <div class="page-aside">
      <div class="page-aside-top">
        <img src="../assets/img/logo.png">
      </div>
      <!-- <div class="page-aside-title cw">云检测管理系统</div> -->
      <czb-menu :data="menuData" :selectedKey="selectedKey" @onSelectedKey="onSelectedKey"></czb-menu>
    </div>
    <div class="page-content-wrap">
      <div class="page-top">
        <div class="page-top-title">{{$route.meta.title}}</div>
        <div class="page-top-info">
          <div class="page-top-welcome">欢迎<span>{{$store.state.userInfo.userName}}</span></div>
          <div @click="cancellation" class="page-top-cancel cw tc">注销</div>
        </div>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/api';
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        menu: []
      };
    },
    computed: mapState({
      menuData: state => state.menuData,
      selectedKey: state => state.selectedKey
    }),
    methods: {
      onSelectedKey(item) {
        this.$store.dispatch('selectedKeyAction', item.key)
        this.$router.push(item.path)
      },
      cancellation(){
        window.localStorage.token='';
        window.localStorage.userName = '';
        this.$store.dispatch('toSaveUserInfo', '');
        this.$router.push('login');
      }
    }
  };
</script>
<style lang="less">
  @import url('../assets/css/base.less');
  @import url('../assets/css/main.less');
</style>

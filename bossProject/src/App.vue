<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
  <div class="page-wrap">
    <div class="page-aside">
      <div class="page-aside-top">
        <img src="./assets/img/logo.png">
      </div>
      <!-- <div class="page-aside-title cw">云检测管理系统</div> -->
      <div class="page-menu">
        <ul class="page-menu-list">
          <li>营销管理</li>
          <li>消息管理</li>
        </ul>
      </div>
    </div>
    <div class="page-content-wrap">
      <div class="page-top">
        <div class="page-top-title">后台管理系统</div>
        <div class="page-top-info">
          <div class="page-top-welcome">欢迎您<span>管理员</span></div>
          <div class="page-top-cancel cw tc">注销</div>
        </div>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="page-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'page-index'
};
</script>
<style lang="less">
@import url('./assets/style/base.less');
@import url('./assets/style/main.less');
</style>

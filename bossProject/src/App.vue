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
          <li>
            <router-link to="/">
              <i class="iconfont icon-PC"></i>
              <span>配置查询</span>
            </router-link>
          </li>
          <li>
            <router-link to="/list1">
              <i class="iconfont icon-PC"></i>
              <span>中间件查询</span>
            </router-link>
          </li>
          <li>
            <router-link to="/list2">
              <i class="iconfont icon-PC"></i>
              <span>服务查询</span>
            </router-link>
          </li>
          <li>
            <router-link to="/list3">
              <i class="iconfont icon-PC"></i>
              <span>容器查询</span>
            </router-link>
          </li>
          <li>
            <router-link to="/list4">
              <i class="iconfont icon-PC"></i>
              <span>环境查询</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-content-wrap">
      <div class="page-top">
        <div class="page-top-title">{{$route.meta.title}}</div>
        <div class="page-top-info">
          <div class="page-top-welcome">欢迎您<span>管理员</span></div>
          <div class="page-top-cancel cw tc">注销</div>
        </div>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <!-- <div class="page-bottom"></div> -->
  </div>
</template>

<script>
export default {
  name: 'page-index',
  data() {
    return {
      menu: [
        {
          id: '0',
          name: '营销管理',
          sub: [
            {
              id: '01',
              name: '营销管理1'
            },
            {
              id: '02',
              name: '营销管理2'
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
@import url('./assets/style/base.less');
@import url('./assets/style/main.less');
</style>

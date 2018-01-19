<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    display: none;
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
      .logo{
        width: 12vw;
      }
      .menu{
        color:#00a7ea;
      }
    }
  }
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <router-link :to="{name: 'index'}"><img src="../assets/img/logo.png" class="logo"></router-link>
      <div class="menu" @click="myMenu">导航</div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      myMenu () {
        var sideNav = document.querySelector('.side-nav')
        if (sideNav) {
          var myDisplayStyle = window.getComputedStyle(sideNav, null).getPropertyValue('display')
          if (myDisplayStyle === 'none') {
            sideNav.style.display = 'block'
          } else {
            sideNav.style.display = 'none'
          }
        } else {
          this.$router.push({path: 'giud'})
        }
      }
    }
  }
</script>

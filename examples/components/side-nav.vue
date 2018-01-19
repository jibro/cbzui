<style lang="less" type="text/less">
  .side-nav{
    display: inline-block;
    padding: 32px 0;
    color: #00a7ea;
    background-color: #333;
    z-index: 99;
    .group-container{
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items{
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #c79739;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #fff;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #ccc;
        font-size: 14px;
      }
      .active{
        color: #00a7ea;
      }
    }
  }
</style>
<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(data))" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title]" v-if="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
        <div v-for="item in nav.items">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navConf from '../nav.config.json'
  export default {
    data () {
      return {
        data: navConf
      }
    }
  }
</script>

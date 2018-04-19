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
      <czb-menu :data="menu" :selectedKey="selectedKey" @onSelectedKey="onSelectedKey"></czb-menu>
    </div>
    <div class="page-content-wrap">
      <div class="page-top">
        <div class="page-top-title">后台管理系统</div>
        <div class="page-top-info">
          <div class="page-top-welcome">欢迎您<span>管理员</span></div>
          <div @click="cancellation" class="page-top-cancel cw tc">注销</div>
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
  import menuData from '../nav.config'
  import API from '@/api';
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        selectedKey: '',
        menu: []
      };
    },
    computed: mapState({
      packageInfo: state => state.app.packageInfo
    }),
    mounted() {
      API.queryMenuByName('test').then((res) => {
        let codeList = res.data
        if(codeList&&codeList.length>0){
          let data = JSON.parse(JSON.stringify(menuData))
          for (let y = 0; y < data.length; y++) {
            if (data[y].path) {
              if (codeList.filter(code => code == data[y].code).length == 0) {
                data.splice(y, 1)
              }
            } else if (data[y].items && data[y].items.length > 0) {
              let list = data[y].items
              for (let i = 0; i < list.length; i++) {
                if (codeList.filter(code => code == list[i].code).length == 0) {
                  list.splice(i, 1)
                }
              }
            }
          }
          for (let y = 0; y < data.length; y++) {
            if (data[y].items && data[y].items.length == 0){
              data.splice(y, 1)
            }
          }
          this.menu = data
          let hash = window.location.hash.split('/')
          if(hash.length>1&&hash[1]){
            let isBl=false
            for(let i=0;i<data.length;i++){
              if (data[i].path) {
                if (window.location.hash.indexOf(data[i].path)>-1) {
                  this.selectedKey = data[i].key
                  isBl = true
                  break
                }
              } else if (data[i].items && data[i].items.length > 0) {
                let list = data[i].items
                for (let i = 0; i < list.length; i++) {
                  if (window.location.hash.indexOf(list[i].path)>-1) {
                    this.selectedKey = list[i].key
                    isBl = true
                    break
                  }
                }
              }
            }
            if(!isBl){
              this.$router.push('noPage')
            }
          }
        }else{
          this.menu = []
          this.$router.push('noPage')
        }
        this.$store.dispatch('initMenuData',this.menu)
      }).catch((e) => {
        this.$toast({
          text: `${e}`,
          timing: 1500,
          type: 'warn'
        })
      });
    },
    methods: {
      onSelectedKey(item) {
        this.selectedKey = item.key
        this.$router.push(item.path)
      },
      cancellation(){
        window.localStorage.token=''
        this.$router.push('login')
      }
    }
  };
</script>
<style lang="less">
  @import url('../assets/style/base.less');
  @import url('../assets/style/main.less');
</style>

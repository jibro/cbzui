<template>
  <div class="welcome bgf">
    <h2>welcome, <span>{{userName}}</span></h2>
    <h2>持续集成项目管理</h2>    
    <h2>{{new Date() | formatData}}</h2>
  </div>
</template>
<script>
import {formatDate} from '@/utils';
export default {
  name: 'welcome',
  data () {
    return {
      userName: window.localStorage.userName
    }
  },
  filters: {
    formatData: function (val) {
      if (val) {
        return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
      }
    }
  },
}
</script>
<style lang="less">
  .welcome{
    height: 100%;
    padding: 15px;
    h2{
      margin: 10px;
      color: #999;
      &:first-child {
        font-size: 20px;
        color: #333;
        padding-bottom: 10px;
        border-bottom: 1px solid #e7e7e7;
        span{
          font-weight: bold;
        }
      }
    }
  }
</style>


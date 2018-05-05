<template>
  <div class="welcome bgf">
    <h2>welcome, <span>{{$store.state.userInfo.userName}}</span></h2>
    <h2>ZcCloud置车云平台</h2>    
    <h2>{{new Date() | formatData}}</h2>
  </div>
</template>
<script>
import {formatDate} from '@/utils';
export default {
  name: 'welcome',
  filters: {
    formatData: function (val) {
      if (val) {
        return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
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


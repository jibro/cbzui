<template>
  <div class="error-page bgf">
    <h2 class="error-title">404</h2>
    <div class="error-content">
      <p>页面找不到了</p>
    </div>
  </div>
</template>

<style scoped lang="less">
  .error-page {
    // margin: 120px 0;
    padding: 15px;
    height: 100%;
    .error-title{
      font-size: 40px;
      color: #0097e0;
      border-bottom: 1px solid #e7e7e7;
      padding-bottom: 10px;
    }
    .error-content{
      margin-top: 10px;
      font-size: 20px;
      color: #999;
    }
  }

</style>

<script>
export default{
  name:'noPage'
}
</script>

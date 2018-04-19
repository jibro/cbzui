<template>
  <div id="error" class="error-page">
    <h2 class="headline text-yellow"> 404</h2>
    <div class="error-content">
      <h3><i class="fa fa-warning text-yellow"></i> 页面找不到了</h3>
    </div>
  </div>
</template>

<style scoped type="text/stylus">
  .error-page {
    margin: 120px 0;
    text-align: center!important
  }
  .text-yellow{
    color: #20A0FF;
  }
  @media (max-width: 991px) {
    .error-page {
      width:100%
    }
  }
  a{
    color: #20A0FF;
  }
  .error-page>.headline {
    font-size: 100px;
    font-weight: 300
  }

  @media (max-width: 991px) {
    .error-page>.headline {
      float:none;
      text-align: center
    }
  }

  .error-page>.error-content {
    display: block
  }

  @media (max-width: 991px) {
    .error-page>.error-content {
      margin-left:0
    }
  }

  .error-page>.error-content>h3 {
    font-weight: 300;
    font-size: 25px
  }

  @media (max-width: 991px) {
    .error-page>.error-content>h3 {
      text-align:center
    }
  }

</style>

<script type="text/ecmascript-6">
  export default{
    name:'noPage'
  }
</script>

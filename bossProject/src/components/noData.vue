<template>
  <div class="no-data" v-if="show">
    <div class="no-data-main">
        <img src="../assets/img/nodata.png">
        <p>暂无资料</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'no-data',
  props: ['show']
}
</script>
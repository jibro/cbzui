<template>
  <div class="c__shadow" v-if="visible"></div>
</template>
<script>
export default {
  name: 'CShadow',
  data () {
    return {
      visible: true
    }
  }
}
</script>
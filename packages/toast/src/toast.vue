<template>
  <div class="c__toast c__toast--default" v-if="visible">
    <i class="czbfont iczb-weitongyi c__toast__icon" v-if="type === 'success'"></i>
    <i class="czbfont iczb-tishi c__toast__icon" v-if="type === 'warn'"></i>
    <span class="c__toast__text" v-html="text"></span>
  </div>
</template>
<script>

export default {
  name: 'czbToast',
  data () {
    return {
      visible: false,
      text: '',
      type: ''
    }
  }
}
</script>

<template>
  <div class="c__toast" :class="['c__toast--'+position]" v-if="visible">
    {{text}}
  </div>
</template>
<script>

export default {
  name: 'CToast',
  data () {
    return {
      visible: false,
      text: '',
      position: ''
    }
  }
}
</script>

<template>
  <div class="c__msg-box">
    <div v-if="title" class="c__msg-box__title">{{title}}</div>
    <div class="c__msg-box__message">{{message}}</div>
    <div class="c__msg-box__btn">
      <div class="c__msg-box__btn__confirm" @click="confirm">{{confirmText}}</div>
      <div class="c__msg-box__btn__cancel" v-if="showCancel" @click="cancel">{{cancelText}}</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CMsgBox',
  data () {
    return {
      title: '',
      message: '',
      showCancel: null,
      confirmText: '',
      cancelText: ''
    }
  },
  methods: {
    confirm () {},
    cancel () {}
  }
}
</script>

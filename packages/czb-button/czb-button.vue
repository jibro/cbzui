<template>
	<div class="czb__button" :class="['czb__button--'+type, min?'is-min':'', !width && autowidth?'is-autowidth':'', disabled?'is-disabled':'', !disabled && ishover?'is-hover':'', !$slots.default?'is-icon':'']" :style="{width: width,height:height,'font-size':size}" @mouseover="mouseover" @mouseout="mouseout" @mousedown="mousedown" @mouseup="mouseup">
    <span class="czb__button__left" v-if="$slots.default && $slots.left">
      <slot name="left"></slot>
    </span>
    <span>
      <slot></slot>
      <slot name="icon" v-if="!$slots.default"></slot>
    </span>
    <span class="czb__button__right" v-if="$slots.default && $slots.right">
      <slot name="right"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'czb-button',
  data () {
    return {
      ishover: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    min: {
      type: Boolean,
      default: false
    },
    autowidth: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    mouseover () {
      this.ishover = true
    },
    mouseout () {
      this.ishover = false
    },
    mousedown () {
      this.ishover = false
      if (!this.disabled) {
        this.$emit('btnClick')
      }
    },
    mouseup () {
      this.ishover = true
    }
  }
}
</script>

<template>
	<div class="czb__tab" :style="{'font-size':size}">
    <ul :class="{'is-hasborder': hasborder}">
      <li v-for="tab in datas" :key="tab.id" @click="tabChoose(tab)" class="czb__tab__main" :class="{'is-active':tab.active}">
        <span>{{tab.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'czb-tab',
  props: {
    datas: {
      type: Array,
      default: {},
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    hasborder: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    tabChoose (tab) {
      this.datas.forEach(i => {
        i.active = false
      })
      tab.active = true
      this.$emit('tabChoose', tab)
    }
  }
}
</script>

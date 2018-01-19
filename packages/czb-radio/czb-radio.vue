<template>
	<div class="czb__radio" :class="{'is-inline': inline}">
    <div v-for="item in datas" :key="item.key" class="czb__radio__item" :class="{'is-inline': inline, 'czb__radio__item--hasborder': hasborder, 'is-choosed': item.isChoosed, 'is-disabled': item.disabled}" @click="radioClick(item)">
      <div class="czb__radio__item__icon" :class="{'is-choosed': item.isChoosed}"></div>
      <div class="czb__radio__item__name" :class="{'is-choosed': item.isChoosed}">{{item.value}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'czb-radio',
  props: {
    value: {
      type: [String, Object],
      default: '',
      required: true
    },
    datas: {
      type: Array,
      default: [],
      required: true
    },
    inline: {
      type: Boolean,
      default: false
    },
    hasborder: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    radioClick (item) {
      if (!item.disabled) {
        this.datas.forEach((obj, i) => {
          this.$set(this.datas[i], 'isChoosed', false)
        })
        this.$set(item, 'isChoosed', true)
        this.$emit('chooseItem', item)
        this.$emit('input', item)
      }
    }
  }
}
</script>

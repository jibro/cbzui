<template>
	<div class="czb__checkbox" :class="{'is-inline': inline}">
    <div v-for="item in datas" :key="item.key" class="czb__checkbox__item" :class="{'is-inline': inline, 'czb__checkbox__item--hasborder': hasborder, 'is-choosed': item.isChoosed, 'is-disabled': item.disabled}" @click="checkboxClick(item)">
      <div class="czb__checkbox__item__icon" :class="{'is-choosed': item.isChoosed}"></div>
      <div class="czb__checkbox__item__name" :class="{'is-choosed': item.isChoosed}">{{item.value}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'czb-checkbox',
  props: {
    value: {
      type: [String, Array],
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
  computed: {
    choosedData () {
      return this.datas.filter(obj => {
        return obj.isChoosed
      })
    }
  },
  methods: {
    checkboxClick (item) {
      if (!item.disabled) {
        this.$set(item, 'isChoosed', !item.isChoosed)
        this.$emit('chooseItem', this.choosedData)
        this.$emit('input', this.choosedData)
      }
    }
  }
}
</script>

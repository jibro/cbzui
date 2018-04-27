<template>
	<div class="czb__select" ref="selectdom" :class="{'is-autowidth': autowidth}">
    <div class="czb__select__value" @click="selectClick" :class="{'is-disabled': disabled, 'is-open': isopen}" @mouseover="mouseover" @mouseout="mouseout">
      <span class="czb__select__value--placeholder" v-show="!selectedName">
        {{placeholder}}
      </span>
      <span class="czb__select__value--text" v-show="selectedName">{{selectedName}}</span>
      <i class="czbfont iczb-arrow_down czb__select__value--icon" :class="{'is-open': isopen}" v-show="!clearIconShow"></i>
      <i class="czbfont iczb-clear czb__select__value--icon"  v-show="clearIconShow" @click.stop.prevent="clearSelect"></i>
    </div>
    <ul class="czb__select__list" v-show="isopen" ref="selectlistdom">
      <li class="czb__select__item" :class="{'is-choosed': item.isChoosed}" v-for="(item, i) in datas" :key="item.id" @click.stop.prevent="itemClick(item, i)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'czb-select',
  props: {
    value: {
      type: [String, Object, Array],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    datas: {
      type: Array,
      default: [],
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    multi: {
      type: Boolean,
      default: false
    },
    autowidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isopen: false,
      clearIconShow: false
    }
  },
  computed: {
    choosedData () {
      return this.datas.filter(obj => {
        return obj.isChoosed
      })
    },
    selectedName () {
      let nameStr = ''
      for (let i = 0; i < this.choosedData.length; i++) {
        if (i === this.choosedData.length - 1) {
          nameStr += this.choosedData[i].name
        } else {
          nameStr += this.choosedData[i].name + ','
        }
      }
      return nameStr
    }
  },
  methods: {
    selectClick () {
      if (!this.disabled) {
        this.isopen = !this.isopen
        let getElementTop = function (element) {
          var actualTop = element.offsetTop
          var current = element.offsetParent
          while (current !== null) {
            actualTop += current.offsetTop
            current = current.offsetParent
          }
          return actualTop
        }
        let selectDom = this.$refs.selectdom
        let selectlistDom = this.$refs.selectlistdom
        let winHg = document.documentElement.clientHeight
        let scrollTop = document.documentElement.scrollTop
        let listHeight = 0
        if (this.datas.length <= 8) {
          listHeight = 3 + 10 + 32 * this.datas.length
        } else {
          listHeight = 3 + 10 + 32 * 8
        }
        if (getElementTop(selectDom) - scrollTop + selectDom.offsetHeight + listHeight >= winHg) {
          selectlistDom.style.top = 'auto'
          selectlistDom.style.bottom = '32px'
          selectlistDom.style.marginTop = 0
          selectlistDom.style.marginBottom = '3px'
        } else {
          selectlistDom.style.top = '32px'
          selectlistDom.style.bottom = 'auto'
          selectlistDom.style.marginTop = '3px'
          selectlistDom.style.marginBottom = 0
        }
      }
    },
    clearSelect () {
      this.$emit('input', '')
      this.datas.forEach((obj, i) => {
        this.$set(this.datas[i], 'isChoosed', false)
      })
      this.isopen = false
      this.clearIconShow = false
    },
    itemClick (item, i) {
      if (!this.multi) {
        this.clearSelect()
        this.$set(this.datas[i], 'isChoosed', true)
        this.$emit('chooseItem', item)
        this.$emit('input', item)
      } else {
        this.$set(this.datas[i], 'isChoosed', !item.isChoosed)
        this.$emit('chooseItem', this.choosedData)
        this.$emit('input', this.choosedData)
      }
    },
    mouseover () {
      if (!this.disabled && this.clear && this.selectedName) {
        this.clearIconShow = true
      }
    },
    mouseout () {
      if (this.clear) {
        this.clearIconShow = false
      }
    },
    handleBodyClick (e) {
      if (this.isopen) {
        let el = this.$refs.selectdom
        if (e.target !== el && e.target.parentNode !== el && e.target.parentNode.parentNode !== el) {
          this.isopen = false
        }
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.handleBodyClick)
  },
  destroyed () {
    document.removeEventListener('click', this.handleBodyClick)
  }
}
</script>

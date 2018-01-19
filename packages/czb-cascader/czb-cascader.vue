<template>
	<div class="czb__cascader" ref="selectdom" :class="{'is-autowidth': autowidth}">
    <div class="czb__cascader__value" @click="selectClick" :class="{'is-disabled': disabled, 'is-open': isopen, 'is-autowidth': autowidth}" @mouseover="mouseover" @mouseout="mouseout">
      <span class="czb__cascader__value--placeholder" v-show="!selectedName">
        {{placeholder}}
      </span>
      <span class="czb__cascader__value--text" v-show="selectedName">{{selectedName}}</span>
      <i class="czbfont iczb-arrow_down czb__cascader__value--icon" :class="{'is-open': isopen}" v-show="!clearIconShow"></i>
      <i class="czbfont iczb-clear czb__cascader__value--icon"  v-show="clearIconShow" @click.stop.prevent="toclear"></i>
    </div>
    <div class="czb__cascader__wrap" ref="listwrapdom" v-show="isopen">
      <ul class="czb__cascader__list" ref="list" v-for="(ptem, p) in showData" :key="p">
        <li class="czb__cascader__item" :class="{'is-noSub': !item.sub||item.sub.length === 0, 'is-selected': item.isSelected}"  v-for="(item, i) in ptem" :key="i" @click.stop.prevent="itemClick(item, p, ptem)">
          <i class="czb__cascader__item__checkbox" :class="{'is-choosed': item.isChoosed, 'is-parentChoose': !(!item.sub||item.sub.length === 0) && !parentChoose}" @click.stop.prevent="checkClick(item)"></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'czb-cascader',
  props: {
    value: {
      type: [String, Object, Array],
      default: '',
      required: true
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
    },
    parentChoose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isopen: false,
      clearIconShow: false,
      showData: [this.datas]
    }
  },
  computed: {
    choosedData () {
      let myarr = []
      let saveFun = function (arr) {
        arr.forEach(obj => {
          if (obj.isChoosed) {
            let o = {}
            o['id'] = obj.id
            o['name'] = obj.name
            myarr.push(o)
          }
          if (obj.sub && obj.sub.length > 0) {
            saveFun(obj.sub)
          }
        })
      }
      saveFun(this.datas)
      return myarr
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
      }
    },
    toclear () {
      this.clearSelect(this.datas, true)
      this.showData = [this.datas]
      this.isopen = false
      this.clearIconShow = false
    },
    clearSelect (ptem, clearChoosed) {
      this.$emit('input', '')
      ptem.forEach((obj, i) => {
        this.$set(obj, 'isSelected', false)
        if (clearChoosed) {
          this.$set(obj, 'isChoosed', false)
        }
        if (obj.sub && obj.sub.length > 0) {
          this.clearSelect(obj.sub, clearChoosed)
        }
      })
    },
    itemClick (item, p, ptem) {
      this.showData.splice(p + 1)
      this.clearSelect(ptem)
      let getElementLeft = function (element) {
        var actualLeft = element.offsetLeft
        var current = element.offsetParent
        while (current !== null) {
          actualLeft += current.offsetLeft
          current = current.offsetParent
        }
        return actualLeft
      }
      if (item.sub && item.sub.length > 0) {
        this.showData.push(item.sub)
        this.$nextTick(() => {
          let listDoms = this.$refs.list
          let innerwidth = 0
          for (let i = 0; i < listDoms.length; i++) {
            innerwidth += Math.ceil(listDoms[i].offsetWidth + 1)
          }
          let winWh = document.documentElement.clientWidth
          this.$refs.listwrapdom.style.width = innerwidth + 'px'
          if (innerwidth + getElementLeft(this.$refs.listwrapdom) >= winWh) {
            this.$refs.listwrapdom.style.left = 'auto'
            this.$refs.listwrapdom.style.right = 0
          } else {
            this.$refs.listwrapdom.style.left = 0
            this.$refs.listwrapdom.style.right = 'auto'
          }
        })
        this.$set(item, 'isSelected', !item.isSelected)
      }
    },
    checkClick (item) {
      if (!this.multi) {
        this.toclear()
        this.$set(item, 'isChoosed', true)
        this.$emit('chooseItem', item)
        this.$emit('input', item)
      } else {
        this.$set(item, 'isChoosed', !item.isChoosed)
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
        if (e.target !== el && e.target.parentNode !== el && e.target.parentNode.parentNode !== el && e.target.parentNode.parentNode.parentNode !== el) {
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

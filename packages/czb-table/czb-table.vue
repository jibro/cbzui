<template>
  <div class="czb__table">
    <div class="czb__table__box" ref="box">    
      <div class="czb__table__wrap" :style="{'width': wrapWidth}">
        <div class="czb__table__head" :style="{'width': wrapWidth}">
          <div class="czb__table__head__item czb__table__head__check" v-if="hascheck">
            <i class="czb__table__checkbox" :class="{'is-choosed': checkedAll}" @click="checkAll"></i>
          </div>
          <div class="czb__table__head__item" v-for="col in columns" :key="col.key" :style="{'width': Math.ceil(boxWidth *parseInt(col.width)/100) + 'px'}">{{col.title}}</div>
          <div class="czb__table__head__item" v-if="handle" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}">操作</div>
        </div>
        <div class="czb__table__content" :style="{'width': wrapWidth}">
          <div class="czb__table__content__row" v-for="(row, index) in tabledata" :key="row.id" :style="{'width': wrapWidth}">
            <div class="czb__table__content__col czb__table__content__check" v-if="hascheck">
              <i class="czb__table__checkbox" :class="{'is-choosed': row.isChoosed}" @click="checkboxClick(row)"></i>
            </div>
            <div class="czb__table__content__col" v-for="col in columns" :key="col.key" v-html="(col.render && col.render(row[col.key], row, index)) || row[col.key]" :style="{'width': Math.ceil(boxWidth *parseInt(col.width)/100) + 'px'}" :class="{'is-ellipsis': ellipsis}"></div>
            <div class="czb__table__content__col" v-if="handle" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}">
              <a href="javascript:void(0)" v-for="(obj, btnIndex) in handle.btns" :key="btnIndex" @click="handleClick({btnIndex, row, index})">
                <i v-if="handle.type == 'icon'" :class="[handle.fontClass, obj.name]" :title="obj.title"></i>
                <span v-else :title="obj.title">{{obj.name}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="czb__table__box" v-if="handle && fixed == 'right'" :class="{'is-fixed-right': fixed == 'right'}"> 
      <div class="czb__table__wrap">
        <div class="czb__table__head">
          <div class="czb__table__head__item" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}">操作</div>
        </div>
        <div class="czb__table__content">
          <div class="czb__table__content__row" v-for="(row, index) in tabledata" :key="row.id" :style="{'height': row.handleHg + 'px'}">
            <div class="czb__table__content__col" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}">
              <a href="javascript:void(0)" v-for="(obj, btnIndex) in handle.btns" :key="btnIndex" @click="handleClick({btnIndex, row, index})">
                <i v-if="handle.type == 'icon'" :class="[handle.fontClass, obj.name]" :title="obj.title"></i>
                <span v-else :title="obj.title">{{obj.name}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'czb-table',
  data () {
    return {
      checkedAll: false,
      wrapWidth: 'auto',
      boxWidth: 0
    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    tabledata: {
      type: Array,
      required: true
    },
    hascheck: {
      type: Boolean
    },
    ellipsis: {
      type: Boolean
    },
    handle: {},
    fixed: {
      type: String
    }
  },
  computed: {
    choosedData () {
      return this.tabledata.filter(obj => {
        return obj.isChoosed
      })
    }
  },
  methods: {
    checkboxClick (item) {
      this.$set(item, 'isChoosed', !item.isChoosed)
      this.$emit('chooseItem', this.choosedData)
      this.$emit('input', this.choosedData)
      let choosedNum = this.tabledata.filter(item => {
        return item.isChoosed
      }).length
      if (choosedNum === this.tabledata.length) {
        this.checkedAll = true
      } else {
        this.checkedAll = false
      }
    },
    checkAll () {
      this.checkedAll = !this.checkedAll
      this.tabledata.forEach(item => {
        this.$set(item, 'isChoosed', this.checkedAll)
      })
      this.$emit('chooseItem', this.choosedData)
      this.$emit('input', this.choosedData)
    },
    handleClick (obj) {
      this.$emit('handleClick', obj)
    },
    wrapWidthFn () {
      let sum = 0
      if (this.hascheck) {
        sum += 46
      }
      this.columns.forEach(obj => {
        if (obj.width) {
          let objWidth = Math.ceil(this.boxWidth * parseInt(obj.width) / 100)
          if (objWidth > 58) {
            sum += objWidth
          } else {
            sum += 58
          }
        } else {
          sum += 58
        }
      })
      if (this.handle) {
        if (this.handle.width) {
          let handleWidth = Math.ceil(this.boxWidth * parseInt(this.handle.width) / 100)
          let btnNum = this.handle.btns.length
          let btnNeedWidth = 0
          if (this.handle.type === 'icon') {
            btnNeedWidth = 58 + (btnNum - 1) * 20
          } else {
            btnNeedWidth = btnNum * 58
          }
          if (handleWidth > btnNeedWidth) {
            sum += handleWidth
          } else {
            sum += btnNeedWidth
          }
        }
      }
      if (sum > this.boxWidth) {
        return `${sum}px`
      } else {
        return 'auto'
      }
    }
  },
  watch: {
    'tabledata': {
      handler (curVal) {
        this.$nextTick(() => {
          this.boxWidth = this.$refs.box.offsetWidth
          this.wrapWidth = this.wrapWidthFn()
          if (this.fixed === 'right') {
            let queryRow = this.$refs.box.getElementsByClassName('czb__table__content__row')
            for (let i = 0; i < queryRow.length; i++) {
              this.$set(this.tabledata[i], 'handleHg', queryRow[i].offsetHeight)
            }
          }
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    this.boxWidth = this.$refs.box.offsetWidth
  }
}
</script>
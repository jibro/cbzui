<template>
  <div class="czb__table">
    <div class="czb__table__box" ref="box">    
      <div class="czb__table__wrap" :style="{'width': wrapWidth}">
        <div class="czb__table__head" :style="{'width': wrapWidth}">
          <div class="czb__table__head__item czb__table__head__check" v-if="hasCheck">
            <i class="czb__table__checkbox" :class="{'is-choosed': checkedAll}" @click="checkAll"></i>
          </div>
          <div class="czb__table__head__item" v-for="col in columns" :key="col.key" :style="{'width': Math.ceil(boxWidth *parseInt(col.width)/100) + 'px'}">{{col.title}}</div>
          <div class="czb__table__head__item" v-if="handle">操作</div>
        </div>
        <div class="czb__table__content" :style="{'width': wrapWidth}">
          <div class="czb__table__content__row" v-for="(row, index) in tableData" :key="row.id" :style="{'width': wrapWidth}">
            <div class="czb__table__content__col czb__table__content__check" v-if="hasCheck">
              <i class="czb__table__checkbox" :class="{'is-choosed': row.isChoosed}" @click="checkboxClick(row)"></i>
            </div>
            <div class="czb__table__content__col" v-for="col in columns" :key="col.key" v-html="(col.render && col.render(row[col.key], row, index)) || row[col.key]" :style="{'width': Math.ceil(boxWidth *parseInt(col.width)/100) + 'px'}"></div>
            <div class="czb__table__content__col" v-if="handle" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}" :class="{'is-flexnone': handle.width}">
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
          <div class="czb__table__head__item" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}" :class="{'is-flexnone': handle.width }">操作</div>
        </div>
        <div class="czb__table__content">
          <div class="czb__table__content__row" v-for="(row, index) in tableData" :key="row.id">
            <div class="czb__table__content__col" :style="{'width': Math.ceil(boxWidth *parseInt(handle.width)/100) + 'px'}" :class="{'is-flexnone': handle.width}">
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
    tableData: {
      type: Array,
      required: true
    },
    hasCheck: {
      type: Boolean
    },
    handle: {},
    fixed: {
      type: String
    }
  },
  computed: {
    choosedData () {
      return this.tableData.filter(obj => {
        return obj.isChoosed
      })
    }
  },
  methods: {
    checkboxClick (item) {
      this.$set(item, 'isChoosed', !item.isChoosed)
      this.$emit('chooseItem', this.choosedData)
      this.$emit('input', this.choosedData)
      let choosedNum = this.tableData.filter(item => {
        return item.isChoosed
      }).length
      if (choosedNum === this.tableData.length) {
        this.checkedAll = true
      } else {
        this.checkedAll = false
      }
    },
    checkAll () {
      this.checkedAll = !this.checkedAll
      this.tableData.forEach(item => {
        this.$set(item, 'isChoosed', this.checkedAll)
      })
    },
    handleClick (obj) {
      this.$emit('handleClick', obj)
    },
    wrapWidthFn () {
      let sum = 0
      if (this.hasCheck) {
        sum += 46
      }
      this.columns.forEach(obj => {
        if (obj.width) {
          sum += Math.ceil(this.boxWidth * parseInt(obj.width) / 100)
        } else {
          sum += 46
        }
      })
      if (this.handle) {
        if (this.handle.width) {
          sum += Math.ceil(this.boxWidth * parseInt(this.handle.width) / 100)
        } else {
          sum += this.handle.btns.length * 66
        }
      }
      if (sum > this.boxWidth) {
        return `${sum}px`
      } else {
        return 'auto'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.boxWidth = this.$refs.box.offsetWidth
      this.wrapWidth = this.wrapWidthFn()
      window.onresize = () => {
        this.wrapWidth = this.wrapWidthFn()
      }
    })
  }
}
</script>
<template>
  <div class="czb__pagination">
    <div class="czb__pagination__arr" v-if="pagination.pageArr">
      <czb-select :datas="pagination.pageArr" placeholder="请选择" :autowidth="true" @chooseItem="chooseItem"></czb-select>
    </div>
    <div class="czb__pagination__wrap">
      <div class="czb__pagination__previous" :class="{'nopage': pagination.page == 1}" @click="pagination.page != 1 && goPage(pagination.page - 1)">
        <i class="czbfont iczb-xiangzuojiantou"></i>
      </div>
      <div class="czb__pagination__item" :class="{'active': pagination.page == 1}" @click="goPage(1)">1</div>
      <div class="czb__pagination__more" v-if="showPrevMore">...</div>
      <div class="czb__pagination__item" v-for="(num, i) in pages" :key="i" :class="{'active': pagination.page == num}" @click="goPage(num)">{{num}}</div>
      <div class="czb__pagination__more" v-if="showNextMore">...</div>
      <div class="czb__pagination__item" v-if="pageNum != 1" :class="{'active': pagination.page == pageNum}" @click="goPage(pageNum)">{{pageNum}}</div>
      <div class="czb__pagination__next" :class="{'nopage': pagination.page == pageNum}" 
      @click="pagination.page != pageNum && goPage(pagination.page + 1)">
        <i class="czbfont iczb-xiangyoujiantou"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'czb-pagination',
    data () {
      return {
        showPrevMore: false,
        showNextMore: false,
        pageNum: 0
      }
    },
    props: {
      pagination: {
        type: Object
      }
    },
    computed: {
      pages () {
        if (this.pagination) {
          this.pageNum = Math.ceil(this.pagination.total / this.pagination.pageSize)
          const array = []
          const pageCount = this.pageNum
          const current = this.pagination.page
          const _offset = 2
          const offset = {
            start: current - _offset,
            end: current + _offset
          }
          if (offset.start < 1) {
            offset.end = offset.end + (1 - offset.start)
            offset.start = 1
          }
          if (offset.end > pageCount) {
            offset.start = offset.start - (offset.end - pageCount)
            if (offset.start < 1) offset.start = 1
            offset.end = pageCount
          }
          this.showPrevMore = (offset.start > 1)
          this.showNextMore = (offset.end < pageCount)
          if (pageCount !== 1) {
            for (let i = offset.start + 1; i < offset.end; i++) {
              array.push(i)
            }
          }
          return array
        }
      }
    },
    methods: {
      goPage (num) {
        this.checkedAll = false
        this.$emit('goPage', num)
      },
      chooseItem (item) {
        this.pagination.pageSize = item.id
        this.$emit('goPage', 1)
      }
    }
  }
</script>

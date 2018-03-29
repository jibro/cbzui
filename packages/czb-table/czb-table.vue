<template>
  <div class="czb__table">
    <div class="czb__table__wrap">
      <div class="czb__table__head">
        <div class="czb__table__head__item" v-for="col in columns" :key="col.key">{{col.title}}</div>
      </div>
      <div class="czb__table__content">
        <div class="czb__table__content__row" v-for="table in tableData" :key="table.id">
          <div class="czb__table__content__col" v-for="col in columns" :key="col.key">{{table[col.key]}}</div>
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
      key: 1
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
    }
  }
}
</script>
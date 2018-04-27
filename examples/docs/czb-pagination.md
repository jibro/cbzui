<script>
import {czbPagination} from '../../packages/index'
export default {
  data () {
    return {
      pagination: {
        pageSize: 10,
        page: 1,
        total: 30,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      pagination2: {
        pageSize: 10,
        page: 1,
        total: 30
      }
    }
  },
  methods: {
    goPage(num) {
      this.pagination.page = num;
    }
  }
}
</script>
# czb-pagination 分页
----
用于页面中展示分页。

### 基本用法
正常的分页<br>
<czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination><br>
没有可选每页条数框<br>
<czb-pagination :pagination="pagination2" @goPage="goPage"></czb-pagination>
::: demo
```html
<template>
  <div>
    <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pagination: {
        pageSize: 10,
        page: 1,
        total: 30,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      }
    }
  },
  methods: {
    goPage(num) {
      this.pagination.page = num;
    }
  }
}
```
:::

### props
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|pagination      |	需传入的页码集合。                     |	 object  |	—           |	       |
## pagination 子参数
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|pageSize      |	每页条数                     |	 number  |	—           |	       |
|page      |	第几页                     |	 number  |	—           |	       |
|total      |	总页数                     |	 number  |	—           |	       |
|pageArr      |	可选每页条数（数组内参数同select组件）                  |	 array  |	—           |	       |
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|goPage    |页码改变  |num(页码)

### Others
_czb-pagination组件一般配合czb-table组件一同使用_
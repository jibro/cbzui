<script>
import {czbPagination} from '../../packages/index'
export default {
  data () {
    return {
      current: 3,
      total:50,
      pageSize: 10
    }
  },
  methods: {
    onChange (value) {
        this.current=value
    }
  }
}
</script>
# czb-pagination 分页
----
用于页面中展示分页。

### 基本用法
分页<br>
<czb-pagination :current='current' :total='total' @onChange='onChange'></czb-pagination>

::: demo
```html
<template>
  <div>
  <czb-pagination :current='current' :total='total' @onChange='onChange'></czb-pagination>
  </div>
</template>
<script>
import {czbPagination} from '../../packages/index'
export default {
   data () {
    return {
      current: 3,
      total:50,
      pageSize: 10
    }
  },
  methods: {
    onChange(index){
        console.log(index)
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|current      |	页码。                     |	 number  |	—           |	0       |
|pageSize	      | 每页显示多少条                           |	number   |		—           |	10      |
|total |	总量                         |	number    |	—             |	0  |

### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onChange    |页码改变| 页码  |
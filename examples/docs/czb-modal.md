<script>
import {czbModal,czbButton,czbInput} from '../../packages/index'
export default {
  data () {
    return {
      visible:false
    }
  },
  methods: {
     onsubmit(){
        console.log('11111111111')
        this.visible=false
     },
     clickShow(){
        this.visible=true
     }
  }
}
</script>
# czb-modal 弹出框
----
用于页面中展示弹出框。

### 基本用法
点击弹出框。<br>
<czb-button @btnClick='clickShow'>点击</czb-button>
<czb-modal :visible='visible' @closeModel='visible=false' @onsubmit='onsubmit'>
     <czb-input v-model="inputTxt" placeholder="请输入内容"></czb-input></div>
</czb-modal>

::: demo
```html
<template>
  <div>
  <czb-modal :visible='visible' @closeModel='visible=false' @onsubmit='onsubmit'>22222222</czb-modal>
  </div>
</template>
<script>
import {czbModal} from '../../packages/index'
export default {
   data () {
    return {
      visible:false
    }
  },
  methods: {
    onsubmit(){
       console.log('11111111111')
       this.visible=false
    }
  }
}
</script>
```
:::

### props
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|visible      |	显示状态                     |	 boolean  |	—           |	false       |
|width	      | 弹出框宽度                           |	String   |		—           |	520px      |
|height |	内容主体高度                         |	 String   |	—             |	  |

### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|closeModel    |点击X或返回|   |
|onsubmit    |点击确定回调|  |
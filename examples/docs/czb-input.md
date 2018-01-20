<script>
export default {
  data () {
    return {
      inputTxt: ''
    }
  }
}
</script>

# czb-input 按钮
----
待写。
### 基本用法
<div class="myinput"><czb-input v-model="inputTxt" placeholder="请输入内容"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autofocus" :autofocus="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="readonly" :readonly="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="disabled" :disabled="true"></czb-input></div>
<!-- <div class="myinput"><czb-input v-model="inputTxt" placeholder="required" :required="true"></czb-input></div> -->
<div class="myinput"><czb-input v-model="inputTxt" placeholder="允许clear" :clear="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="textarea" type="textarea"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="cols and rows" type="textarea" :cols="30" :rows="8"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth text" :autowidth="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth textarea" type="textarea" :autowidth="true"></czb-input></div>

## input:{{inputTxt}}






::: demo
```html

```
:::
### slots
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|default    |	按钮名称  |	string   |	—           |	  —     |
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type	  | 按钮类型    |	string   | default/reverse/small/small-reverse   |default|
|disabled	    | 按钮是否禁用    |	boolean   | —   |false |
|autowidth	  | 宽度是否撑满(与width属性同用则无效)    |	boolean   | —   |false |
|width	    | 按钮宽度   |	string   | —   |—|
|height	    | 按钮高度   |	string   | —   |—|
|size	  | 按钮文字大小   |	string   | —   |—|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|btnClick    |点击按钮时触发的事件| —  |

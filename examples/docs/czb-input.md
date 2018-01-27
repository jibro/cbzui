<script>
export default {
  data () {
    return {
      inputTxt: ''
    }
  }
}
</script>

# czb-input 输入框
----
### 基本用法
<div class="myinput"><czb-input v-model="inputTxt" placeholder="请输入内容"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autofocus" :autofocus="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="readonly" :readonly="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="disabled" :disabled="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="允许clear" :clear="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="textarea" type="textarea"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="cols and rows" type="textarea" :cols="30" :rows="8"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth text" :autowidth="true"></czb-input></div>
<div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth textarea" type="textarea" :autowidth="true"></czb-input></div>

## input:{{inputTxt}}






::: demo
```html
<template>
  <div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="请输入内容"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="autofocus" :autofocus="true"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="readonly" :readonly="true"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="disabled" :disabled="true"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="允许clear" :clear="true"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="textarea" type="textarea"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="cols and rows" type="textarea" :cols="30" :rows="8"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth text" :autowidth="true"></czb-input></div>
    <div class="myinput"><czb-input v-model="inputTxt" placeholder="autowidth textarea" type="textarea" :autowidth="true"></czb-input></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      inputTxt: ''
    }
  }
}
</script>
```
:::
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value	  | 绑定及输出值    |	string/number   | —   ||
|placeholder	  | 提示文字    |	string   | —   ||
|autofocus	  | 自动获取焦点    |	boolean   | false   ||
|readonly	    | 是否只读    |	boolean   | —   |false |
|disabled	    | 是否禁用    |	boolean   | —   |false |
|clear	    | 是否拥有清空按钮    |	boolean   | —   |false |
|autowidth	  | 宽度自适应    |	boolean   | —   |false |
|type	    | 输入框类型   |	string   | text/textarea   |text|

<script>
export default {
  data () {
    return {
      inputTxt: '',
      btnName: '按钮',
      checkboxData: [
        {key: 0, value: 'checkbox按钮1', isChoosed:true},
        {key: 1, value: 'checkbox按钮2'},
        {key: 2, value: 'checkbox按钮3'},
        {key: 3, value: 'checkbox按钮4'},
        {key: 4, value: 'checkbox按钮5', disabled: true}
      ]
    }
  },
  methods: {
    btnclick (name) {
      alert(name)
    },
    chooseItem (item) {
      console.log(item)
    }
  }
}
</script>
<style>
.btnList{
  width: 100%;
  margin: 10px 0;
}
.buttoninline{
  display:inline-block;
}
</style>
# czb-checkbox 多选框
----
### 基本用法
竖向排列：
<div class="myinput"><czb-checkbox :datas="checkboxData" v-model="inputTxt"></czb-checkbox></div>
横向排列：
<div class="myinput"><czb-checkbox :datas="checkboxData" :inline="true" v-model="inputTxt"></czb-checkbox></div>
竖向有边框：
<div class="myinput"><czb-checkbox :datas="checkboxData" :inline="true" :hasborder="true" v-model="inputTxt"></czb-checkbox></div>
横向有边框：
<div class="myinput"><czb-checkbox :datas="checkboxData" :hasborder="true" @chooseItem="chooseItem" v-model="inputTxt"></czb-checkbox></div>

## {{inputTxt}}
::: demo
```html
<template>
  <div>
    竖向排列：
    <div class="myinput"><czb-checkbox :datas="checkboxData" v-model="inputTxt"></czb-checkbox></div>
    横向排列：
    <div class="myinput"><czb-checkbox :datas="checkboxData" :inline="true" v-model="inputTxt"></czb-checkbox></div>
    竖向有边框：
    <div class="myinput"><czb-checkbox :datas="checkboxData" :inline="true" :hasborder="true" v-model="inputTxt"></czb-checkbox></div>
    横向有边框：
    <div class="myinput"><czb-checkbox :datas="checkboxData" :hasborder="true" @chooseItem="chooseItem" v-model="inputTxt"></czb-checkbox></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnName: '按钮'
    }
  },
  methods: {
    btnclick (name) {
      alert(name)
    }
  }
}
</script>
<style>
.btnList{
  width: 100%;
  margin: 10px 0;
}
</style>
```
:::
### props
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value	  | 绑定及输出值    |	string/object/array   | —   ||
|datas	  | 绑定数据    |	array   | —   |—|
|disabled	    | 按钮是否禁用(数据内标识)    |	boolean   | —   |false |
|inline	  | 是否横向排列    |	boolean   | —   |false |
|hasborder	    | 边框   |	boolean   | —   |false|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|chooseItem    |点击radio时触发的事件| —  |

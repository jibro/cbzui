<script>
export default {
  data () {
    return {
      inputTxt: '',
      btnName: '按钮',
      radioData: [
        {key: 0, value: 'radio按钮1', isChoosed:true},
        {key: 1, value: 'radio按钮2'},
        {key: 2, value: 'radio按钮3'},
        {key: 3, value: 'radio按钮4'},
        {key: 4, value: 'radio按钮5', disabled: true}
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
# czb-radio 单选框
----
### 基本用法
竖向排列：
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt"></czb-radio></div>
横向排列：
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true"></czb-radio></div>
竖向有边框：
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :hasborder="true" @chooseItem="chooseItem"></czb-radio></div>
横向有边框：
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true" :hasborder="true"></czb-radio></div>


## {{inputTxt}}
::: demo
```html
<template>
  <div>
    竖向排列：
    <div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt"></czb-radio></div>
    横向排列：
    <div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true"></czb-radio></div>
    竖向有边框：
    <div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :hasborder="true" @chooseItem="chooseItem"></czb-radio></div>
    横向有边框：
    <div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true" :hasborder="true"></czb-radio></div>
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
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value	  | 绑定及输出值    |	string/object   | —   ||
|datas	  | 绑定数据    |	array   | —   |—|
|disabled	    | 按钮是否禁用(数据内标识)    |	boolean   | —   |false |
|inline	  | 是否横向排列    |	boolean   | —   |false |
|hasborder	    | 边框   |	boolean   | —   |false|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|chooseItem    |点击radio时触发的事件| —  |

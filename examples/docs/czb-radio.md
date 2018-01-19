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
# czb-radio 按钮
----
预置了两种不同尺寸不同类型的按钮，也可以自定义宽度、高度和按钮文字大小。
### 基本用法
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt"></czb-radio></div>
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true"></czb-radio></div>
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :inline="true" :hasborder="true"></czb-radio></div>
<div class="myinput"><czb-radio :datas="radioData" v-model="inputTxt" :hasborder="true" @chooseItem="chooseItem"></czb-radio></div>

## {{inputTxt}}
::: demo
```html
<template>
  <div>
    普通按钮 default：<br>
    <div class="btnList">
      <czb-button type="default" @btnClick="btnclick('default按钮')">{{btnName}}</czb-button>
    </div>
    空心按钮 reverse：<br>
    <div class="btnList">
      <czb-button type="reverse" @btnClick="btnclick('reverse按钮')">{{btnName}}</czb-button>
    </div>
    普通按钮小 small：<br>
    <div class="btnList">
      <czb-button type="small" @btnClick="btnclick('small按钮')">{{btnName}}</czb-button>
    </div>
    空心按钮小 small-reverse：<br>
    <div class="btnList">
      <czb-button type="small-reverse" @btnClick="btnclick('small-reverse按钮')">{{btnName}}</czb-button>
    </div>
    禁用按钮 disabled：<br>
    <div class="btnList">
      <czb-button type="default" :disabled="true" @btnClick="btnclick('disabled按钮')">{{btnName}}</czb-button>
    </div>
    按钮宽度撑满：<br>
    <div class="btnList">
      <czb-button :autowidth="true" @btnClick="btnclick('autowidth按钮')">{{btnName}}</czb-button>
    </div>
    自定义宽度、高度和按钮文字大小：<br>
    <div class="btnList">
      <czb-button width="250px" height="50px" size="20px" @btnClick="btnclick('reverse+autowidth按钮')">{{btnName}}</czb-button>
    </div>
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

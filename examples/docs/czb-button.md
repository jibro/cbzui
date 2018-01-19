<script>
export default {
  data () {
    return {
      inputTxt: '',
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
.buttoninline{
  display:inline-block;
}
</style>
# czb-button 按钮
----
预置了两种不同尺寸不同类型的按钮，也可以自定义宽度、高度和按钮文字大小。
### 基本用法
普通按钮 default：<br>
<div class="btnList">
  <czb-input v-model="inputTxt" placeholder="请输入内容"></czb-input>
  <div class="buttoninline">
    <czb-button @btnClick="btnclick('default按钮')">{{btnName}}</czb-button>
  </div>
  <div class="buttoninline">
    <czb-button @btnClick="btnclick('default按钮')">
      <i class="iconfont icon-wechat" slot="left"></i>
      {{btnName}}
    </czb-button>
  </div>
  <div class="buttoninline">
    <czb-button @btnClick="btnclick('default按钮')">
      <i class="iconfont icon-advice" slot="right"></i>
      {{btnName}}
    </czb-button>
  </div>
</div>
空心按钮 reverse：<br>
<div class="btnList">
  <div class="buttoninline">
    <czb-button type="reverse" @btnClick="btnclick('reverse按钮')">{{btnName}}</czb-button>
  </div>
  <div class="buttoninline">
    <czb-button type="reverse" @btnClick="btnclick('reverse按钮')">
      <i class="iconfont icon-riqi" slot="right"></i>
      {{btnName}}
    </czb-button>
  </div>
</div>
简单按钮 normal：<br>
<div class="btnList">
  <czb-button type="normal" @btnClick="btnclick('normal按钮')">{{btnName}}</czb-button>
</div>
警示按钮 danger：<br>
<div class="btnList">
  <czb-button type="danger" @btnClick="btnclick('danger按钮')">{{btnName}}</czb-button>
</div>
文字按钮 text：<br>
<div class="btnList">
  <czb-button type="text" @btnClick="btnclick('text按钮')">{{btnName}}</czb-button>
</div>
图标按钮 icon：<br>
<div class="btnList">
  <div class="buttoninline">
    <czb-button @btnClick="btnclick('icon按钮')">
      <i class="iconfont icon-advice" slot="icon"></i>
    </czb-button>
  </div>
  <div class="buttoninline">
    <czb-button type="reverse" @btnClick="btnclick('reverse按钮')">{{btnName}}</czb-button>
  </div>
</div>
普通按钮小 small：<br>
<div class="btnList">
  <czb-button :min="true" @btnClick="btnclick('small按钮')">{{btnName}}</czb-button>
</div>
空心按钮小 small-reverse：<br>
<div class="btnList">
  <czb-button type="reverse" :min="true" @btnClick="btnclick('small-reverse按钮')">{{btnName}}</czb-button>
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

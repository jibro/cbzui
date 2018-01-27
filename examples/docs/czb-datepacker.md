<script>
export default {
  data () {
    return {
      date: '',
      date2: []
    }
  },
  methods: {
    chooseItem (item) {
      console.log(item)
    }
  }
}
</script>

# czb-datepacker 日期控件
----
### 基本用法
<div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期"></czb-datepacker></div>
<div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 允许clear" :clear="true"></czb-datepacker></div>
<div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 disabled" :clear="true" :disabled="true"></czb-datepacker></div>
<div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 min max" :clear="true" min="2017-02-10" max="2018-12-29"></czb-datepacker></div>
<div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 autowidth" :autowidth="true"></czb-datepacker></div>
<div class="myinput"><czb-datepacker v-model="date2" placeholder="请选择日期范围" :clear="true" :autowidth="true" :range="true"></czb-datepacker></div>

## {{date}}
## {{date2}}



::: demo
```html
<template>
  <div>
    <div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期"></czb-datepacker></div>
    <div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 允许clear" :clear="true"></czb-datepacker></div>
    <div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 disabled" :clear="true" :disabled="true"></czb-datepacker></div>
    <div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 min max" :clear="true" min="2017-02-10" max="2018-12-29"></czb-datepacker></div>
    <div class="myinput"><czb-datepacker v-model="date" placeholder="请选择日期 autowidth" :autowidth="true"></czb-datepacker></div>
    <div class="myinput"><czb-datepacker v-model="date2" placeholder="请选择日期范围" :clear="true" :autowidth="true" :range="true"></czb-datepacker></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: '',
      date2: []
    }
  },
  methods: {
    chooseItem (item) {
      console.log(item)
    }
  }
}
</script>
```
:::
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value	  | 绑定及输出值    |	string/object/array   | —   ||
|placeholder	  | 提示文字    |	string   | —   ||
|disabled	    | 按钮是否禁用(数据内标识)    |	boolean   | —   |false |
|clear	    | 是否允许清空   |	boolean   | —   |false |
|min	  | 最小日期    |	string   | —   |- |
|max	  | 最大日期    |	string   | —   |- |
|range	    | 日期区间显示   |	boolean   | —   |false|
|autowidth	    | 宽度自适应   |	boolean   | —   |false|

_目前仅支持YYYY-MM-DD的日期格式，后续会支持不同类型。_

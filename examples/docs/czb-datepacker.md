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

# czb-datepacker
----
待写。
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

<script>
export default {
  data () {
    return {
      inputTxt: '',
      selectData: [
        {id: 0, name: 'option1', isChoosed:true},
        {id: 1, name: 'option2'},
        {id: 2, name: 'option3'},
        {id: 3, name: 'option4'},
        {id: 4, name: 'option5'}
      ],
      selectData2: [
        {id: 0, name: 'option1', isChoosed:true},
        {id: 1, name: 'option2', isChoosed:true},
        {id: 2, name: 'option3'},
        {id: 3, name: 'option4'},
        {id: 4, name: 'option5'},
        {id: 5, name: 'option5'},
        {id: 6, name: 'option5'},
        {id: 7, name: 'option5'},
        {id: 8, name: 'option5'},
        {id: 9, name: 'option5'},
        {id: 10, name: 'option5'},
        {id: 11, name: 'option5'},
      ]
    }
  },
  methods: {
    chooseItem (item) {
      console.log(item)
    }
  }
}
</script>

# czb-select
----
待写。
### 基本用法
普通：
<div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" @chooseItem="chooseItem"></czb-select></div>
disabled:
<div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" :disabled="true"></czb-select></div>
clear:
<div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" :clear="true"></czb-select></div>
multi:
<div class="myinput"><czb-select :datas="selectData2" v-model="inputTxt" placeholder="请选择" :multi="true" :clear="true" @chooseItem="chooseItem"></czb-select></div>
autowidth:
<div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" @chooseItem="chooseItem" :autowidth="true"></czb-select></div>


## {{inputTxt}}


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

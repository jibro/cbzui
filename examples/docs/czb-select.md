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

# czb-select 下拉框
----
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
普通：
<template>
  <div>
    <div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" @chooseItem="chooseItem"></czb-select></div>
    disabled:
    <div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" :disabled="true"></czb-select></div>
    clear:
    <div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" :clear="true"></czb-select></div>
    multi:
    <div class="myinput"><czb-select :datas="selectData2" v-model="inputTxt" placeholder="请选择" :multi="true" :clear="true" @chooseItem="chooseItem"></czb-select></div>
    autowidth:
    <div class="myinput"><czb-select :datas="selectData" v-model="inputTxt" placeholder="请选择" @chooseItem="chooseItem" :autowidth="true"></czb-select></div>
  </div>
</template>
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
```
:::
### props
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value	  | 绑定及输出值    |	string/object/array   | —   ||
|placeholder	  | 提示文字    |	string   | —   ||
|datas	  | 绑定数据    |	array   | —   |—|
|disabled	    | 按钮是否禁用(数据内标识)    |	boolean   | —   |false |
|clear	    | 是否允许清空   |	boolean   | —   |false |
|multi	  | 是否多选(值以逗号分隔)    |	boolean   | —   |false |
|autowidth	    | 宽度自适应   |	boolean   | —   |false|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|chooseItem    |点击radio时触发的事件| —  |


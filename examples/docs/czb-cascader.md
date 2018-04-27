<script>
export default {
  data () {
    return {
      inputTxt: '',
      cascaderData3: [
        {
          "id": "0",
          "name": "tom",
          "sub": [
            {
              "sid": "0",
              "id": "0-0",
              "name": "toms p1",
              "isChoosed": true
            },
            {
              "name": "toms p2",
              "id": "0-1",
              "sid": "0",
              "isChoosed": false,
              "sub": [
                {
                  "name": "toms p2 s1",
                  "id": "0-1-0",
                  "sid": "0-1",
                  "isChoosed": false
                }
              ]
            }
          ],
          "isChoosed": false
        },
        {
          "id": "1",
          "name": "jerry",
          "sub": [
            {
              "name": "jerrys p1",
              "id": "1-0",
              "sid": "1",
              "isChoosed": false
            },
            {
              "name": "jerrys p2",
              "id": "1-1",
              "sid": "1",
              "isChoosed": false
            }
          ],
          "isChoosed": false
        },
        {
          "id": "2",
          "name": "simon",
          "sub": []
        }
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

# czb-cascader 级联选择
----
### 基本用法
普通：
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem"></czb-cascader></div>
disabled:
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :disabled="true"></czb-cascader></div>
clear:
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :clear="true"></czb-cascader></div>
multi:
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :multi="true" :clear="true" @chooseItem="chooseItem"></czb-cascader></div>
parentChoose:
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem" :parentChoose="true"></czb-cascader></div>
autowidth:
<div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem" :autowidth="true"></czb-cascader></div>

## {{inputTxt}}



::: demo
```html
<template>
  <div>
    普通：
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem"></czb-cascader></div>
    disabled:
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :disabled="true"></czb-cascader></div>
    clear:
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :clear="true"></czb-cascader></div>
    multi:
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" :multi="true" :clear="true" @chooseItem="chooseItem"></czb-cascader></div>
    parentChoose:
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem" :parentChoose="true"></czb-cascader></div>
    autowidth:
    <div class="myinput"><czb-cascader :datas="cascaderData3" v-model="inputTxt"  placeholder="请选择" @chooseItem="chooseItem" :autowidth="true"></czb-cascader></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputTxt: '',
      cascaderData3: [
        {
          "id": "0",
          "name": "tom",
          "sub": [
            {
              "sid": "0",
              "id": "0-0",
              "name": "toms p1",
              "isChoosed": true
            },
            {
              "name": "toms p2",
              "id": "0-1",
              "sid": "0",
              "isChoosed": false,
              "sub": [
                {
                  "name": "toms p2 s1",
                  "id": "0-1-0",
                  "sid": "0-1",
                  "isChoosed": false
                }
              ]
            }
          ],
          "isChoosed": false
        },
        {
          "id": "1",
          "name": "jerry",
          "sub": [
            {
              "name": "jerrys p1",
              "id": "1-0",
              "sid": "1",
              "isChoosed": false
            },
            {
              "name": "jerrys p2",
              "id": "1-1",
              "sid": "1",
              "isChoosed": false
            }
          ],
          "isChoosed": false
        },
        {
          "id": "2",
          "name": "simon",
          "sub": []
        }
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
|datas	  | 绑定数据(数据格式请注意)    |	array   | —   |—|
|disabled	    | 按钮是否禁用(数据内标识)    |	boolean   | —   |false |
|clear	    | 是否允许清空   |	boolean   | —   |false |
|multi	  | 是否多选(值以逗号分隔)    |	boolean   | —   |false |
|autowidth	    | 宽度自适应   |	boolean   | —   |false|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|chooseItem    |点击radio时触发的事件| —  |

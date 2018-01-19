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

# czb-cascader
----
待写。
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

<script>
import {CMsgBox} from '../../packages/index'
export default {
  methods: {
    showMsgBox () {
      CMsgBox({
        title: '提示',
        message: '信息有误请重试！',
        showCancel: true,
        confirmText: '确定',
        cancelText: '取消',
      }).then((confirm) => {
        alert(confirm)
        console.log(confirm)
      },(cancel) => {
        alert('cancel')
        console.log(cancel)
      })
    }
  }
}
</script>
# CMsgBox 弹出对话框
----
用于页面中展示消息提醒和操作确认。

### 基本用法
页面弹出的模态框。<br>
<c-button @btnClick="showMsgBox">showMsgBox</c-button>
::: demo
```html
<template>
  <div>
    <c-button @btnClick="showMsgBox">showMsgBox</c-button>
  </div>
</template>
<script>
import {CMsgBox} from '../../packages/index'
export default {
  methods: {
    showMsgBox () {
      CMsgBox({
        title: '提示',
        message: '信息有误请重试！',
        showCancel: true,
        confirmText: '确定',
        cancelText: '取消',
      }).then((confirm) => {
        alert(confirm)
        console.log(confirm)
      },(cancel) => {
        alert('cancel')
        console.log(cancel)
      })
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题 |	string   |	—           |	提示       |
|message	  | 描述信息    |	string   | —   |— |
|showCancel |	是否显示取消按钮       |	boolean    |	—     |	false      |
|confirmText   |	确认按钮文字描述   |	string   |	—	      | 确定   |
|cancelText   |	取消按钮文字描述   |	string   |	—	     | 取消   |
### Promise
CMsgBox使用即产生一个Promise，你可以通过它处理confirm和cancel的事件回调。
### Others
_传入的option参数若为 `string` 则解析为 `message` 值。_
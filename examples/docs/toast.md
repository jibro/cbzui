<script>
import {CToast} from '../../packages/index'
export default {
  methods: {
    showToast () {
      CToast({
        text: 'Hello World!',
        timing: 2500,
        position: 'default'
      })
    }
  }
}
</script>
# CToast 提示
----
用于页面中展示提示信息。

### 基本用法
页面中的浮层元素，自动消失。<br>
<c-button @btnClick="showToast">showToast</c-button>

::: demo
```html
<template>
  <div>
    <c-button @btnClick="showToast">showToast</c-button>
  </div>
</template>
<script>
import {CToast} from '../../packages/index'
export default {
  methods: {
    showToast () {
      CToast({
        text: 'Hello World!',
        timing: 2000,
        position: 'default'
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
|text      |	标题，必选参数。                     |	string   |	—           |	—       |
|timing	      | 持续时间                           |	number   |		—           |	2500      |
|position |	显示位置                         |	string    |	default/top/center/bottom             |	default  |
### Others
_传入的option参数若为 `string` 则解析为 `text` 值。_
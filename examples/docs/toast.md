<script>
import {czbToast} from '../../packages/index'
export default {
  methods: {
    showToast () {
      czbToast({
        text: '操作成功！',
        timing: 1500
      }).then(function () {
        alert('回调')
      })
    },
    showToast2 () {
      czbToast({
        text: '操作有误！',
        timing: 1000,
        type: 'warn'
      })
    }
  }
}
</script>
# czb-toast 提示
----
用于页面中展示提示信息。

### 基本用法
页面中的浮层元素，自动消失。<br>
<div class="myinput"><czb-button @btnClick="showToast">success</czb-button></div>
<div class="myinput"><czb-button type="normal" @btnClick="showToast2">warn</czb-button></div>

::: demo
```html

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
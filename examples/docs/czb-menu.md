<script>
import {czbMenu} from '../../packages/index'
import menuData from '../assets/json/nav.config.json'
export default {
  data () {
    return {
     selectKey:'item-4',
     data:menuData
    }
  },
  methods: {
    onSelectKey(item){
        this.selectKey=item.key
    },
    onTitleClick(openKeys){
    },
    click(){
        this.selectKey = 'item-5'
    }
  }
}
</script>
# czb-menu 导航
----
用于页面中展示导航。

### 基本用法
<button @click='click'>1</button>
<czb-menu :data='data' :selectKey='selectKey' @onSelectKey='onSelectKey' @onTitleClick='onTitleClick'>
</czb-menu>

::: demo
```html
<template>
  <div>
  <czb-menu :data='data' :selectKey='selectKey' @onSelectKey='onSelectKey' @onTitleClick='onTitleClick'>
  </czb-menu>
  </div>
</template>
<script>
import {czbMenu} from '../../packages/index'
export default {
   data () {
    return {
       selectKey:'item-4',
       data:menuData
    }
  },
  methods: {
      onSelectKey(item){
          this.selectKey=item.key
      },
      onTitleClick(openKeys){
      },
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|height      |	导航高度。                     |	String   |	—           |	—       |
|data	      | 导航数据源                           |	Array   |		—           |	[]      |

### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onTitleClick    |点击一级菜单回调| event  |
|onSelectKey    |二级菜单改变回调| 二级内型菜单对象  |
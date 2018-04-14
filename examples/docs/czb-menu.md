<script>
import {czbMenu} from '../../packages/index'
import menuData from '../assets/json/nav.config.json'
export default {
  data () {
    return {
     selectedKey:'item-4',
     data:menuData
    }
  },
  methods: {
    onSelectedKey(item){
        this.selectedKey=item.key
    },
    onTitleClick(openKeys){
    },
    click(){
        this.selectedKey = 'item-5'
    }
  }
}
</script>
# czb-menu 导航
----
用于页面中展示导航。

### 基本用法
<button @click='click'>1</button>
<czb-menu :data='data' :selectedKey='selectedKey' @onSelectedKey='onSelectedKey' @onTitleClick='onTitleClick'>
</czb-menu>

::: demo
```html
<template>
  <div>
  <czb-menu :data='data' :selectedKey='selectedKey' @onSelectedKey='onSelectedKey' @onTitleClick='onTitleClick'>
  </czb-menu>
  </div>
</template>
<script>
import {czbMenu} from '../../packages/index'
export default {
   data () {
    return {
       selectedKey:'item-4',
       data:[
              {
                "name": "sub-1",
                "key": "sub1",
                "icon": "iczb-riqi",
                "items": [
                  {
                    "name": "item1",
                    "key": "item-1",
                    "path": "/item-1",
                    "icon": "iczb-riqi"
                  },
                  {
                    "name": "item2",
                    "key": "item-2",
                    "path": "/item-2"
                  },
                  {
                    "name": "item3",
                    "key": "item-3",
                    "path": "/item-3"
                  }
                ]
              },
              {
                "name": "sub-2",
                "key": "sub2",
                "items": [
                  {
                    "name": "item4",
                    "key": "item-4",
                    "path": "/item-4"
                  },
                  {
                    "name": "item5",
                    "key": "item-5",
                    "path": "/item-5"
                  },
                  {
                    "name": "item6",
                    "key": "item-6",
                    "path": "/item-6"
                  }
                ]
              },
              {
                "name": "item7",
                "key": "item-7",
                "path": "/item-7",
                "icon": "iczb-riqi"
              }
            ]

    }
  },
  methods: {
      onSelectedKey(item){
          this.selectedKey=item.key
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
|width      |	导航宽度。                     |	String   |	—           |	—       |
|height      |	导航高度。                     |	String   |	—           |	—       |
|data	      | 导航数据源                           |	Array   |		—           |	[]      |

### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onTitleClick    |点击一级菜单回调| event  |
|onSelectedKey    |二级菜单改变回调| 二级内型菜单对象  |
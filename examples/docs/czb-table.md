<script>
export default {
  data() {
    return {
      tabledata: [
        {id: 1, name: '小明', desc: '小明在放学的路上'},
        {id: 2, name: '小强', desc: '小强作业没写完，被留在学校打扫卫生'},
      ],
      tabledata2: [
        {id: 1, name: '小明', desc: '小明在放学的路上'},
        {id: 2, name: '小强', desc: '小强作业没写完，被留在学校打扫卫生,被留在学校打扫卫生'},
      ],
      columns: [
        {
          title: 'id',
          width: '20%',
          key: 'id'
        },
        {
          title: 'name',
          width: '20%',
          key: 'name'
        },
        {
          title: 'desc',
          width: '30%',
          key: 'desc'
        }
      ],
      columns2: [
        {
          title: 'id',
          width: '20%',
          key: 'id'
        },
        {
          title: 'name',
          width: '40%',
          key: 'name'
        },
        {
          title: 'desc',
          width: '50%',
          key: 'desc'
        }
      ],
      choosedData: '',
      handle: {
        width: '7%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-edit', title: '修改配置'},
          {id: 2, name: 'iczb-delete', title: '删除配置'}
        ]
      },
      handle2: {
        width: '17%',
        btns: [
          {id: 1, name: '修改配置', title: '修改配置'},
          {id: 2, name: '修改配置', title: '删除配置'}
        ]
      }
    }
  },
  methods:{
    handleClick() {

    }
  }
}
</script>
# czb-table 表格
----
用于页面中展示多行多列的列表布局。

### 基本用法
普通czb-table组件包含columns和tableData，可以根据width设置每一行的宽度
<czb-table  :columns="columns" :tabledata="tabledata2"></czb-table><br/>
ellipsis属性：代表溢出“...”显示
<czb-table :columns="columns" :tabledata="tabledata2" :ellipsis="true"></czb-table><br/>
hasCheck属性：让表格支持多选，v-model里可以绑定被选中的行
<czb-table  :columns="columns" :tabledata="tabledata" :hascheck="true" v-model="choosedData"></czb-table>
{{choosedData}}<br/>
handle属性：显示操作栏，handleClick事件里可以进行回调，这边的操作栏是图标
<czb-table  :columns="columns" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle"></czb-table><br/>
此处操作栏是文字
<czb-table  :columns="columns" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle2"></czb-table><br/>
固定右侧操作栏
<czb-table  :columns="columns2" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle" fixed="right"></czb-table><br/>

::: demo
```html
<template>
  <div>
    普通czb-table组件包含columns和tableData，可以根据width设置每一行的宽度
    <czb-table  :columns="columns" :tabledata="tabledata2"></czb-table><br/>
    ellipsis属性：代表溢出“...”显示
    <czb-table :columns="columns" :tabledata="tabledata2" :ellipsis="true"></czb-table><br/>
    hasCheck属性：让表格支持多选，v-model里可以绑定被选中的行
    <czb-table  :columns="columns" :tabledata="tabledata" :hascheck="true" v-model="choosedData"></czb-table>
    {{choosedData}}<br/>
    handle属性：显示操作栏，handleClick事件里可以进行回调，这边的操作栏是图标
    <czb-table  :columns="columns" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle"></czb-table><br/>
    此处操作栏是文字
    <czb-table  :columns="columns" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle2"></czb-table><br/>
    固定右侧操作栏
    <czb-table  :columns="columns2" :tabledata="tabledata"  @handleClick="handleClick" :handle="handle" fixed="right"></czb-table><br/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabledata: [
        {id: 1, name: '小明', desc: '小明在放学的路上'},
        {id: 2, name: '小强', desc: '小强作业没写完，被留在学校打扫卫生'},
      ],
      tabledata2: [
        {id: 1, name: '小明', desc: '小明在放学的路上'},
        {id: 2, name: '小强', desc: '小强作业没写完，被留在学校打扫卫生,被留在学校打扫卫生'},
      ],
      columns: [
        {
          title: 'id',
          width: '20%',
          key: 'id'
        },
        {
          title: 'name',
          width: '20%',
          key: 'name'
        },
        {
          title: 'desc',
          width: '30%',
          key: 'desc'
        }
      ],
      columns2: [
        {
          title: 'id',
          width: '20%',
          key: 'id'
        },
        {
          title: 'name',
          width: '40%',
          key: 'name'
        },
        {
          title: 'desc',
          width: '50%',
          key: 'desc'
        }
      ],
      choosedData: '',
      handle: {
        width: '7%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-edit', title: '修改配置'},
          {id: 2, name: 'iczb-delete', title: '删除配置'}
        ]
      },
      handle2: {
        width: '17%',
        btns: [
          {id: 1, name: '修改配置', title: '修改配置'},
          {id: 2, name: '修改配置', title: '删除配置'}
        ]
      }
    }
  },
  methods:{
    handleClick() {

    }
  }
}
</script>
```
:::

### props
| 参数      | 说明                                 | 类型      | 参数       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|columns      |	table内参数配置，必选参数。 |	array   |	title, width, key [展示名称，宽度百分比，字段]      |	—       |
|tabledata	      | table数据，必选参数。 |	array   |		根据columns定义为准           |	—      |
|ellipsis |	溢出隐藏                         |	boolean    |	—            |	false  |
|hascheck |	显示多选框(v-model内绑定选择行)                     |	boolean    |	—            |	false  |
|handle |	操作栏                    |	object    |	下方具体描述         |	—   |
|fixed |	操作栏固定                    |	string    |	right         |	—   |

### handle
| 参数      | 说明     |             
|---------- |------------------------------------ |
|width      |	宽度百分比 |	array   |	title, width, key [展示名称，宽度百分比，字段]      |
|type	      | 类型(默认文字，可选icon) |
|fontClass |	字体图标class                         |
|btns |	数组，多个操作按钮,参数：id,name,title                   |
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|handleClick    |点击操作栏触发的事件  |btnIndex, row, index[第几个按钮，操作行，操作行的index]|
|chooseItem    |点击多选框触发的事件  |choosedData[选择行的数据]|
### Others
_czb-table组件一般配合czb-pagination组件一同使用_
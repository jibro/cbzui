<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>发放状态:</span></label>
        <czb-select :datas="selectData" v-model="selectedVal" placeholder="请选择" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>发放状态:</span></label>
        <czb-select :datas="selectData" v-model="selectedVal" placeholder="请选择" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>发放状态:</span></label>
        <czb-select :datas="selectData" v-model="selectedVal" placeholder="请选择" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>发放状态:</span></label>
        <czb-select :datas="selectData" v-model="selectedVal" placeholder="请选择" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>编号:</span></label>
        <czb-input v-model="inputText" placeholder="请输入编号" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <czb-button>检索</czb-button>
      </div>
      <div class="page-search-item">
        <czb-button type="danger"><i class="iconfont icon-wechat" slot="left"></i>重置</czb-button>
      </div>
    </div>
    <div class="page-list-table-wrap bgf">
      <czb-table :columns="columns" :tableData="tableData"></czb-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectData: [
        { id: 0, name: 'option1' },
        { id: 1, name: 'option2' },
        { id: 2, name: 'option3' },
        { id: 3, name: 'option4' },
        { id: 4, name: 'option5' },
      ],
      selectedVal: {},
      inputText: '',
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      tableData: [
        {
          id: 0,
          name: '张三',
          age: 21,
          address: '南京市雨花台区软件大道'
        },
        {
          id: 1,
          name: '李四',
          age: 22,
          address: '南京市浦口区星火路'
        }
      ]
    };
  },
};
</script>

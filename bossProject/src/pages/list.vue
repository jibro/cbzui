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
        <czb-button><i class="czbfont iczb-sousuo" slot="left"></i>检索</czb-button>
      </div>
      <div class="page-search-item">
        <czb-button type="reverse"><i class="czbfont iczb-shuaxin" slot="left"></i>重置</czb-button>
      </div>
    </div>
    <div class="page-list-table-wrap bgf">
      <div class="page-operation">
        <czb-button :min="true">新增</czb-button>
        <czb-button type="reverse" :min="true">修改</czb-button>
        <czb-button type="danger" :min="true">删除</czb-button>
      </div>
      <czb-table :columns="columns" :tableData="tableData" :hasCheck="true" v-model="choosedData" :pagination="pagination" :handle="handle" @handleClick="sss"></czb-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      choosedData: [],
      selectData: [
        { id: 0, name: 'option1' },
        { id: 1, name: 'option2' },
        { id: 2, name: 'option3' },
        { id: 3, name: 'option4' },
        { id: 4, name: 'option5' }
      ],
      selectedVal: {},
      inputText: '',
      pagination: {
        rows: 10,
        page: 1,
        total: 20
      },
      columns: [
        {
          title: '姓名',
          key: 'name',
          width: 100,
          render(val) {
            return `<a href="javascript:void(0)">${val}</a>`;
          }
        },
        {
          title: '年龄',
          width: 150,
          key: 'age'
        },
        {
          title: '地址',
          width: 200,
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
        },
        {
          id: 2,
          name: '王五',
          age: 23,
          address: '南京市浦口区星火路'
        },
        {
          id: 3,
          name: '李明',
          age: 23,
          address: '南京市浦口区星火路'
        },
        {
          id: 4,
          name: '孙一',
          age: 23,
          address: '南京市浦口区星火路'
        },
        {
          id: 5,
          name: '赵六',
          age: 23,
          address: '南京市浦口区星火路'
        }
      ],
      handle: ['操作1', '操作2']
    };
  },
  methods: {
    sss(item) {
      console.log(item);
    }
  }
};
</script>

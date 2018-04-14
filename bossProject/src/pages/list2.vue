<template>
  <div class="page-list-wrap">
    2222222222222222
  </div>
</template>
<script>
import API from '@/api';

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
        total: 60
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
    },
    goPage(num) {
      console.log(num);
      this.pagination.page = num;
    }
  },
  mounted() {
    API.envSearch({ page: 1, pageSize: 10, branchName: '', domain: '', status: '' }).then((res) => {
      console.log(res);
    });
  }
};
</script>

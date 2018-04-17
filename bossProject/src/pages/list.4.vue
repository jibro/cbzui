<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>name:</span></label>
        <czb-input v-model="searchObj.name" placeholder="请输入name" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>status:</span></label>
        <czb-select :datas="statusData" v-model="searchObj.status" placeholder="请选择status" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <czb-button @btnClick="toSearch"><i class="czbfont iczb-sousuo" slot="left"></i>检索</czb-button>
      </div>
      <div class="page-search-item">
        <czb-button type="reverse" @btnClick="resetSearch"><i class="czbfont iczb-shuaxin" slot="left"></i>重置</czb-button>
      </div>
    </div>
    <div class="page-list-table-wrap bgf">
      <div class="page-operation">
        <czb-button :min="true" @btnClick="addItem">新增</czb-button>
      </div>
      <!-- hasCheck false -->
      <czb-table v-if="tableData.length > 0" :columns="columns" :tableData="tableData" v-model="choosedData"  @handleClick="handleClick" :handle="handle" fixed="right"></czb-table>
      <div class="pagination" v-if="tableData.length > 0">
        <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
      </div>
      <no-data :show="tableData.length === 0"></no-data>
    </div>
    <czb-modal title="新增" :visible="addVisible" @closeModel="addVisible=false" @onsubmit="addSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>name:</span></label>
          <czb-input v-model="addObj.name" placeholder="请输入name" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>branchName:</span></label>
          <czb-input v-model="addObj.branchName" placeholder="请输入branchName" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
  </div>
</template>
<script>
import API from '@/api';
import {formatDate} from '@/utils';
import noData from '@/components/noData';
export default {
  name: 'list-2',
  components: {
    noData
  },
  data() {
    return {
      choosedData: [],
      selectedVal: {},
      statusData: [
        {id: 1, name:'正在创建'},
        {id: 2, name:'已启动'},
        {id: 3, name:'正在回收'},
        {id: 4, name:'已回收'}
      ],
      searchObj: {
        name: '',
        branchName: '',
        status: '',
        domain: ''
      },
      addObj: {
        name: '',
        branchName: ''
      },
      addVisible: false,
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0
      },
      columns: [
        {
          title: 'branchName',
          width: '15%',
          key: 'branchName'
        },
        {
          title: 'domain',
          width: '17%',
          key: 'domain'
        },
        {
          title: 'ingressIp',
          width: '17%',
          key: 'ingressIp'
        },
        {
          title: 'description',
          width: '20%',
          key: 'description'
        },
        {
          title: 'status',
          width: '12%',
          key: 'status',
          render: val => {
            return this.statusData.filter(obj => obj.id == val)[0].name;
          }
        },
        {
          title: 'creationTime',
          width: '18%',
          key: 'creationTime',
          render(val) {
            return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
          }
        }
      ],
      tableData: [],
      handle: {
        width: '33%',
        btns: [
          {id: 1, name: 'iczb-edit', title: '回收环境'},
          {id: 2, name: 'iczb-delete', title: '导出环境列表excel'},
          {id: 3, name: 'iczb-delete', title: '查看环境日志'},
          {id: 4, name: 'iczb-delete', title: '删除环境'}
        ]
      }
    };
  },
  methods: {
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        API.delService({ 
          serviceId: obj.row.id,
	        name:obj.row.name,
          branchName:obj.row.environment.branchName
        }).then(res => {
          console.log(res);
          if (res.data.success) {
            this.$toast('删除成功！');
            this.resetSearch();
          } else {
            this.$msgbox(res.data.message);
          }
        })
      }
    },
    goPage(num) {
      this.pagination.page = num;
      this.getDataList();
    },
    getDataList() {
      API.searchEnvironment({ 
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
        name: this.searchObj.name,
        branchName: this.searchObj.branchName,
        domain: this.searchObj.domain,
        status: this.searchObj.status.id || ''
      }).then((res) => {
        console.log(res.data);
        this.tableData = res.data.items;
        this.pagination.total = res.data.total;
      });
    },
    toSearch() {
      this.pagination.page = 1;
      this.getDataList();
    },
    resetSearch() {
      this.searchObj = {
        name: '',
        branchName: '',
        status: '',
        domain: ''
      };
      this.toSearch();
    },
    addItem() {
      this.addVisible = true;
    },
    addSubmit() {
      API.addService(this.addObj).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$toast('新增成功！');
          this.resetSearch();
          this.addObj = {
            name: '',
            branchName: ''
          };
          this.addVisible = false;
        } else {
          this.$msgbox(res.data.message);
        }
      })
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label page-label-zjj"><span>中间件名称:</span></label>
        <czb-input v-model="searchObj.name" placeholder="请输入名称" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>状态:</span></label>
        <czb-select :datas="statusData" v-model="searchObj.status" placeholder="请选择状态" :clear="true"></czb-select>
      </div>
      <div class="page-search-item">
        <czb-button @btnClick="toSearch"><i class="czbfont iczb-sousuo" slot="left"></i>检索</czb-button>
      </div>
      <div class="page-search-item">
        <czb-button type="reverse" @btnClick="resetSearch"><i class="czbfont iczb-shuaxin" slot="left"></i>重置</czb-button>
      </div>
    </div>
    <div class="page-list-table-wrap bgf">
      <!-- hascheck false -->
      <czb-table v-if="tableData.length > 0" :columns="columns" :tabledata="tableData" v-model="choosedData"></czb-table>
      <div class="pagination" v-if="tableData.length > 0">
        <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
      </div>
      <no-data :show="noDatas"></no-data>
    </div>
    </czb-modal>
    <loading v-if="!loaded"></loading>
  </div>
</template>
<script>
import API from '@/api';
import {formatDate} from '@/utils';
import noData from '@/components/noData';
import loading from '@/components/loading';
export default {
  name: 'list-1',
  components: {
    noData,
    loading
  },
  data() {
    return {
      noDatas: false,
      loaded: false,
      choosedData: [],
      selectedVal: {},
      searchObj: {
        name: '',
        status: ''
      },
      statusData: [
        {id: 1, name:'已启用'},
        {id: 2, name:'未启用'}
      ],
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      columns: [
        {
          title: '中间件名称',
          width: '25%',
          key: 'name'
        },
        {
          title: '描述',
          width: '20%',
          key: 'description'
        },
        {
          title: '状态',
          width: '12%',
          key: 'status',
          render: val => {
            return this.statusData.filter(obj => obj.id == val)[0].name;
          }
        },
        {
          title: '集群数量',
          width: '10%',
          key: 'replicas'
        },
        {
          title: '创建时间',
          width: '18%',
          key: 'creationTime',
          render(val) {
            return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
          }
        }
      ],
      tableData: []
    };
  },
  methods: {
    goPage(num) {
      this.pagination.page = num;
      this.getDataList();
    },
    getDataList() {
      this.loaded = false;
      this.noDatas = false;
      API.searchComponent({
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
        name: this.searchObj.name,
        status: this.searchObj.status.id || ''
      }).then((res) => {
        this.loaded = true;
        console.log(res.data);
        this.tableData = res.items;
        this.pagination.total = res.total;
        if (this.tableData.length === 0) {
          this.noDatas = true;
        }
      }).catch((e) => {
        this.loaded = true;
        this.noDatas = true;
      });
    },
    toSearch() {
      this.pagination.page = 1;
      this.getDataList();
    },
    resetSearch() {
      this.searchObj = {
        name: '',
        status: ''
      };
      this.statusData.forEach(obj => {
        obj.isChoosed = false
      })
      this.toSearch();
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

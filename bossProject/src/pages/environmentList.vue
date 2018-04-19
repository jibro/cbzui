<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>分支名称:</span></label>
        <czb-input v-model="searchObj.branchName" placeholder="请输入分支名称" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>域名:</span></label>
        <czb-input v-model="searchObj.domain" placeholder="请输入域名" :clear="true"></czb-input>
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
      <div class="page-operation">
        <czb-button width="80px" @btnClick="addItem" :min="true">
          <i class="czbfont iczb-add" slot="left"></i>创建环境
        </czb-button>
      </div>
      <!-- hasCheck false -->
      <czb-table v-if="tableData.length > 0" :columns="columns" :tableData="tableData" v-model="choosedData"  @handleClick="handleClick" :handle="handle"></czb-table>
      <div class="pagination" v-if="tableData.length > 0">
        <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
      </div>
      <no-data :show="tableData.length === 0"></no-data>
    </div>
    <czb-modal title="创建环境" :visible="addVisible" @closeModel="addVisible=false" @onsubmit="addSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>分支名称:</span></label>
          <czb-input v-model="addObj.branchName" placeholder="请输入分支名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>域名:</span></label>
          <czb-input v-model="addObj.domain" placeholder="请输入域名" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>描述:</span></label>
          <czb-input v-model="addObj.description" placeholder="请输入描述" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="查看环境日志" :visible="readVisible" @closeModel="readVisible=false" @onsubmit="readVisible=false">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>日志编号:</span></label>
          <div class="page-form-text">{{readObj.id}}</div>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>执行节点:</span></label>
          <div class="page-form-text">{{readObj.host}}</div>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>用时:</span></label>
          <div class="page-form-text">{{readObj.takeTime}}（分钟）</div>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>日志类型:</span></label>
          <div class="page-form-text">{{readObj.type|filterType}}</div>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>创建时间:</span></label>
          <div class="page-form-text">{{readObj.creationTime|formatData}}</div>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>日志内容:</span></label>
          <div class="page-form-multitext">{{readObj.content}}</div>
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
        branchName: '',
        domain: '',
        status: ''
      },
      addObj: {
        branchName: '',
        domain: '',
	      description: ''
      },
      readObj: {
        id: '', // 日志编号
        content: '', // 日志内容
        host: '', // 执行节点
        takeTime: '', // 用时
        type: '', // 日志类型
	      creationTime: '' // 创建时间
      },
      addVisible: false,
      readVisible: false,
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      columns: [
        {
          title: '所属环境',
          width: '15%',
          key: 'branchName'
        },
        {
          title: '域名',
          width: '18%',
          key: 'domain'
        },
        {
          title: '代理地址',
          width: '12%',
          key: 'ingressIp'
        },
        {
          title: '描述',
          width: '19%',
          key: 'description'
        },
        {
          title: '状态',
          width: '8%',
          key: 'status',
          render: val => {
            return this.statusData.filter(obj => obj.id == val)[0].name;
          }
        },
        {
          title: '创建时间',
          width: '17%',
          key: 'creationTime',
          render(val) {
            return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
          }
        }
      ],
      tableData: [],
      handle: {
        width: '10%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-skip', title: '回收环境'},
          {id: 2, name: 'iczb-exl', title: '导出环境列表excel'},
          {id: 3, name: 'iczb-form', title: '查看环境日志'},
          {id: 4, name: 'iczb-delete', title: '删除环境'}
        ]
      }
    };
  },
  filters: {
    filterType: function (val) {
      let logTypes = [
        {id: 1, name:'环境创建日志'},
        {id: 2, name:'环境回收日志'}
      ];
      if (val) {
        return logTypes.filter(obj => obj.id == val)[0].name;
      }
    },
    formatData: function (val) {
      if (val) {
        return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
      }
    }
  },
  methods: {
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        this.$msgbox({title: '提示', message: `是否回收环境${obj.row.branchName}？`, showCancel: true}).then(res => {
          API.releaseEnvironment({ 
            branchName:obj.row.branchName
          }).then(res => {
            console.log(res);
            if (res.data.success) {
              this.$toast('回收成功！');
              this.getDataList();
            } else {
              this.$msgbox(res.data.message);
            }
          })
        })
      }
      if (obj.btnIndex === 1) {
        window.open(`/api/cloud/environment/export/${obj.row.branchName}`);
      }
      if (obj.btnIndex === 2) {
        API.logEnvironment({ 
          branchName:obj.row.branchName,
          status: obj.row.status
        }).then(res => {
          console.log(res);
          if (res.data) {
            this.readObj = res.data;
            this.readVisible = true;
          } else {
            this.$msgbox('当前环境暂无日志！');
          }
        })
      }
      if (obj.btnIndex === 3) {
        this.$msgbox({title: '提示', message: `是否删除环境${obj.row.branchName}？`, showCancel: true}).then(res => {
          API.deleteEnvironment({ 
            branchName:obj.row.branchName
          }).then(res => {
            console.log(res);
            if (res.data.success) {
              this.$toast('删除成功！');
              this.getDataList();
            } else {
              this.$msgbox(res.data.message);
            }
          })
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
        branchName: this.searchObj.branchName,
        domain: this.searchObj.domain,
        status: this.searchObj.status.id || ''
      }).then((res) => {
        console.log(res.data);
        this.tableData = res.data.items;
        this.pagination.page = res.data.page;
        this.pagination.total = res.data.total;
        if (res.data.page > 1 && this.tableData.length === 0) {
          this.pagination.page = res.data.page - 1;
          this.getDataList();
        }
      });
    },
    toSearch() {
      this.pagination.page = 1;
      this.getDataList();
    },
    resetSearch() {
      Object.assign(this.searchObj, {
        branchName: '',
        domain: '',
        status: ''
      });
      this.toSearch();
    },
    addItem() {
      this.addVisible = true;
    },
    addSubmit() {
      API.createEnvironment(this.addObj).then(res => {
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

<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>服务名称:</span></label>
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
    <div class="page-list-table-box">
      <div class="page-list-table-wrap bgf">
        <div class="page-operation" v-if="!isNormalRole">
          <czb-button width="105px" @btnClick="addItem" :min="true">
            <i class="czbfont iczb-add" slot="left"></i>新增模板服务
          </czb-button>
        </div>
        <!-- hascheck false -->
        <czb-table v-if="tableData.length > 0 && !isNormalRole" :columns="columns" :tabledata="tableData" v-model="choosedData"  @handleClick="handleClick" :handle="handle"></czb-table>
        <czb-table v-if="tableData.length > 0 && isNormalRole" :columns="columns" :tabledata="tableData" v-model="choosedData"></czb-table>
        <div class="pagination" v-if="tableData.length > 0">
          <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
        </div>
        <no-data :show="noDatas"></no-data>
      </div>
    </div>
    <czb-modal title="新增模板服务" :visible="addVisible" @closeModel="addVisible=false" @onsubmit="addSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>服务名称:</span></label>
          <czb-input v-model="addObj.name" placeholder="请输入名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>所属环境:</span></label>
          <czb-input v-model="addObj.branchName" :autowidth="true" :disabled="true"></czb-input>
        </div>
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
  name: 'list-2',
  components: {
    noData,
    loading
  },
  data() {
    return {
      noDatas: false,
      loaded: false,
      isNormalRole: this.$store.state.userInfo.roles.indexOf('10003') !== -1,
      choosedData: [],
      selectedVal: {},
      statusData: [
        {id: 1, name:'已启用'},
        {id: 2, name:'未启用'}
      ],
      searchObj: {
        name: '',
        branchName: 'dragon-template',
        status: ''
      },
      addObj: {
        name: '',
        branchName: 'dragon-template'
      },
      addVisible: false,
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      columns: [
        {
          title: '服务名称',
          width: '25%',
          key: 'name'
        },
        {
          title: '所属环境',
          width: '20%',
          key: 'environment',
          render: val => {
            return val.branchName;
          }
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
          title: '创建时间',
          width: '18%',
          key: 'creationTime',
          render(val) {
            return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
          }
        }
      ],
      tableData: [],
      handle: {
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-delete', title: '删除服务'}
        ]
      }
    };
  },
  methods: {
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        this.$msgbox({title: '提示', message: `是否删除服务${obj.row.name}？`, showCancel: true}).then(res => {
          API.delTemplateService({
            serviceId: obj.row.id,
            name:obj.row.name,
            branchName:obj.row.environment.branchName
          }).then(res => {
            console.log(res);
            if (res.success) {
              this.$toast('删除成功！');
              this.getDataList();
            } else {
              this.$msgbox(res.message);
            }
          })
        });
      }
    },
    goPage(num) {
      this.pagination.page = num;
      this.getDataList();
    },
    getDataList() {
      this.loaded = false;
      this.noDatas = false;
      API.searchService({
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
        name: this.searchObj.name,
        branchName: this.searchObj.branchName,
        status: this.searchObj.status.id || ''
      }).then((res) => {
        this.loaded = true;
        console.log(res.data);
        this.tableData = res.items;
        this.pagination.page = res.page;
        this.pagination.total = res.total;
        if (res.page > 1 && this.tableData.length === 0) {
          this.pagination.page = res.page - 1;
          this.getDataList();
        } else if (this.tableData.length === 0) {
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
      Object.assign(this.searchObj, {
        name: '',
        status: ''
      });
      this.statusData.forEach(obj => {
        obj.isChoosed = false
      })
      this.toSearch();
    },
    addItem() {
      this.addVisible = true;
    },
    addSubmit() {
      API.addTemplateService(this.addObj).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('新增成功！');
          this.resetSearch();
          Object.assign(this.addObj, {
            name: ''
          });
          this.addVisible = false;
        } else {
          this.$msgbox(res.message);
        }
      })
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

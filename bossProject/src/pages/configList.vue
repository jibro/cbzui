<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>配置名称:</span></label>
        <czb-input v-model="searchObj.name" placeholder="请输入名称" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>配置分组:</span></label>
        <czb-input v-model="searchObj.group" placeholder="请输入分组" :clear="true"></czb-input>
      </div>
      <div class="page-search-item">
        <label class="page-label"><span>配置内容:</span></label>
        <czb-input v-model="searchObj.value" placeholder="请输入内容" :clear="true"></czb-input>
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
          <i class="czbfont iczb-add" slot="left"></i>新增配置
        </czb-button>
      </div>
      <!-- hascheck false -->
      <!-- ellipsis false -->
      <czb-table v-if="tableData.length > 0" :columns="columns" :tabledata="tableData" v-model="choosedData"  @handleClick="handleClick" :handle="handle"></czb-table>
      <div class="pagination" v-if="tableData.length > 0">
        <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
      </div>
      <no-data :show="noDatas"></no-data>
    </div>
    <czb-modal title="新增配置" :visible="addVisible" @closeModel="addVisible=false" @onsubmit="addSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>配置名称:</span></label>
          <czb-input v-model="addObj.name" placeholder="请输入名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置分组:</span></label>
          <czb-input v-model="addObj.group" placeholder="请输入分组" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置内容:</span></label>
          <czb-input v-model="addObj.value" placeholder="请输入内容" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置描述:</span></label>
          <czb-input v-model="addObj.description" placeholder="请输入描述" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="修改配置" :visible="updateVisible" @closeModel="updateVisible=false" @onsubmit="updateSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>配置名称:</span></label>
          <czb-input v-model="updateObj.name" :autowidth="true" :disabled="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置分组:</span></label>
          <czb-input v-model="updateObj.group" placeholder="请输入分组" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置内容:</span></label>
          <czb-input v-model="updateObj.value" placeholder="请输入内容" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>配置描述:</span></label>
          <czb-input v-model="updateObj.description" placeholder="请输入描述" :autowidth="true"></czb-input>
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
  name: 'list',
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
        group: '',
        value: ''
      },
      addObj: {
        name: '',
        group: '',
        value: '',
        description: ''
      },
      updateObj: {
        name: '',
        group: '',
        value: '',
        description: ''
      },
      addVisible: false,
      updateVisible: false,
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      columns: [
        {
          title: '配置名称',
          width: '15%',
          key: 'name'
        },
        {
          title: '配置分组',
          width: '12%',
          key: 'group'
        },
        {
          title: '配置内容',
          width: '28%',
          key: 'value'
        },
        {
          title: '配置描述',
          width: '20%',
          key: 'description'
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
        width: '6%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-edit', title: '修改配置'},
          {id: 2, name: 'iczb-delete', title: '删除配置'}
        ]
      }
    };
  },
  methods: {
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        this.updateVisible = true;
        this.updateObj = {...obj.row};
      }
      if (obj.btnIndex === 1) {
        this.$msgbox({title: '提示', message: `是否删除配置${obj.row.name}？`, showCancel: true}).then(res => {
          API.delConfig({ name: obj.row.name}).then(res => {
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
      API.searchConfig({
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
        name: this.searchObj.name,
        group: this.searchObj.group,
        value: this.searchObj.value
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
      this.searchObj = {
        name: '',
        group: '',
        value: ''
      };
      this.toSearch();
    },
    addItem() {
      this.addVisible = true;
    },
    addSubmit() {
      API.addConfig(this.addObj).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('新增成功！');
          this.resetSearch();
          this.addObj = {
            name: '',
            group: '',
            value: '',
            description: ''
          };
          this.addVisible = false;
        } else {
          this.$msgbox(res.message);
        }
      })
    },
    updateSubmit() {
      API.updateConfig({...this.updateObj, configId: this.updateObj.id}).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('修改成功！');
          this.updateVisible = false;
          this.getDataList();
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

<template>
  <div class="page-list-wrap">
    <div class="page-list-search bgf">
      <div class="page-search-item">
        <label class="page-label"><span>容器名称:</span></label>
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
      <!-- hasCheck false -->
      <czb-table v-if="tableData.length > 0" :columns="columns" :tableData="tableData" v-model="choosedData"  @handleClick="handleClick" :handle="handle"></czb-table>
      <div class="pagination" v-if="tableData.length > 0">
        <czb-pagination :pagination="pagination" @goPage="goPage"></czb-pagination>
      </div>
      <no-data :show="tableData.length === 0"></no-data>
    </div>
    <czb-modal title="查看端口" :visible="sub.visible" @closeModel="sub.visible=false" @onsubmit="sub.visible=false">
      <div class="page-sub">
        <czb-table v-if="sub.tableData.length > 0" :columns="sub.columns" :tableData="sub.tableData"></czb-table>
        <div class="pagination" v-if="sub.tableData.length > 0">
          <czb-pagination :pagination="sub.pagination" @goPage="goPageSub"></czb-pagination>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="更新war" :visible="updateVisible" @closeModel="updateVisible=false" @onsubmit="updateWar">
      <form enctype="multipart/form-data" ref="$warfile">
        <input type="file" name="war">
      </form>
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
      choosedRow: '',
      updateVisible: false,
      statusData: [
        {id: 1, name:'已启用'},
        {id: 2, name:'未启用'}
      ],
      typeData: [
        {id: 1, name:'中间件'},
        {id: 2, name:'服务'}
      ],
      searchObj: {
        name: '',
        branchName: 'dragon-1672',
        status: ''
      },
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        pageArr: [{id: 10, name: 10, isChoosed: true},{id: 20, name: 20},{id: 50, name: 50}]
      },
      columns: [
        {
          title: '容器名称',
          width: '22%',
          key: 'name'
        },
        {
          title: '所属环境',
          width: '22%',
          key: 'environment',
          render: val => {
            return val.branchName;
          }
        },
        {
          title: '状态',
          width: '10%',
          key: 'status',
          render: val => {
            return this.statusData.filter(obj => obj.id == val)[0].name;
          }
        },
        {
          title: '容器类型',
          width: '10%',
          key: 'type',
          render: val => {
            return this.typeData.filter(obj => obj.id == val)[0].name;
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
        width: '8%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-form', title: '查看端口列表'},
          {id: 2, name: 'iczb-history', title: '重启容器'},
          {id: 3, name: 'iczb-rfq', title: '更新war'}
        ]
      },
      sub: {
        visible: false,
        pagination: {
          pageSize: 1,
          page: 1,
          total: 0
        },
        tableData: [],
        columns: [{
          title: '端口名称',
          width: '28%',
          key: 'name'
        },
        {
          title: '端口号',
          width: '20%',
          key: 'nodePort'
        },
        {
          title: '状态',
          width: '16%',
          key: 'status',
          render: val => {
            return this.statusData.filter(obj => obj.id == val)[0].name;
          }
        },
        {
          title: '所属容器',
          width: '28%',
          key: 'container',
          render: val => {
            return val.name;
          }
        }],
      }
    };
  },
  methods: {
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        this.sub.visible = true;
        this.sub.pagination.page = 1;
        this.choosedRow = obj.row;
        this.getNodePort();
      }
      if (obj.btnIndex === 1) {
        this.$msgbox({title: '提示', message: `是否重启容器${obj.row.name}？`, showCancel: true}).then(res => {
          API.restartContainer({ 
            name: obj.row.name,
            branchName: obj.row.environment.branchName
          }).then((res) => {
            console.log(res.data);
            if (res.data.success) {
              this.$toast('重启成功！');
            } else {
              this.$msgbox(res.data.message);
            }
          });
        });
      }
      if (obj.btnIndex === 2) {
        this.updateVisible = true;
        this.choosedRow = obj.row;
      }
    },
    getNodePort(id) {
      API.nodeport({ 
        page: this.sub.pagination.page,
        pageSize: this.sub.pagination.pageSize,
        containerId: this.choosedRow.id
      }).then(res => {
        console.log(res);
        this.sub.tableData = res.data.items;
        this.sub.pagination.total = res.data.total;
      })
    },
    goPage(num) {
      this.pagination.page = num;
      this.getDataList();
    },
    getDataList() {
      API.searchContainer({
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
        name: this.searchObj.name,
        branchName: this.searchObj.branchName,
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
      Object.assign(this.searchObj, {
        name: '',
        status: ''
      });
      this.toSearch();
    },
    goPageSub(num) {
      this.sub.pagination.page = num;
      this.getNodePort();
    },
    updateWar() {
      let formData = new FormData(this.$refs.$warfile);
      formData.append("name", this.choosedRow.name);
      formData.append("branchName", this.choosedRow.environment.branchName);
      API.replaceWar(formData).then(res => {
        console.log(res)
        if (res.data.success) {
          this.$toast('更新成功！');
          this.updateVisible = false;
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

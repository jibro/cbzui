<template>
  <div class="page-multi">
    <div class="page-tabs">
      <czb-tab :datas="tabData" size="14px" @tabChoose="tabClick"></czb-tab>
    </div>
    <div class="page-multi-wrap" v-if="tabData[0].active">
      <div class="page-multi-user bgf">
        <div class="page-multi-btn">
          <czb-button width="80px" @btnClick="addUserItem" :min="true">
            <i class="czbfont iczb-add" slot="left"></i>新增用户
          </czb-button>
        </div>
        <czb-table v-if="userData.length > 0" :columns="userColumns" :tabledata="userData"  @handleClick="handleClick" :handle="handle"></czb-table>
      </div>
    </div>
    <div class="page-multi-wrap" v-if="tabData[1].active">
      <div class="page-multi-role bgf">
        <div class="page-multi-btn">
          <czb-button width="80px" @btnClick="addRoleItem" :min="true">
            <i class="czbfont iczb-add" slot="left"></i>新增角色
          </czb-button>
        </div>
        <czb-table v-if="roleData.length > 0" :columns="roleColumns" :tabledata="roleData"  @handleClick="handleClick1" :handle="handle1"></czb-table>
      </div>
    </div>
    <div class="page-multi-wrap" v-if="tabData[2].active">
      <div class="page-multi-auth bgf">
        <div class="page-multi-btn">
          <czb-button width="80px" @btnClick="addItem" :min="true">
            <i class="czbfont iczb-add" slot="left"></i>新增权限
          </czb-button>
        </div>
        <czb-table v-if="permissonData.length > 0" :columns="permissonColumns" :tabledata="permissonData"  :handle="handle2" @handleClick="handleClick2"></czb-table>
      </div>
    </div>
    <czb-modal title="新增用户" :visible="addUserVisible" @closeModel="addUserVisible=false" @onsubmit="addUserSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>用户名:</span></label>
          <czb-input v-model="addUserObj.username" placeholder="请输入用户名" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>电子邮箱:</span></label>
          <czb-input v-model="addUserObj.email" placeholder="请输入电子邮箱" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>密码:</span></label>
          <czb-input type="password" v-model="addUserObj.password" placeholder="请输入密码" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>分支:</span></label>
          <czb-input v-model="addUserObj.branchPath" placeholder="请输入分支" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="修改用户" :visible="updateUserVisible" @closeModel="updateUserVisible=false" @onsubmit="updateUserSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>用户名:</span></label>
          <czb-input v-model="updateUserObj.username" placeholder="请输入用户名" :autowidth="true" :disabled="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>电子邮箱:</span></label>
          <czb-input v-model="updateUserObj.email" placeholder="请输入电子邮箱" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>分支:</span></label>
          <czb-input v-model="updateUserObj.branchPath" placeholder="请输入分支" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="查看本用户的所有角色" :visible="userRoleVisible" @closeModel="userRoleVisible = false" @onsubmit="userRoleVisible = false">
      <ul class="page-modal-list">
        <li v-for="(x, i) in thisUserRoles" :key="i">{{x}}</li>
      </ul>
    </czb-modal>
    <czb-modal title="为用户更改角色" :visible="updateUserRoleVisible" @closeModel="updateUserRoleVisible = false" @onsubmit="updateUserRole">
      <czb-radio :datas="needUserRole" :hasborder="true" v-model="chooseUserRole"></czb-radio>
    </czb-modal>
    <czb-modal title="查看本角色权限" :visible="permissonVisible" @closeModel="permissonVisible = false" @onsubmit="permissonVisible = false">
      <ul class="page-modal-list">
        <li v-for="(x, i) in thisRolePermissons" :key="i">{{x}}</li>
      </ul>
    </czb-modal>
    <czb-modal title="为角色更改权限" :visible="addPermissonVisible" @closeModel="addPermissonVisible = false" @onsubmit="updateRolePermissionsRole">
      <czb-checkbox :datas="needPermisson" :hasborder="true" v-model="addPermissonData"></czb-checkbox>
    </czb-modal>
    <czb-modal title="新增角色" :visible="addRoleVisible" @closeModel="addRoleVisible=false" @onsubmit="addRoleSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>角色名称:</span></label>
          <czb-input v-model="addRoleObj.name" placeholder="请输入角色名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>角色类型:</span></label>
          <!-- <czb-input v-model="addRoleObj.type" placeholder="请输入角色类型" :autowidth="true"></czb-input> -->
          <czb-select :datas="addRoleTypes" v-model="addRoleObj.type" placeholder="请选择角色类型" :autowidth="true"></czb-select>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="修改角色" :visible="updateRoleVisible" @closeModel="updateRoleVisible=false" @onsubmit="updateRoleSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>角色名称:</span></label>
          <czb-input v-model="updateRoleObj.name" placeholder="请输入角色名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>角色类型:</span></label>
          <!-- <czb-input v-model="updateRoleObj.type" placeholder="请输入角色类型" :autowidth="true"></czb-input> -->
          <czb-select :datas="updateRoleTypes" v-model="updateRoleObj.type" placeholder="请选择角色类型" :autowidth="true"></czb-select>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="新增权限" :visible="addVisible" @closeModel="addVisible=false" @onsubmit="addSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>权限名称:</span></label>
          <czb-input v-model="addObj.name" placeholder="请输入权限名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>权限url:</span></label>
          <czb-input v-model="addObj.url" placeholder="请输入权限url" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
    <czb-modal title="修改权限" :visible="updateVisible" @closeModel="updateVisible=false" @onsubmit="updateSubmit">
      <div class="page-form">
        <div class="page-form-item">
          <label class="page-form-label"><span>权限名称:</span></label>
          <czb-input v-model="updateObj.name" placeholder="请输入权限名称" :autowidth="true"></czb-input>
        </div>
        <div class="page-form-item">
          <label class="page-form-label"><span>权限url:</span></label>
          <czb-input v-model="updateObj.url" placeholder="请输入权限url" :autowidth="true"></czb-input>
        </div>
      </div>
    </czb-modal>
  </div>
</template>
<script>
import API from '@/api';
import {formatDate} from '@/utils';
import noData from '@/components/noData';
import axios from 'axios';
export default {
  name: 'list',
  components: {
    noData
  },
  data() {
    return {
      choosedData: [],
      addPermissonData: [],
      choosedRow: null,
      choosedUserRow: null,
      addRoleTypes: [
        {id: '10001', name: '10001'},
        {id: '10002', name: '10002'},
        {id: '10003', name: '10003'}
      ],
      updateRoleTypes: [
        {id: '10001', name: '10001'},
        {id: '10002', name: '10002'},
        {id: '10003', name: '10003'}
      ],
      tabData: [
        {id: '1', name: '用户管理', active: true},
        {id: '2', name: '角色管理', active: false},
        {id: '3', name: '权限管理', active: false}
      ],
      addUserObj: {
        username: '',
        email: '',
        password: '',
        branchPath: ''
      },
      updateUserObj: {
        username: '',
        email: '',
        branchPath: ''
      },
      addRoleObj: {
        name: '',
        type: ''
      },
      updateRoleObj: {
        name: '',
        type: ''
      },
      addObj: {
        name: '',
        url: ''
      },
      updateObj: {
        name: '',
        url: ''
      },
      addUserVisible: false,
      updateUserVisible: false,
      addVisible: false,
      addRoleVisible: false,
      updateVisible: false,
      updateRoleVisible: false,
      userRoleVisible: false,
      updateUserRoleVisible: false,
      thisUserRoles: [],
      userData: [],
      needUserRole: [],
      chooseUserRole: {},
      userColumns: [
        {
          title: '用户名',
          width: '20%',
          key: 'username'
        },
        {
          title: '电子邮箱',
          width: '20%',
          key: 'email'
        },
        {
          title: '分支',
          width: '20%',
          key: 'branchPath'
        },
        {
          title: '登录时间',
          width: '20%',
          key: 'loginTime',
          render(val) {
            return formatDate(new Date(val), 'yyyy-MM-dd hh:mm:ss');
          }
        }
      ],
      roleColumns: [
        {
          title: '角色名称',
          width: '30%',
          key: 'name'
        },
        {
          title: '角色类型',
          width: '30%',
          key: 'type'
        }
      ],
      permissonColumns: [
        {
          title: '权限名称',
          width: '30%',
          key: 'name'
        },
        {
          title: '权限url',
          width: '30%',
          key: 'url'
        }
      ],
      roleData: [],
      permissonData: [],
      handle: {
        width: '11%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-form', title: '查看本用户的所有角色'},
          {id: 2, name: 'iczb-add', title: '为用户更改角色'},
          {id: 3, name: 'iczb-edit', title: '修改用户'},
          {id: 4, name: 'iczb-delete', title: '删除用户'}
        ]
      },
      handle1: {
        width: '11%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-form', title: '查看本角色权限'},
          {id: 2, name: 'iczb-add', title: '为角色更改权限'},
          {id: 3, name: 'iczb-edit', title: '修改角色'},
          {id: 4, name: 'iczb-delete', title: '删除角色'}
        ]
      },
      handle2: {
        width: '6%',
        type: 'icon',
        fontClass: 'czbfont',
        btns: [
          {id: 1, name: 'iczb-edit', title: '修改权限'},
          {id: 2, name: 'iczb-delete', title: '删除权限'}
        ]
      },
      permissonVisible: false,
      addPermissonVisible: false,
      thisRolePermissons: [],
      needPermisson: []
    };
  },
  methods: {
    tabClick(item) {
      switch (item.id) {
        case '1':
          this.queryAllUser();
          break;
        case '2':
          this.queryAllRole();
          break;
        case '3':
          this.queryAllPermisson();
          break;
      }
    },
    handleClick(obj) {
      if (obj.btnIndex === 0) {
        this.getRoles(obj.row.username, true);
      }
      if (obj.btnIndex === 1) {
        this.updateUserRoleVisible = true;
        this.choosedUserRow = obj.row;
        axios.all([
          this.queryAllRole(),
          this.getRoles(obj.row.username)
        ]).then(axios.spread(() => {
          this.needUserRole = [];
          this.roleData.forEach((obj, i) => {
            this.needUserRole.push({
              key: obj.id,
              value: obj.name
            })
            if (this.thisUserRoles.indexOf(obj.name) != -1) {
              this.$set(this.needUserRole[i], 'isChoosed', true)
            }
          })
        }));
      }
      if (obj.btnIndex === 2) {
        this.updateUserVisible = true;
        this.updateUserObj = {...obj.row};
      }
      if (obj.btnIndex === 3) {
        this.$msgbox(`是否删除用户${obj.row.username}？`).then(() => {
          API.deleteUser(obj.row).then(res => {
            if (res.success) {
              this.$toast('删除成功！');
              this.queryAllUser();
            } else {
              this.$msgbox(res.msg);
            }
          })
        })
      }
    },
    handleClick1(obj) {
      if (obj.btnIndex === 0) {
        this.queryRolePermissionsRole(obj.row.name, true);
      }
      if (obj.btnIndex === 1) {
        this.addPermissonVisible = true;
        this.choosedRow = obj.row;
        axios.all([
          this.queryAllPermisson(),
          this.queryRolePermissionsRole(obj.row.name)
        ]).then(axios.spread(() => {
          this.needPermisson = [];
          this.permissonData.forEach((obj, i) => {
            this.needPermisson.push({
              key: obj.id,
              value: obj.name
            })
            if (this.thisRolePermissons.indexOf(obj.name) != -1) {
              this.$set(this.needPermisson[i], 'isChoosed', true)
            }
          })
        }));
      }
      if (obj.btnIndex === 2) {
        this.updateRoleVisible = true;
        this.updateRoleObj = {...obj.row};
        this.updateRoleTypes.forEach((item, i) => {
          this.$set(this.updateRoleTypes[i], 'isChoosed', false)
          if (item.id === obj.row.type) {
            this.$set(this.updateRoleTypes[i], 'isChoosed', true)
          }
        })
      }
      if (obj.btnIndex === 3) {
        this.$msgbox(`是否删除角色${obj.row.name}？`).then(() => {
          API.deleteRole(obj.row).then(res => {
            if (res.success) {
              this.$toast('删除成功！');
              this.queryAllRole();
            } else {
              this.$msgbox(res.msg);
            }
          })
        })
      }
    },
    handleClick2(obj) {
      if (obj.btnIndex === 0) {
        this.updateVisible = true;
        this.updateObj = {...obj.row};
      }
      if (obj.btnIndex === 1) {
        this.$msgbox(`是否删除权限${obj.row.name}？`).then(() => {
          API.deletePermisson(obj.row).then(res => {
            if (res.success) {
              this.$toast('删除成功！');
              this.queryAllPermisson();
            } else {
              this.$msgbox(res.msg);
            }
          })
        })
      }
    },
    getRoles(username, show) {
      return API.getRoles(username).then(res => {
        console.log(res)
        if (res.data && res.data.length > 0) {
          this.thisUserRoles = res.data;
          show && (this.userRoleVisible = true);
        } else {
          this.thisUserRoles = [];
          show && this.$msgbox('暂未绑定角色！');
        }
      })
    },
    queryRolePermissionsRole(name, show) {
      return API.queryRolePermissionsRole(name).then(res => {
        console.log(res)
        if (res && res.length > 0) {
          this.thisRolePermissons = res;
          show && (this.permissonVisible = true);
        } else {
          this.thisRolePermissons = [];
          show && this.$msgbox('暂未绑定权限！');
        }
      })
    },
    updateUserRole() {
      let userRoles = [];
      if (this.chooseUserRole.value) {
        userRoles.push(this.chooseUserRole.value)
      }
      API.updateUserRoles(this.choosedUserRow.username, {
        'roles': userRoles
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.updateUserRoleVisible = false;
          this.$toast('更改成功！');
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    updateRolePermissionsRole() {
      let permissionNames = [];
      this.addPermissonData.forEach(obj => {
        permissionNames.push(obj.value)
      })
      API.updateRolePermissionsRole({
        'roleName': this.choosedRow.name,
        'permissionNames': permissionNames
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.addPermissonVisible = false;
          this.$toast('更改成功！');
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    addUserItem() {
      this.addUserVisible = true;
    },
    addItem() {
      this.addVisible = true;
    },
    addRoleItem() {
      this.addRoleVisible = true;
    },
    addUserSubmit() {
      for(let key in this.addUserObj) {
        if(!this.addUserObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      if (this.addUserObj.email && this.addUserObj.email.indexOf('@') === -1) {
        this.$msgbox('请输入正确的电子邮箱！');
        return;
      }
      API.addUser(this.addUserObj).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('添加成功！');
          this.addUserObj = {
            username: '',
            email: '',
            password: '',
            branchPath: ''
          };
          this.queryAllUser();
          this.addUserVisible = false;
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    updateUserSubmit() {
      for(let key in this.updateUserObj) {
        if(!this.updateUserObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      if (this.updateUserObj.email && this.updateUserObj.email.indexOf('@') === -1) {
        this.$msgbox('请输入正确的电子邮箱！');
        return;
      }
      API.updateUser({
        id: this.updateUserObj.id,
        username: this.updateUserObj.username,
        email: this.updateUserObj.email,
        branchPath: this.updateUserObj.branchPath
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('修改成功！');
          this.updateUserVisible = false;
          this.queryAllUser();
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    addRoleSubmit() {
      for(let key in this.addRoleObj) {
        console.log(key, this.addRoleObj[key], !this.addRoleObj[key])
        if(!this.addRoleObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      API.addRole({
        name: this.addRoleObj.name,
        type: this.addRoleObj.type.id
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('添加成功！');
          this.addRoleObj = {
            name: '',
            type: ''
          };
          this.addRoleTypes.forEach(obj => {
            obj.isChoosed = false
          })
          this.queryAllRole();
          this.addRoleVisible = false;
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    addSubmit() {
      for(let key in this.addObj) {
        if(!this.addObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      API.addPermisson(this.addObj).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('添加成功！');
          this.addObj = {
            name: '',
            url: ''
          };
          this.queryAllPermisson();
          this.addVisible = false;
        } else {
          this.$msgbox(res.message);
        }
      })
    },
    updateRoleSubmit() {
      for(let key in this.updateRoleObj) {
        if(!this.updateRoleObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      API.updateRole({
        id: this.updateRoleObj.id,
        name: this.updateRoleObj.name,
        type: this.updateRoleObj.type.id
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('修改成功！');
          this.updateRoleVisible = false;
          this.queryAllRole();
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    updateSubmit() {
      for(let key in this.updateObj) {
        if(!this.updateObj[key]) {
          this.$msgbox('字段不可以为空！');
          return;
        }
      }
      API.updatePermisson(this.updateObj).then(res => {
        console.log(res);
        if (res.success) {
          this.$toast('修改成功！');
          this.updateVisible = false;
          this.queryAllPermisson();
        } else {
          this.$msgbox(res.msg);
        }
      })
    },
    queryAllUser() {
      API.queryAllUser().then(res => {
        console.log(res)
        if (res.success) {
          this.userData = res.data;
        }
      })
    },
    queryAllRole() {
      API.queryAllRole().then(res => {
        console.log(res)
        if (res.success) {
          this.roleData = res.data;
        }
      })
    },
    queryAllPermisson() {
      return API.queryAllPermisson().then(res => {
        console.log(res)
        if (res.success) {
          this.permissonData = res.data;
        }
      })
    }
  },
  created() {
    this.queryAllUser();
  }
};
</script>

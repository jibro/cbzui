import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/api/';

axios.interceptors.request.use(function (config) {
  let token = localStorage.token
  if (token) {
    config.headers['token'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  const {data} = error.response
  var status = error.response && error.response.status
  if (status == 401) {
    window.localStorage.token = ''
    window.localStorage.brantch = ''
    window.msgbox('用户会话过期', function () {
      window.logout()
    })
  }else{
    let meg = data.error?data.error:data
    window.msgbox(`${meg}`, function () {
    })
  }
  return Promise.reject(error)
})

export default {
  // 配置查询
  queryMenuByName(name) {
    return axios.get('/cloud/user/getPermissions?name=' + name);
  },
  searchConfig(params) {
    return axios.post('/cloud/config/search', qs.stringify(params));
  },
  addConfig(params) {
    return axios.post('/cloud/config/addConfig', qs.stringify(params));
  },
  updateConfig(params) {
    return axios.post('/cloud/config/updateConfig', qs.stringify(params));
  },
  delConfig(params) {
    return axios.post('/cloud/config/delConfig', qs.stringify(params));
  },
  login(params) {
    return axios.post('/cloud/login/auth', params);
  },
  // 中间件查询
  searchComponent(params) {
    return axios.post('/cloud/component/search', qs.stringify(params));
  },
  // 服务查询
  searchService(params) {
    return axios.post('/cloud/service/search', qs.stringify(params));
  },
  addService(params) {
    return axios.post('/cloud/service/addService', qs.stringify(params));
  },
  delService(params) {
    return axios.post('/cloud/service/delService', qs.stringify(params));
  },
  // 模板服务
  addTemplateService(params) {
    return axios.post('/cloud/service/addTemplateService', qs.stringify(params));
  },
  delTemplateService(params) {
    return axios.post('/cloud/service/delTemplateService', qs.stringify(params));
  },
  // 容器查询
  searchContainer(params) {
    return axios.post('/cloud/container/search', qs.stringify(params));
  },
  nodeport(params) {
    return axios.post('/cloud/container/nodeport', qs.stringify(params));
  },
  restartContainer(params) {
    return axios.post('/cloud/container/restartContainer', qs.stringify(params));
  },
  replaceWar(params) {
    return axios.post('/cloud/container/replaceWar', params, {headers:{'Content-Type':'multipart/form-data'}});
  },
  // 环境查询
  searchEnvironment(params) {
    return axios.post('/cloud/environment/search', qs.stringify(params));
  },
  createEnvironment(params) {
    return axios.post('/cloud/environment/create', qs.stringify(params));
  },
  releaseEnvironment(params) {
    return axios.post('/cloud/environment/release', qs.stringify(params));
  },
  // exportEnvironment(branchName) {
  //   return axios.get(`/cloud/environment/export/${branchName}`);
  // },
  logEnvironment(params) {
    return axios.post('/cloud/environment/log', qs.stringify(params));
  },
  deleteEnvironment(params) {
    return axios.post('/cloud/environment/delete', qs.stringify(params));
  }
};

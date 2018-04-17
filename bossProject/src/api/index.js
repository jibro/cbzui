import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/api/';
export default {
  // 配置查询
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
  searchEnvironment(params) {
    return axios.post('/cloud/environment/search', qs.stringify(params));
  },
  searchEnvironment(params) {
    return axios.post('/cloud/environment/search', qs.stringify(params));
  },
  searchEnvironment(params) {
    return axios.post('/cloud/environment/search', qs.stringify(params));
  },
};

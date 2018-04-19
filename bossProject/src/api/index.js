import axios from 'axios';

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
  envSearch(params) {
    return axios.post('/env/envsearch', params);
  },
  loginCommit(params) {
    return axios.post('/cloud/login/auth', params);
  },
  queryMenuByName(name) {
    return axios.get('/cloud/user/getPermissions?name=' + name);
  }
};

import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/api/';
export default {
  envSearch(params) {
    return axios.post('/env/envsearch', params);
  }
};

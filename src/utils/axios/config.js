import axios from 'axios';
import { MessageBox } from 'element-ui';
import router from '@/router';
import { getStore } from '@/utils/methods';

//对axios的配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '/djtest';

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    let url = config.url;
    if (url.indexOf('userSignIn') < 0) {
      config.headers['token'] = getStore('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.msg === '登录失效，请重新登录!') {
      MessageBox.alert('检测账号在多端登录，请返回登录首页', '提示', {
        confirmButtonText: '确定',
        type: 'error',
        callback: action => {
          router.push({ path: '/' });
        }
      });
    }
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;

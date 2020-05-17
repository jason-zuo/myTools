
import axios from 'axios';
import { baseURL } from '../config/config';

const qs = require('qs');

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status == 403) {
      window.AJAXGuard.emit('403');
    }
    return Promise.reject({
      error: error.response.data.msg,
      status: error.response.status,
      statusText: error.response.statusText,
    });
  } else if (error.request) {
    // The request was made but no response was received
    return Promise.reject(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    return Promise.reject(error.message);
  }
});

export default async (type = 'GET', url = '', data = {}, config = {}) => {
  // 提示： 这里的url填相对路径 例如'/test/example'
  type = type.toUpperCase();
  if (type != 'UPLOAD') {
    url = baseURL + url;
  }
  if (type === 'GET') {
    let dataStr = ''; // 数据拼接字符串
    Object.keys(data).forEach((key) => {
      dataStr += `${key}=${data[key]}&`;
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')); // 去掉最后一个&
      url = `${url}?${dataStr}`; // 加上 ？ 号
    }
    return axios.get(url);
  }
  if (type === 'POST') {
    if (JSON.stringify(data) == '{}') {
      return axios.post(url, '', {
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },

      });
    } else {
      return axios.post(url, (data), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
    }
  }
  if (type === 'UPLOAD') {
    if (config.token == undefined) {
      return Promise.reject('wrong params');
    }
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    });
  }

  if (type === 'POSTFILE') {
    return axios.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  }
};

console.log('ths request basic URL is', baseURL);

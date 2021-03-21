import axios from 'axios'
import Storage from 'utils/storage';

export function request(config) {
  //1、创建axios实例
  const instance = axios.create({
  baseURL: process.env.VUE_APP_URL === 'development' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3001',
  timeout: 10000,
  headers: {
    Authorization:`Bearer ${window.sessionStorage.getItem('token')}`,
    Accept: 'application/json',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    Expires: 0,
    'Content-Type': 'application/json; charset=utf-8' 
    }
  })

  //axios的拦截器
instance.interceptors.request.use(config => {
  //console.log(config);
  return config
  }, err => {
  //console.log(err);
  //请求拦截器
}); 

instance.interceptors.response.use(res =>{
  //console.log(res);
  return res.data
  },err => {
    console.log(err);
  }); //响应
    
  //3、发送真正的网络请求
  return instance(config)
}
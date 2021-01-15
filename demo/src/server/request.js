import axios from 'axios'

export function request(config) {
    //1、创建axios实例
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:3001',
        timeout: 3000
    })

    //2、axios的拦截器
    //请求拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        //对请求错误做些什么
        return Promise.reject(err);
    });

    //响应拦截器
    instance.interceptors.response.use(config => {
        return res.data
    },err => {
        //对响应错误做些什么
        return Promise.reject(err);
    });

    //3、发送真正网络请求
    return instance(config)
   
}
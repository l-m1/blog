import Axios from 'axios';

//Vue.use(Axios)

//创建axios实例
const instance = Axios.create({
    baseURL: 'http://api.cat-shop.penkuoer.com',
    timeout: 3000
})

//添加请求拦截器
instance.interceptors.request.use(config => {
    console.log("添加请求拦截");
    return config
},err => {
    //对请求拦截错误做些什么
    return Promise.reject(err);
});

//添加响应拦截器
instance.interceptors.response.use(config => {
    console.log("添加请求响应");
    /* config.headers.token = "123456" */
    return config
},err => {
    //对请求响应错误做些什么
    return Promise.reject(err);
})

function get(url,params) {
    return instance.get(url, {
        params
    });
}

function post(url,data) {
    return instance.post(url,data);
}

function put(url,data) {
    return instance.put(url,data);
}

function del(url) {
    return instanc.delete(url);
}
//导出对应请求
export {get,post,put,del}
import Axios from 'axios';
import Storage from 'utils/storage.js';
import router from 'router/index.js';
const instance = Axios.create({
	baseURL: 'http://api.cat-shop.penkuoer.com',
	timeout: 3000,
	withCredentials:true ,//是否允许带cookie这些
  });


//------------------添加请求拦截器---------------
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// -----------------------添加响应拦截器------------------
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
class Api{
	constructor() {
	}
	static do(method, url, data) {
		const headers={
           'Content-Type': 'application/json; charset=utf-8'
		}
		return new Promise((resolve, reject) => {
			instance({
				method,
				url,
				params: data,
				headers:headers
			}).then(res=>{
				// resolve(res);
				if (res.data.ok) {
					resolve(res.data);
				} else if (res.data.code === 1002) {
					//登录状态失效
					reject(new Error(`token失效`));
				} else {
					if( res.data.code ){
						router.currentRoute.path !== 'login' &&
						router.replace({
						  path: 'login',
						  query: { redirect: router.currentRoute.path },
						})
						reject(new Error(`${res.data.code}: ${res.data.msg}`));
					}
					else{
						reject(new Error(`${res.data.msg}`));
					}
				}
			}).catch(err=>{
				reject(err)
			})
		})
	}
}
export function GET({api,data}){return Api.do('get',api,data)}
export function PUT({api,data,}){return Api.do('put',api,data,)}
export function DELETE({api,data,}){return Api.do('delete',api,data,)}
export function POST({api,data,}){return Api.do('post',api,data,)}
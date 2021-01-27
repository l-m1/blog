import {GET,PUT,DELETE,POST} from './request.js'

//注册
export function register({data}) {
  return POST('/operator/regist',data)
}

//登录
export function login(data) {
  return POST('/api/article',data)
}

//邮箱验证码请求
export function getEmailCode(data) {
  return POST('/operator/emailcode',data)
}
    




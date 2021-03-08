import {request} from 'utils/request.js'

export function repassword({data}) {
  return request({
      url: '/api/reset',
      method: 'put',
      data
  })
}
export function getVcode({params}) {
  return request({
      url: '/api/login/mailer',
      method: 'get',
      params
  })
}
export function login({data}) {
  return request({
      url: '/api/login',
      method: 'post',
      data
  })
}
export function register({data}) {
  return request({
      url: '/api/register',
      method: 'post',
      data
  })
}
export function oneArticle({params}) {
  return request({
      url: '/api/article',
      method: 'get',
      params
  })
}
export function personalArticle({params}) {
  return request({
      url: '/api/user/article',
      method: 'get',
      params
  })
}
export function updateArticles({data}) {
  return request({
      url: '/api/article',
      method: 'put',
      data
  })
}
export function createArticles({data}) {
  return request({
      url: '/api/article',
      method: 'post',
      data
  })
}
export function deleteArticles({data}) {
  return request({
      url: '/api/article',
      method: 'delete',
      data
  })
}
export function getAllArticle({params}) {
  return request({
      url: '/api/article',
      method: 'get',
      params
  })
}

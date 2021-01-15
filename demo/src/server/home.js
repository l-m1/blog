import {request} from './request.js'

export function getHomeData(type) {
    return request({
        url: '/api/article',
        params: {
            type,
        }
    })
}
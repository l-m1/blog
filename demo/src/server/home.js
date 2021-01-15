import {get,post,put,del} from 'utils/request.js'

export function getHomeData() {
    return get('api/article',{
        params: {
            type: 2
        }
    })
}
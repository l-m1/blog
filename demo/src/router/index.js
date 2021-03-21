import Vue from 'vue'
import Router from 'vue-router'

//安装vuerouter
Vue.use(Router)

//创建router对象
let router = new Router({
  linkActiveClass:'selected',
  linkExactActiveClass: 'normal',
  scrollBehavior(to,from,savePosition) {//滚动行为
    //console.log(savePosition)
    if(savePosition) {
      return savePosition
    } else {
        return {x:0,y:0}
    }
  },
  base: '/',
  mode: 'history',
  routes:require('./route').routes
})


//导出router对象
export default router
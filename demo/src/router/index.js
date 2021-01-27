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

//通过vue-router提供的钩子函数beforeEach()
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    next(true) //false时候阻止路由执行，默认是true
    // next('/login') 在这里判断到后去跳到登录页面，先要在路由里配置
    console.log("当前是个404组件，需要登录访问，其实你还没有登录，不过看你可怜兮兮，我暂时让你旁观！")
  } else {
    next()
  }
})

// //afterEach进入组件之后，当然，就没有next了，已经进入了组件
router.afterEach((to, from) => {
  if (to.meta.title) {
    //当进入了组件后，如果meta里有title就设置title(注意，这个位置document前面需要加上window才能访问)
    window.document.title = to.meta.title;
    console.log(from)
  } else {
      window.document.title = '笔记库'
    }
})

//导出router对象
export default router
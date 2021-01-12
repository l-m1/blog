import Vue from 'vue'
import VueRouter from 'vue-router'

//安装vuerouter
Vue.use(VueRouter)


//引入登录之后的各个页面导航
const Home = () => import('views/home/Home.vue')
const Search = () => import('views/search/Search.vue')
const More = () => import('views/more/More.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/more',
        component: More
    },
    {
        path: '/profile',
        component: Profile
    }
]

//创建router对象
const router = new VueRouter({
    routes,
    mode: 'history'
})

//导出router对象
export default router
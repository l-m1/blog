import Vue from 'vue'
import VueRouter from 'vue-router'

//安装vuerouter
Vue.use(VueRouter)


//导入各个导航页面 
const Login = () => import('views/login/Login.vue') 
const Register = () => import('views/register/Register.vue') 
const ForGet = () => import('views/forget/ForGet.vue') 

const Home = () => import('views/home/Home.vue')
const Activity = () => import('views/activity/Activity.vue')
const Search = () => import('views/search/Search.vue')
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
        path: '/activity',
        component:Activity
    },
    {
        path: '/profile',
        component:Profile
    },
    {
        path: '/login',
        component:Login
    },
    {
        path: '/register',
        component:Register
    },
    {
        path: '/forget',
        component:ForGet
    }
]

//创建router对象
const router = new VueRouter({
    routes,
    mode: 'history'
})

//导出router对象
export default router
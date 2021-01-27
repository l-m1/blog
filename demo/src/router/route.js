//导入登录页面 
const Login = () => import('views/login/Login.vue') 
const Register = () => import('views/register/Register.vue') 
const ForGet = () => import('views/forget/ForGet.vue') 

//导入各个导航页面
const Home = () => import('views/home/Home.vue')
const Activity = () => import('views/activity/Activity.vue')
const Search = () => import('views/search/Search.vue')
const Profile = () => import('views/profile/Profile.vue')
export const routes = [
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
    meta: {
      requireAuth: true, //表示进入这个路由需要登录
    },
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

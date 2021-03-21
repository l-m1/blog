//导入登录页面 
const Login = () => import('views/login/Login.vue') 
const Register = () => import('views/register/Register.vue') 
const Forget = () => import('views/forget/Forget.vue') 

//导入各个导航页面
const Home = () => import('views/home/Home.vue')
const Activity = () => import('views/activity/Activity.vue')
const Search = () => import('views/search/Search.vue')
const Profile = () => import('views/profile/Profile.vue')

//首页文章细节页
const Articles = () => import('views/home/homechild/Articles.vue')

//个人文章页 一些操作
const addArticle = () => import('views/profile/profilechild/addArticle.vue')
const editArticle = () => import('views/profile/profilechild/editArticle.vue')
const lookArticle = () => import('views/profile/profilechild/lookArticle.vue')
const lookArticles = () => import('views/activity/activitychild/lookArticles.vue')
export const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
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
    component:Forget
  },
  {
    path: '/articles',
    component: Articles,
  },
  {
    path: '/addArticle',
    name:'addArticle',
    component: addArticle,
  },
  {
    path: '/editArticle',
    name:'editArticle',
    component: editArticle,
  },
  {
    path: '/lookArticle',
    name:'lookArticle',
    component: lookArticle,
  },
  {
    path: '/lookArticles',
    name:'lookArticles',
    component: lookArticles,
  }
]

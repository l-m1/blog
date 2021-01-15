<template>
    <div id="home">
        <nav-bar></nav-bar>
        <home-recommend></home-recommend>
        <home-content></home-content>
    </div>
</template>
<script>

//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'

//导入homechild里面的子组件
import HomeRecommend from './homechild/HomeList.vue'
import HomeContent from './homechild/HomeContent.vue'

//网络请求
//import {getHomeData} from 'server/home.js'

export default {
    name: 'Home',
    components: {
        NavBar,
        HomeRecommend,
        HomeContent
    },
    create() {
        //1、请求数据
    }
}
</script>
<style scoped>
</style>
<template>
    <div class="search">
        <div><nav-bar></nav-bar></div>
        <div class="content">
        <button @click="btn">请求数据的方法</button></div>
        </div>
</template>

<script>
//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'
import {get} from 'utils/request.js'
export default {
    name: 'Search',
    components: {
        NavBar
    },
    methods: {
        /* 请求数据的方法 */
        btn() {
            get('api/v1/products',{}).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style scoped>
    .content {
        top: 70px;
        left: 0;
        position: fixed;
        width: 100%;
        /* 水平垂直居中 */
        display: flex;
        vertical-align: center;
        justify-content: center;
        background-color: red;
    }
</style>
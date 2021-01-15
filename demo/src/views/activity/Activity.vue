<template>
    <div class="more">
        <div><nav-bar></nav-bar></div>
        <div class="content">
            更多
        </div>
    </div>
</template>

<script>
//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'

export default {
    name: 'More',
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .more {
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
    .content {
        width: 750px;
    }
</style>
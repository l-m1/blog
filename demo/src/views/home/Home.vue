<template>
    <div id="home">
        <home-title></home-title>
        <home-recommend></home-recommend>
    </div>
</template>
<script>
//导入homechild里面的子组件
import HomeTitle from './homechild/HomeTitle.vue'
import HomeRecommend from './homechild/HomeRecommend.vue'

export default {
    name: 'Home',
    components: {
        HomeTitle,
        HomeRecommend
    }
}
</script>
<style scoped>
</style>
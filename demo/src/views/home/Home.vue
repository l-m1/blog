<template>
  <div class="post-page">
    <home-list></home-list>
    <nav-bar></nav-bar>
  </div>
</template>
<script>

//导入默认组件 导航栏
import NavBar from 'components/common/NavBar.vue'

//导入子组件
import HomeList from './homechild/HomeList.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeList
  }
}
</script>
<style scoped>
  .post-page{
    top: 110px;
    left: 0;
    position: fixed;
    width: 100%;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
    height:100vh
  }
</style>
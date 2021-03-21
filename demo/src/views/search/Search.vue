<template>
  <div class="post-page">
    <nav-bar></nav-bar>
    <search-list></search-list>
  </div>
</template>

<script>
//导入默认组件 导航栏
import NavBar from 'components/common/NavBar.vue'
import SearchList from './searchchild/SearchList.vue'
export default {
  name: 'Search',
  components: {
    NavBar,
    SearchList
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
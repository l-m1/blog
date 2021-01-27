<template>
  <div id="home">
    <nav-bar></nav-bar>
    <home-list></home-list>
  </div>
</template>
<script>

//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'

//导入homechild里面的子组件
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
</style>
<template>
  <div class="search">
    <nav-bar></nav-bar>
    <div><search-list></search-list></div>
  </div>
</template>

<script>
//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'
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
</style>
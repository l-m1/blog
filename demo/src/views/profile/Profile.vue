<template>
  <div class="post-page">
    <nav-bar></nav-bar>
    <personal-article></personal-article>
  </div>
</template>
<script>

//导入默认组件 导航栏
import NavBar from 'components/common/NavBar.vue'

//导入子组件
import PersonalArticle from './profilechild/PersonalArticle.vue'


export default {
  name: 'Profile',
  components: {
    NavBar,
    PersonalArticle
  }
}
</script>
<style scoped>
</style>
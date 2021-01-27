<template>
  <div class="activity">
    <nav-bar></nav-bar>
    <activity-list></activity-list>
  </div>
</template>

<script>
//导入默认组件 导航栏
import NavBar from 'components/content/NavBar.vue'
//导入子组件
import ActivityList from './activitychild/ActivityList.vue'

export default {
  name: 'Activity',
  components: {
    NavBar,
    ActivityList
  }
}
</script>

<style scoped>
</style>
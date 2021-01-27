<template>
  <div class="profile">
    <nav-bar></nav-bar>
    <profile-list></profile-list>
  </div>
</template>
<script>

import NavBar from 'components/content/NavBar.vue'
import ProfileList from './profilechild/ProfileList.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileList
  }
}
</script>

<style scoped>
</style>
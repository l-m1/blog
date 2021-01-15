<template>
    <div class="profile">
        <div><nav-bar></nav-bar></div>
    </div>
</template>
<script>

import NavBar from 'components/content/NavBar.vue'

export default {
    name: 'Profile',
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .profile {
        font-size: 15px;
        color: red;
    }
</style>
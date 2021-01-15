<template>
    <div class="home-content">
        <div class="content">
            <ul>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
                <li>sfmcw</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeContent'
}
</script>
<style scoped>
    .home-content {
        top: 100px;
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
        /* 高度被子元素撑开 */
        /* height: 100px; */
    }
</style>
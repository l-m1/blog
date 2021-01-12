<template>
    <div class="nav-bar">
            <div class="content">
                <ul class="nav">
                    <li><img src="~assets/img/home/navbar/title.png" alt=""><p>个人博客</p></li>
                    <li v-for="(item,index) in titles" :key="index"
                        :class="{active: currentIndex === index}"
                        @click="liClick(index)"
                    >{{item}}</li>
                </ul>
                <a href="#">登录</a>
            </div>
    </div>
</template>
<script>
export default {
    name: 'HomeTitle',
    data() {
        return {
            titles: ['首页','知识库','关注','发现'],
            currentIndex: 0
        }
    },
    methods: {
        liClick(index) {
            this.currentIndex = index
            this.$emit('liClick',index)
        }
    }
}
</script>
<style scoped>
    .nav-bar {
        width: 1200px;
    }
    .content {
        width: 800px;
        float: left;
    }
    .nav li img {
        width: 30px;
        height: 30px;
        margin-left: 15px;
        border-right: 10px;
    }
    .nav{
        list-style: none;
        margin: 10px 0;
        display: flex;
        vertical-align: center;
        justify-content: center;
    }
    .nav li{
        float: left;
        width: 5%;
        font-size: 15px;
    }
    .nav a{
        display: block;
        width: 100%;
        text-align: center;
        font-weight: bold;
        text-decoration: none;
    }
    .active {
        color: red;
    }
</style>
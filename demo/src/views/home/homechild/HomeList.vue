<template>
    <div class="item-list">
        <div class="content">
            <ul class="nav">
                <li class="item" v-for="(item,index) in items" :key="index"
                    :class="{active: currentIndex === index}"
                    @click="recClick(index)"
                >{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeList',
    data() {
        return {
            currentIndex: 0,
            items: ['全部文章','Javascript','Html','CSS','Vue','更多']
        }
    },
    methods: {
        recClick(index) {
            this.currentIndex = index
            this.$emit('recClick',index)
        }
    }
}
</script>
<style scoped>
    .item-list {
        top: 65px;
        left: 0;
        position: fixed;
        width: 100%;
        background: #ffffff;
        height: 40px;
    }
    .nav{
        list-style: none;
        /* 水平垂直居中 */
        display: flex;
        vertical-align: center;
        justify-content: center;
        
    }
    .nav .item {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 12px;
    }
    .active {
        color: red;
    }
</style>
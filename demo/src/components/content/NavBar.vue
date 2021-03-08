<template>
  <div class="nav-bar">
    <div class="content">
      <ul class="nav">
        <li><img src="~assets/img/home/navbar/title.png" alt=""><p>个人博客</p></li>
        <li class="item" v-for="(item,key) in titles" :key="key">
        <a
          :class="{'active':($route.path == item.p) || (item.p =='/home' && $route.path == '/') }"
          href="javascript:;"
          @click="$router.push(item.p)"
          v-text="item.t"
        ></a>
        </li>
        <div>
          <el-button @click="backLogin">退出登录界面</el-button>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    const titles = [
      { p: "/home", t: "首页" },
      { p: "/activity", t: "活动" },
      { p: "/search", t: "发现" },
      { p: "/profile", t: "我的" },
    ];
    return {
      titles,
    }
  },
  methods: {
    backLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
  .content {
    height: 60px;
    width: 100%;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    /* 下方阴影过渡 */
    box-shadow: 0px 1px 2px #cccccc;
  }
  .nav{
    list-style: none;
    margin: 10px 0;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
  }
  .nav li{
    float: left;
    width: 10%;
  }
  .nav li img {
    width: 25px;
    height: 25px;
    margin-left: 15px;
    border-right: 10px;
  }
  .nav .item {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    font-weight: 550;
    font-size: 18px;
    color: #232323;
  }
  .active {
    color: #409eff;
  }
  .el-button {
    background-color: #007fff;
    color: #ffffff;
  }
</style>
<template>
  <div class="articles">
    <nav-bar></nav-bar>
    <div class="post-page">
      <el-form>
      <!-- 返回按钮 -->
        <el-form-item>
          <div class="page-up">
            <el-button size="middle" @click="pageBack"
              >返回</el-button
            >
          </div>
        </el-form-item>
      </el-form>
      <!-- 内容区 -->
      <div class="page-content">
        <!-- 文章内容区域 -->
        <el-table :data="articlelist"  stripe>
            <el-table-column prop="title" label="文章标题"></el-table-column>
        </el-table>
        <el-table :data="articlelist"  stripe>
            <el-table-column prop="create_at" label="创建时间"></el-table-column>
        </el-table>
        <el-table :data="articlelist"  stripe>
            <el-table-column prop="des" label="文章内容"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
//导入默认组件 导航栏
import NavBar from 'components/common/NavBar.vue'
//网络请求
import {oneArticle} from 'server/userApi.js'

export default {
  name:'Articles',
  components: {
    NavBar
  },
  data() {
    return {
      articlelist: []
    }
  },
  created() {
    this.getOneArticle()
  },
  methods: {
    //返回文章列表
    pageBack() {
      this.$router.push({path:'/home'})
    },
    /* 网络请求 */
    //获取对应项文章列表
    async getOneArticle() {
      //console.log(this.$route.query.id);
      let res = await oneArticle({params:{id:this.$route.query.id,type:this.$route.query.type}})
      //console.log(res);
      this.articlelist = [res]
    }
  }
}
</script>
<style scoped>
  .post-page {
    top: 90px;
    left: 0;
    position: fixed;
    width: 100%;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
    height:100vh;
  }
  .post-page .page-up {
    width: 70px;
    position: relative;
  }
  .post-page .page-content {
    margin-top: 5px;
    width: 850px;
    background-color: #fff;
    position: relative;
  }
</style>
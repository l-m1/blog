<template>
  <div class="home-list-items">
    <div class="float-right">
        <el-card class="box-card" v-for="(item,index) in articlelist" :key="index">
          <div slot="header" class="clearfix">
            <span>标题：{{item.title}}</span>
            <el-button style="float: right" type="primary" icon="iconfont iconchakan" size="mini" @click="articleLook(id)"></el-button>
          </div>
          <div class="text item">更新时间：{{item.updata_at}}</div>
        </el-card>
      </div>
  </div>
</template>

<script>
//网络请求
import {getAllArticle,oneArticle} from 'server/userApi.js'
export default {
  name: 'HomeListiItems',
  data() {
    return {
      articlelist: {},
      id:'',
    };
  },
  methods: {
    /* 查看文章内容 */
    articleLook(id) {
      this.lookArticle(id)
      this.$router.push('/homelistitem',id)
    },
    /* 查看单个文章内容 */
    async lookArticle(id) {
      let res = await oneArticle({params: {id: id,type:this.type[this.subscript]}})
      //console.log(res);
    },
  }
}
</script>

<style scoped>
</style>
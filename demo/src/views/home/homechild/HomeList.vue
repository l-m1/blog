<template>
  <div class="post-page clearfix">
    <!-- 左侧菜单栏 -->
    <div class="float-left">
      <div v-for="(item,key) in navs" :key="key" class="left-navs">
        <el-button
          @click="itemClick(subscript=key)"
          :type="subscript === key ?'primary':''"
          style="width:100%"
        >{{item}}</el-button>
      </div>
    </div>
    <!-- 中间内容区 -->
    <el-scrollbar>
      <div class="float-right">
        <el-card class="box-card" v-for="(item,index) in articlelist" :key="index">
          <div slot="header" class="clearfix">
            <span>标题：{{item.title}}</span>
            <el-button style="float: right" type="primary" icon="iconfont iconchakan" size="mini" @click="articleLook(id)"></el-button>
          </div>
          <div class="text item">更新时间：{{item.updata_at}}</div>
        </el-card>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
//网络请求
import {getAllArticle,oneArticle} from 'server/userApi.js'

export default {
  name: "HomeList",
  created() {
    this.getAllArticles()
  },
  data() {
    let navs = ['热点文章','Html','CSS','Javascript','Vue','更多'];
    return {
      navs,
      subscript:0, //默认为第一个nav
      type: ['其它','html','css','js','VueJs','书籍'],
      articlelist: {},
      id:'',
      isshow: false
    };
  },
  methods: {
    //点击左侧列表
    itemClick() {
      //console.log(this.subscript);
      this.getAllArticles()
      
    },
    /* 查看文章内容 */
    articleLook(id) {
      this.lookArticle(id)
      this.$router.push('/homelistitem',id)
    },



    /* 网络请求 */
    //获取对应项文章列表
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type[this.subscript]}})
      //console.log(res);
      this.articlelist = res
    },
    /* 查看单个文章内容 */
    async lookArticle(id) {
      let res = await oneArticle({params: {id: id,type:this.type[this.subscript]}})
      //console.log(res);
    },
  }
};
</script> 

<style lang='less' scoped>
  @import url('~assets/css/home/homelist.css');
</style>

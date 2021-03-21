<template>
  <div class="post-page clearfix">
    <!-- 上方菜单栏 -->
    <div class="page-top">
      <div v-for="(item,key) in navs" :key="key" class="top-navs">
        <a
          href="javascript:;"
          @click="itemClick(subscript=key)"
          :type="subscript === key ?'primary':''"
          style="width:100%"
          :class="{'active':(subscript === key ?'primary':'')}"
        >{{item}}</a>
      </div>
    </div>
    <!-- 中间内容区 -->
    <el-scrollbar>
      <div class="page-down">
        <el-card class="box-card" v-for="(item,index) in articlelist" :key="index">
          <div slot="header" class="clearfix" @click="itemArticle(item.id,item.type)">
            <span>标题：{{item.title}}</span>
          </div>
          <div class="text item">上一次更新时间：{{item.updata_at}}</div>
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
    let navs = ['前端','后端','人工智能','代码人生','工具','其它'];
    return {
      navs,
      subscript:0, //默认为第一个nav
      type: ['admin','server','智能','code','工具','people'],
      articlelist: {},
      id:'',
      isshow: false
    };
  },
  methods: {
    //点击上方导航栏
    itemClick() {
      //console.log(this.subscript);
      this.getAllArticles()
      
    },
    /* 查看文章内容 */
    itemArticle(id,type) {
      this.lookArticle(id,type)
      this.$router.push({path:'/articles',query:{id:id,type:type}})
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
<style scoped>
  .page-top{
    top: 70px;
    left: 0;
    position: fixed;
    width: 100%;
    height: 90vh;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
  }
  .top-navs {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-weight: 530;
    font-size: 15px;
    color: #232323;
  }
  .page-down {
    margin-top: 5px;
    width: 850px;
  }
  .page-top .el-scrollbar{
    height: 90vh;
  }
  .page-down .box-card {
    margin:4px 0;
  }
  .active {
    color: #409eff;
  }
</style>
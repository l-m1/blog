<template>
  <div class="articles">
    <div class="table">
      <el-table :data="tableData" border stripe height="calc(100vh - 194px)">
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="type" label="文章类型"></el-table-column>
        <el-table-column prop="create_at" label="创建时间"> </el-table-column>
        <el-table-column prop="updata_at" label="更新时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot="header" class="fl-r"> 
            <span>操作</span>  
            <el-button @click="addArticles" type="primary" size="mini" class="fl-r mr-2"
            >新增</el-button>
          </template>
          <template slot-scope="scope">
            <!-- 编辑按钮 -->
            <el-tooltip effect="dark" content="编辑" placement="top" :enterabl="false">
              <el-button type="info" size="mini" @click="editArticles(scope.row)">编辑</el-button>
            </el-tooltip>
            <!-- 详情按钮 -->
            <el-tooltip effect="dark" content="详情" placement="top" :enterabl="false">
              <el-button type="primary" size="mini" @click="articleLook(scope.row)">详情</el-button>
            </el-tooltip>
            <!-- 删除按钮 -->
            <el-tooltip effect="dark" content="删除" placement="top" :enterabl="false">
              <el-button type="danger" size="mini" @click="articleDelete(scope.row.id)">删除</el-button>
            </el-tooltip>
            </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination layout="total" :total="total"></el-pagination>
    </div>
    <div class="participator">
      <span>共报名({{cartLength}})项</span>
      <el-button  size="mini" @click="lookParticipator(item)" v-for="(item,index) in message" :key="index">查看{{index+1}}</el-button>
    </div>
  </div>
</template>

<script>
import {personalArticle,oneArticle,updateArticles,deleteArticles} from 'server/userApi.js'
//工具类
import Storage from 'utils/storage.js';

export default {
  name: "PersonalArticle",
  data() {
    return {
      total: 0,
      tableData: [],
      type:'html',
      message:''
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength
    }
  },
  created() {
    this.init();
    this.message = this.$store.getters.cartList
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.getpersonalArticle();
    },
    //添加文章
    addArticles() {
      this.$router.push({name:'addArticle'})
    },
    //编辑文章
    editArticles(res) {
      this.lookArticle(res)
      this.$router.push({path:'/editArticle',query:{id:res.id,res:res}})
    },
    //详情文章
    articleLook(res) {
      this.lookArticle(res)
      //console.log(res);
      this.$router.push({path:'/lookArticle',query:{id:res.id,res:res}})
    },

    //查看报名的文章
    lookParticipator(res) {
      //console.log(res);
      this.$alert(res.des, res.title, {
          dangerouslyUseHTMLString: true
        });
    },

    //删除文章
    /* 根据id 删除文章 */
    async articleDelete(id) {
      //console.log(id);  //获取删除的指定id
      const confirmResult = await this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', 
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      //console.log('删除成功');
      this.deleteArticle(id)
    },

    //网络请求
    //全部个人文章
    async getpersonalArticle() {
      let res = await personalArticle({params:{}})
      this.tableData = res
      this.total = res.length
      //console.log(res);
    },
    /* 查看单个文章内容 */
    async lookArticle(id) {
      let res = await oneArticle({params: {id: id}})
      //console.log(res);
    },
    //删除文章
    async deleteArticle(id) {
      let res = await deleteArticles({data: {id: id}})
      //console.log(res);
      //console.log(id);
      Storage.removeStorage(id);
      this.getpersonalArticle()
      //console.log(res);
    }
  },
};
</script>

<style scoped>
@import url('~assets/css/global.css');
.articles {
  top: 70px;
  position: fixed;
  left: 0;
  width: 100%;
  /* 水平垂直居中 */
  vertical-align: center;
  justify-content: center;
  background-color: #fff;
}
.table {
  top: 85px;
  padding: 10px;
  left: 0;
  width: 100%;
}
.fl-r{
  float:right;
  margin-right: 30px;
}
.participator .el-button {
  margin-left: 15px;
  margin-bottom: 5px;
}
</style>
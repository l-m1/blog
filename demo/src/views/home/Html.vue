<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>前端开发</el-breadcrumb-item>
      <el-breadcrumb-item>Html</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 列表区域 -->
    <el-table :data="articlelist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="type" label="文章类型"></el-table-column>
        <el-table-column prop="create_at" label="创建时间"></el-table-column>
        <el-table-column prop="updata_at" label="更新时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 查看按钮 -->
            <el-tooltip effect="dark" content="查看" placement="top" :enterabl="false">
              <el-button type="info" icon="iconfont iconchakan" @click="articleLook(scope.row.id)"></el-button>
            </el-tooltip>
            <!-- 编辑按钮 -->
            <el-tooltip effect="dark" content="编辑" placement="top" :enterabl="false">
              <el-button type="primary" icon="iconfont iconbianji"  @click="articleEdit(scope.row.id)"></el-button>
            </el-tooltip>
            <!-- 删除按钮 -->
            <el-tooltip effect="dark" content="删除" placement="top" :enterabl="false">
              <el-button type="danger" icon="iconfont iconshanchu" @click="articleDelete(scope.row.id)"></el-button>
            </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination layout="total" :total="total"></el-pagination>
    <!-- 添加区域 -->
    <div class="addbtn">
      <el-button type="primary" @click="addArticle">添加文章</el-button>
    </div>
    <!-- 添加文章的对话框 -->
    <el-dialog
      title="添加文章"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed">
      <!-- 内容区域 -->
      <el-form ref="addContentRef" :model="addContent" label-width="80px">
        <el-form-item label="类型" prop="type">
          <el-input v-model="type" disabled></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="addContent.title"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="des">
          <div class="describe">
            <textarea
             name="text" 
             class="content" 
             rows="20" cols="80"
             wrap="physical" 
             v-model="addContent.des"></textarea>
            </div>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改文章的对话框 -->
    <el-dialog
      title="修改文章"
      :visible.sync="editDialogVisible"
      width="50%">
      <el-form ref="editContentRef" :model="editContent" label-width="80px">
        <el-form-item label="编号">
          <el-input v-model="editContent.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="editContent.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="editContent.des"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
//网络请求
import {getAllArticle,createArticles,oneArticle,updateArticles,deleteArticles} from 'server/userApi.js'
//工具类
import Storage from 'utils/storage.js';

export default {
  name: 'Html',
  created() {
    this.getAllArticles()
  },
  data() {
    return {
      articlelist: [],
      total: 0,
      /* 添加对话框的显示与隐藏 */
      addDialogVisible: false,
      editDialogVisible: false,
      /* 全部文章 */
      type : "html",
      /* 新建文章内容 */
      addContent: {
        title: '',
        des: ''
      },
      /* 更新文章 */
      editContent: {
      },
    }
  },
  methods: {
    /* 添加文章 */
    addArticle() {
      this.addDialogVisible = true
    },
    /* 添加文章对话框返回清空 */
    addDialogClosed() {
      this.$refs.addContentRef.resetFields()
    },
    /* 添加文章 确定成功添加 */
    submit() {
      this.createArticle()
    },
    /* 查看文章内容 */
    articleLook(id) {
      this.lookArticle(id)
    },
    /* 编辑文章 */
    articleEdit(id) {
      this.lookArticle(id)
      this.editDialogVisible = true
    },
    /* 编辑文章 确定修改 */
    confirm() {
      this.updateArticle()
    },
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


    //网络请求方法
    /* 全部文章列表 */
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type}})
      //console.log(res);
      this.articlelist = res
      this.total = res.length
    },
    /* 添加文章 */
    async createArticle() {
      let res = await createArticles({data:{title:this.addContent.title,type:this.type,des:this.addContent.des}})
      //this.currentIndex = res.data
      //console.log(res);
      if(res.data === '参数错误!') return this.$message.error('添加文章失败')
      /* 关闭对话框 */
      this.addDialogVisible = false
      /* 刷新列表数据 */
      this.getAllArticles()
      /* 提示信息 */
      return this.$message.success('添加文章成功')
    },
    /* 查看单个文章内容 */
    async lookArticle(id) {
      let res = await oneArticle({params: {id: 136}})
      console.log(res);
      this.editContent = res
    },
    /* 更新文章 提交*/
    async updateArticle() {
        let res = await updateArticles({data: {id:this.editContent.id,title:this.editContent.title,des:this.editContent.des}})
        /* 关闭对话框 */
        this.editDialogVisible = false
        /* 刷新列表数据 */
        this.getAllArticles()
        /* 提示信息 */
        return this.$message.success('更新文章成功')
    },
    /* 删除文章 */
    async deleteArticle(id) {
      let res = await deleteArticles({data: {id: id}})
      //console.log(res);
      //console.log(id);
      Storage.removeStorage(id);
      this.getAllArticles()
      //console.log(res);
    }
  }
}
</script>
<style scoped>
  @import url('~assets/css/global.css');
  .describe {
    overflow: hidden;
  }
  .content {
    border: 1px solid #DCDFE6;
  }
  .content:focus {
    outline: none !important;
    border-color: #409EFF;
  }
</style>
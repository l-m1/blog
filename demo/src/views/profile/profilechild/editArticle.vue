<template>
  <div class="editArticle">
    <div class="form">
      <el-form
        :model="editContent"
        ref="editContent"
        label-width="100px"
        class="demo-ruleForm"
      >
      <!-- 返回与保存按钮 -->
        <el-form-item>
          <div class="grid-content">
            <el-button size="mini" @click="$router.push('/profile')"
              >返回</el-button
            >
            <el-button
              type="primary"
              size="mini"
              :loading="saveLoading"
              @click="save"
              >保存</el-button
            >
          </div>
        </el-form-item>
        <!-- 输入文章的结构 -->
        <el-row>
          <el-col :span="16"
            ><div class="grid-content">
              <el-form-item label="标题" prop="title">
                <el-input
                  v-model="editContent.title"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="16"
            ><div class="grid-content">
              <el-form-item label="类型" prop="type">
                <el-select v-model="editContent.type">
                  <el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
          </el-row>
          <el-row>
          <el-col :span="16"
            ><div class="grid-content">
              <el-form-item label="内容" prop="des">
                <el-input
                  v-model="editContent.des"
                ></el-input>
              </el-form-item></div
          ></el-col>
          </el-row>
        <el-form-item label="文章" prop="content">
          <el-row>
            <el-col :span="21">
              <div>
                <el-switch
                  v-model="switchHtml"
                  active-text="富文本"
                  inactive-text="markdown"
                >
                </el-switch>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <!-- 选择写文章的格式 -->
      <div class="editor-html">
        <quill-editor
          v-if="switchHtml"
          style="height: 700px"
          v-model="editContent.des"
          ref="myQuillEditor"
        />
        <mavon-editor
          v-model="mavon"
          v-else
          style="height: 700px"
        />
      </div>
    </div>
  </div>
</template>
 
<script>

import {quillEditor} from 'vue-quill-editor';
import {mavonEditor} from 'mavon-editor';
//网络请求
import {updateArticles} from 'server/userApi.js'
export default {
  name: "editArticle",
  created() {
    this.getArticle()
  },
  components: {
    quillEditor,
    mavonEditor
  },
  data() {
    return {
      mavon: "",
      switchHtml: true,
      saveLoading: false,
      ruleForm: {
        mark: "article",
        // 标题
        title: "",
        // 内容
        des: "",
        // 类型
        type: "",
        // 创建时间
        create_at: "",
      },
      //类型选项
      options: [{
          label: 'html'
        }, {
          label: 'css'
        }, {
          label: 'js'
        }, {
          label: 'react'
        }, {
          label: 'vuejs'
        }, {
          label: 'java'
        }, {
          label: 'mysql'
        }, {
          label: 'suanfa'
        }, {
          label: 'database'
        }, {
          label: 'git'
        }, {
          label: 'people'
        }, {
          label: 'mianshi'
        },{
          label: '其它'
        }, {
          label: '书籍'
        }, {
          label: 'admin'
        }, {
          label: 'server'
        }, {
          label: '工具'
        }, {
          label: '智能'
        }, {
          label: 'code'
        }],
      value: '',
      fileReader: new FileReader(),
      /* 更新文章 */
      editContent: {
      },
    };
  },
  methods: {
    //获取对应项单个文章内容
    async getArticle() {
      //console.log(this.$route.query.res);
      this.editContent = this.$route.query.res
    },
    save() {
      this.saveLoading = true;
      this.$refs.editContent.validate((valid) => {
        if (valid) {
          this.saveLoading = false;
          let res = updateArticles({data:{id:this.editContent.id,title:this.editContent.title,type:this.editContent.type,des:this.editContent.des}})
          if(res.data === '参数错误!') return this.$message.error('更新文章失败')
          /* 提示信息 */
          return this.$message.success('更新文章成功')
        } else {
          console.log("error submit!!");
          this.saveLoading = false;
          return false;
        }
      });
    },
  }
};
</script>
<style>
.editArticle {
  padding-bottom: 40px;
}
</style>
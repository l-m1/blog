<template>
  <div class="editArticle">
    <div class="form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
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
              :disabled="saveLoading || !isEdit"
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
                  :disabled="!isEdit"
                  v-model="ruleForm.title"
                  placeholder="请输入"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="16"
            ><div class="grid-content">
              <el-form-item label="类型" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择">
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
                  :disabled="!isEdit"
                  v-model="ruleForm.des"
                  placeholder="请输入"
                ></el-input>
              </el-form-item></div
          ></el-col>
          </el-row>
        <el-form-item label="文章" prop="content">
          <el-row>
            <el-col :span="21">
              <div>
                <el-switch
                  :disabled="!isEdit"
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
          :disabled="!isEdit"
          v-if="switchHtml"
          style="height: 700px"
          v-model="ruleForm.des"
          ref="myQuillEditor"
        />
        <mavon-editor
          :editable="isEdit"
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
import {createArticles} from 'server/userApi.js'
export default {
  name: "editArticle",
  components: {
    quillEditor,
    mavonEditor
  },
  data() {
    return {
      isEdit: this.$route.query.flag === "addArticle" || !this.$route.query.id,
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
        },{
          label: '其它'
        }, {
          label: '书籍'
        }, {
          label: 'admin'
        }, {
          label: '工具'
        }, {
          label: '智能'
        }, {
          label: 'code'
        }, {
          label: '摸鱼'
        }, {
          label: '内推'
        }],
      value: '',
      fileReader: new FileReader(),
      rules: {
        title: [{ required: true, message: "请输入标题", triggerr: "blur" }],
        type: [{ required: true, message: "请选择类型", triggerr: "blur" }],
        des: [{ required: true, message: "请输入内容", triggerr: "blur" }],
      },
    };
  },
  methods: {
    save() {
      this.saveLoading = true;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.saveLoading = false;
          let res = createArticles({data:{title:this.ruleForm.title,type:this.ruleForm.type,des:this.ruleForm.des}})
          if(res.data === '参数错误!') return this.$message.error('添加文章失败')
          /* 提示信息 */
          return this.$message.success('添加文章成功')
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
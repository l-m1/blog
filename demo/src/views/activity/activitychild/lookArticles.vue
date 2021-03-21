<template>
  <div class="lookArticle">
    <div class="form">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="30px"
        class="demo-ruleForm"
      >
      <!-- 返回按钮 -->
        <el-form-item>
          <div class="grid-content">
            <el-button size="middle" @click="$router.push('/activity')"
              >返回</el-button
            >
          </div>
        </el-form-item>
      </el-form>
      <!-- 选择写文章的格式 -->
      <div class="editor-html">
        <quill-editor
          v-if="switchHtml"
          style="height: 700px"
          v-model="editContent.des"
          ref="myQuillEditor"
          disabled
        />
        <mavon-editor
          v-model="mavon"
          v-else
          style="height: 700px"
          disabled
        />
      </div>
    </div>
  </div>
</template>
 
<script>

import {quillEditor} from 'vue-quill-editor';
import {mavonEditor} from 'mavon-editor';
export default {
  name: "lookArticles",
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
  }
};
</script>
<style>
.lookArticle {
  padding-bottom: 40px;
}
</style>
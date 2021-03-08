<template>
  <div class="activity-list">
    <div class="page">
      <div class="page-head">
        选择文章类别：
        <el-select v-model="selected" @change="itemClick" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key='item.label'
            :label="item.value"
            :value="item.label"
          ></el-option>
        </el-select>
      </div>
      <el-scrollbar>
        <el-row>
          <el-col :span="8" v-for="(item,index) in articlelist" :key="index" class="activity-box">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~assets/img/activity/book.jpg" class="image">
              <div style="padding: 14px;">
                <span>标题：{{item.title}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{item.updata_at}}</time>
                  <el-button type="text" class="button" @click="lookarticle(id)">查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import books from 'utils/books.js'
import {getAllArticle,oneArticle} from 'server/userApi.js'
export default {
  name: 'ActivityList',
  data() {
    let add_ = JSON.parse(JSON.stringify(books));
    return {
      options: add_,
      selected: "10",
      articlelist: {},
      /* 网络请求都数据 */
      type: ['热点文章','html','css','js','vue',''],
    };
  },
  methods: {
    //选择框
    itemClick() {
      this.getArticles()
      //console.log(this.options);
      
    },



    /* 网络请求数据的方法 */
    //全部文章
    async getArticles() {
      let res = await getAllArticle({params:{type:this.type[this.subscript]}})
      this.articlelist = res
      console.log(res);
    },
    //查看单个文章
    async lookarticle(id) {
      let res = await oneArticle({params: {id: id}})
      //console.log(res);
    },
  }
}
</script>
<style scoped>
  @import url('~assets/css/activity/activitylist.css');
</style>
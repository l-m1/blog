<template>
  <div class="search-list">
    <div class="page">
      <el-scrollbar>
        <el-row>
        <el-col :span="8" v-for="(item,index) in options" :key="index" class="activity-box">
          <el-card :body-style="{padding: '0px'}" shadow="hover">
            <img
              src="~assets/img/activity/book.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <div class="des-box">
                <h3 class="title">{{item.title}}</h3>
                <div class="des">vue是上手最快的前端框架！</div>
              </div>
              <div class="bottom clearfix">
                <span slot="label" style="float:left;line-height: 30px;">
                  <i class="el-icon-location-outline"></i> 上海
                </span>
                <el-button style="float:right;line-height: 30px;" type="text" class="button">报名参加</el-button>
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
export default {
  name: 'SearchList',
  data() {
    return {
      options: {}
    }
  },
  methods: {
    //选择框
    itemClick() {
      console.log(this.options);
      //this.getArticles()
      
    },



    /* 网络请求数据的方法 */
    //全部文章
    async getArticles() {
      let res = await getAllArticle({params:{type:this.type[this.options]}})
      this.options = res
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
<style scope>
  @import url('~assets/css/search/searchlist.css');
</style>
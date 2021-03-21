<template>
  <div class="search-list">
    <div class="page">
      <div class="page-head">
        选择地区：
        <el-select v-model="selected" placeholder="请选择" @change="selectClick($event)">
          <el-option
            v-for="item in options"
            :key="item.label+'xue3'"
            :label="item.value"
            :value="item.label"
          ></el-option>
        </el-select>
      </div>
      <el-scrollbar>
        <el-row>
        <el-col :span="8" v-for="(item,index) in articles" :key="index" class="activity-box">
          <el-card :body-style="{padding: '0px'}" shadow="hover">
            <img
              src="~assets/img/activity/book.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <div class="des-box">
                <h3 class="title">{{item.title}}</h3>
              </div>
              <div class="bottom clearfix">
                <span slot="label" style="float:left;line-height: 30px;">
                  <i class="el-icon-location-outline"></i> {{city}}
                </span>
                <el-button style="float:right;line-height: 30px;" type="text" class="button" @click="addToCart(item.id)">报名学习</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </el-scrollbar>
      <toast :message="message" :isshow="isshow"></toast>
    </div>
  </div>
</template>
<script>
//网络请求
import {getAllArticle,personalArticle,oneArticle} from 'server/userApi.js'
//工具类
import address from "utils/address.js";
//导入报名成功弹窗
import Toast from 'components/common/toast/Toast.vue'
export default {
  name: 'SearchList',
  data() {
    let add_ = JSON.parse(JSON.stringify(address));
    return {
      options: add_,
      articles:'',
      city:'湖北省',
      selected: "湖北省",
      type:'书籍',
      message:'',
      isshow:false
    }
  },
  components: {
    Toast
  },
  mounted() {
    this.getArticles()
    //console.log(this.options);
  },
  methods: {
    selectClick(event) {
      this.type = event
      this.getArticle()
      //console.log(event);  //label值
      this.city = this.options[event-1].value
      //console.log(this.city);
    },
    //添加报名
    addToCart(id) {
      this.getOneArticle(id)
    },
    /* 网络请求数据的方法 */
    //全部文章
    async getArticles() {
      let res = await getAllArticle({params:{type:this.type}})
      //let res = await getAllArticle({params:{type:this.type[this.options]}})
      //console.log(res);
      this.articles = res
    },
    //单个地区文章
    async getArticle() {
      let res = await personalArticle({params:{type:this.type}})
      this.articles = res
    },
    //单个文章内容
    async getOneArticle(id) {
      let res = await oneArticle({params:{id:id,type:this.type}})
      //console.log(res);
      //1、获取报名成功将要展示的信息
      const product = {}
      product.title = res.title;
      product.des = res.des;
      product.updata_at = res.updata_at;
      product.id = res.id;
      //2、将报名成功的添加到个人管理里
      this.$store.dispatch('addCart',product)
      //console.log(product);
      this.isshow = true;
      this.message = "报名成功"
      setTimeout(() => {
        this.isshow = false;
        this.message = '';
      },1500)
    }

  }
}
</script>
<style scope>
  @import url('~assets/css/search/searchlist.css');
</style>
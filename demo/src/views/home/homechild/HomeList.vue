<template>
  <div class="post-page clearfix">
    <div class="float-left">
      <div v-for="(item,key) in navs" :key="key" class="left-navs">
        <el-button
          @click="subscript=key"
          :type="subscript === key ?'primary':''"
          style="width:100%"
        >{{item}}</el-button>
      </div>
    </div>
    <div class="float-right">
      <div class="float-right-item" v-for="(value,index) in 5" :key="index+'xue2'">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  data() {
    let navs = ['热点文章','Html','CSS','Javascript','Vue','更多'];
    return {
      navs,
      subscript:0, //默认为第一个nav
    };
  }
};
</script> 

<style lang='less' scoped>
  .post-page{
    top: 70px;
    left: 0;
    position: fixed;
    width: 100%;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
  }
  .float-left {
    float: left;
    overflow: hidden;
    width: 200px;
    background-color: #fff;
  }
  .left-navs{
    width: 80%;
    margin:10px auto;
  }
  .left-navs button{
    border:1px solid #fff
  }
  .float-right {
    float: left;
    overflow: hidden;
    width: 710px;
  }
  .float-right-item{
    width: 100%;
    margin-bottom: 15px;
  }
</style>

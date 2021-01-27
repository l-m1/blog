<template>
  <div class="search-list">
    <div class="page">
      <el-scrollbar>
        <el-row>
        <el-col :span="8" v-for="(item,index) in 10" :key="index" class="activity-box">
          <el-card :body-style="{padding: '0px'}" shadow="hover">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <div class="des-box">
                <h3 class="title">机器学习</h3>
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
  name: 'SearchList'
}
</script>
<style scope>
  @import url('~assets/css/search/searchlist.css');
</style>
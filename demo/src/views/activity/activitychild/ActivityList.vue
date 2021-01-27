<template>
  <div class="activity-list">
    <div class="page">
      <div class="page-head">
        选择文章类别：
        <el-select v-model="selected" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key='item.label'
            :label="item.value"
            :value="item.label"
          ></el-option>
        </el-select>
      </div>
      <el-row>
        <el-col :span="8" v-for="(item,index) in 10" :key="index" class="activity-box">
          <el-card :body-style="{padding: '0px'}" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import books from 'utils/books.js'
export default {
  name: 'ActivityList',
  data() {
    let add_ = JSON.parse(JSON.stringify(books));
    return {
      options: add_,
      selected: "10"
    };
  }
}
</script>
<style scoped>
  @import url('~assets/css/activity/activitylist.css');
</style>
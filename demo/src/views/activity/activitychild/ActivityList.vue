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
  .activity-list {
    top: 70px;
    left: 0;
    position: fixed;
    width: 100%;
    /* 水平垂直居中 */
    display: flex;
    vertical-align: center;
    justify-content: center;
  }
  .page {
    width: 920px;
  }
  .activity-list .page-head{
    text-align: center;
    width: 100%;
    font-size: 18px;
    color: var(--color-text);
  }
  .activity-box{
    width: 420px;
    padding: 10px;
    border-radius: 10px;
    margin: 10px; 
    float: left;
  }
  .image {
    width: 100%;
    display: block;
  }
</style>
<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name:'Toast',
  props:{
    message: {
      type:String,
      default:''
    },
    isshow:{
      type:Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 15px,20px;
    font-size: 20px;
    color: #fff;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.65);
  }
</style>
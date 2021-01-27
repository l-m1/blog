<template>
  <div class="page">
    <div class="input-box">
      <div class="title">登录</div>
      <el-input
        v-model="ObjInput.email"
        type="text"
        :class="{ borred:true }"
        placeholder="请输入您的邮箱"
      ></el-input>
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="密码"
      ></el-input>
      <el-button type="primary" @click="submit" class="register">登录</el-button>
      <div class="bottom">
        <el-button type="info" @click="switchModel(1)">注册</el-button>
        <el-button type="info" @click="switchModel(2)">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>
<script>
/* 邮箱正则 */
import RegExp from "utils/RegExp.js";
/* 对数据进行初始设置 */
import Storage from 'utils/storage.js';

export default {
  data() {
    return {
      ObjInput: {
        email: "",
        emailreg: false,  //邮箱验证码
        pas: "",
      },
      status: 0,
    };
  },
  methods: {
    async submit() {
      //点击登录按钮
      //1、邮箱\密码 不符合规范
      if(!RegExp.emailRight.test(this.ObjInput.email) | !RegExp.regPassWord.test(this.ObjInput.pas)) {
        this.$message({
          message: '请确认您输入的邮箱、密码是否正确',
          type: 'warning'
        })
        return;
      } else {
          //符合规范的 邮箱与密码对应
          //登录成功 保存登录信息
          let userInfo = await this.$api.login({data:{title:1111,des:'55555'}})
          if(userInfo.ok === 1) {
            Storage.setStorage('token',userInfo.data.token);
            this.$router.push('/profile');
          }
          console.log(userInfo);
      }
    },
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/register')
          break;
        case 2:
          this.$router.push('/forget')
          break;
      }
    },
  },
  //监听data中数据变化
  watch: {
    ObjInput: {
      // 数据变化时执行的逻辑代码
      handler(newData, oldData) {
        if (RegExp.emailRight.test(this.ObjInput.email)) {  //符合邮箱正则
          this.ObjInput.emailreg = true;
        } else {
          this.ObjInput.emailreg = false;
        }
      },
      deep: true,  //深度监听
    },
  },
  
};
</script>

<style lang='less'>
@import url('~assets/css/login.css');
</style>
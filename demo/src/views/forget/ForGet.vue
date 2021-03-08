<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <span>重置密码</span>
      </div>
      <!-- 找回密码区域 -->
      <el-form ref="loginform" class="loginform" :model="loginForm" :rules="loginRules">
        <!-- 邮箱号 -->
        <el-form-item prop="codename">
          <el-input v-model="loginForm.codename" prefix-icon="iconfont iconyouxiang"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont iconpass" type="password"></el-input>
        </el-form-item>
        <!-- 邮箱验证码 -->
        <el-form-item prop="vcode" class="code">
          <el-input v-model="loginForm.vcode" prefix-icon="iconfont iconyanzhengma" class="vcode"></el-input>
          <el-button @click="send" class="vcode-button">获取邮箱验证码</el-button>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="rePassword" class="login">重置密码</el-button>
          <div class="bottom">
            <el-button type="info" @click="switchModel(1)">登录</el-button>
            <el-button type="info" @click="switchModel(2)">注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
/* 邮箱正则 */
import RegExp from "utils/RegExp.js";
/* 网络请求 */
import {repassword,getVcode} from 'server/userApi.js';

export default {
  name: 'Forget',
  data() {
    return {
      loginForm: {
        codename: '',
        password: '',
        vcode: ''
      },
      /* 找回密码规则 */
      loginRules: {
        codename: [
          { required: true,message: "请输入邮箱账号",trigger: "blur"}
        ],
        password: [
          { required: true,message: "请输入新密码",trigger: "blur"}
        ],
        emailvcode: [
          { required: true,message: "请输入邮箱验证码",trigger: "blur"}
        ]
      },
    }
  },
  methods: {
    async rePassword() {
      //点击注册按钮
      //1、邮箱\密码 不符合规范
      if(!RegExp.emailRight.test(this.loginForm.codename) | !RegExp.regPassWord.test(this.loginForm.password)) {
        this.$message({
          message: '请确认您输入的邮箱、密码是否正确',
          type: 'warning'
        })
        return;
      } else if (!RegExp.regName.test(this.loginForm.vcode)){
        this.$message({
          message: '请确认您输入的验证码是否正确',
          type: 'warning'
        })
        return;
      } else {
          //密码重置请求
          let res = await repassword({data:{name: this.loginForm.codename,psd: this.loginForm.password,code:this.loginForm.vcode}})
          //console.log(res);
          this.$message({
            message: '重置密码成功',
            type: 'success'
          })
      }
    },
    async send() {
    //获取验证码
    let res = await getVcode({params:{email:this.loginForm.codename}})
    //console.log(res);
    this.$message({
        message: '发送验证码成功',
        type: 'success'
    })
    },
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/login')
          break;
        case 2:
          this.$router.push('/register')
          break;
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .login_container {
    background-color: #f5f7fa;
    height: 100vh;
  }
  .login_box {
    width: 450px;
    height: 350px;
    background-color: #fff;
    border-radius: 3px;
    /* 外部白色盒子居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box {
      font-size: 30px;
      margin: 20px 0;
      font-weight: 550;
      color: #333333;
      text-align: center;
    }
  }
  .login_box .loginform {
    position: absolute;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .vcode {
    width: 250px;
  }
  .vcode-button {
    margin-left: 20px;
    background-color: #99cccc;
  }
  .btns .login{
    width: 100%;
  }
  .btns .bottom {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
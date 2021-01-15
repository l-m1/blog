<template>
  <div class="register">
    <div class="input-box">
      <div class="title">注册</div>
      <el-input
        v-model="ObjInput.email"
        input="regEmail"
        type="email"
        :class="{ borred:true }"
        placeholder="邮箱地址"
      ></el-input>
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="密码"
      ></el-input>
        <div class="input-item">
          <el-input
          class="text"
          v-model="ObjInput.vcode"
          type="text"
          style="margin-top:0"
          :class="{ borred:true }"
          placeholder="验证码"
          ></el-input>
          <div class="code-show">
            <span class="code" id="checkCode">{{code}}</span>
            <a class="linkcode" @click="linkcode">看不清换一张</a>
          </div>
        </div>
      <el-button type="primary" class="reg" @click="register">注册</el-button>
      <div class="bottom">
        <el-button type="info" @click="back">返回登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
//引入验证码函数
import {getVcode} from 'utils/vcode.js'

export default {
    name: 'Register',
    data() {
        return {
            ObjInput: {
                email: "",
                emailreg: false,
                pas: ""
            },
            status: 0,
            code: "adfs34y"
        };
    },
    methods: {
      register() {
        console.log("注册完成");
      },
      linkcode() {
        //点击切换验证码
        this.code = getVcode();
      },
      back() {
        this.$router.push('/login')
      }
    }
}
</script>

<style scoped>
  .register {
    width: 100vw;
    height: 100vh;
    color: #f5f7fa;
    /* 居中 */
    display: flex;
    justify-content: center;
    align-content: center;
    }
  .input-box {
    width: 400px;
    /* 居中 */
    margin: auto auto;
    background-color: #fff;
    color: #303133;
    /* 设置盒子边框 */
    border: 1px solid #ebeef5;
    /* 设置盒子阴影 */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    /*  */
    /* -webkit-transition: .3s;
    transition: .3s; */
    /* 设置盒子模型 -IE */
    box-sizing: border-box;
    padding: 20px;
    }
  .title {
    text-align: center;
    color: #333333;
    font-weight: 550;
    font-size: 30px;
  }
  .input-item {
    width: 100%;
    display: flex;
    margin: 20px 0;
    position: relative;
  }
  .input-item .text {
    width: 50%;
    border-radius: 1px solid #f4f4f4;
    outline: none;
    box-sizing: border-box;
  }
  .code-show {
    width: 50%;
    height: 100%;
    position: relative;
  }
  .code-show .code {
    color: blue;
    font-size: 18px;
    font-style: italic;
    padding: 0 10px;
  }
  .code-show .linkcode {
    color: forestgreen;
    font-size: 8px;
    line-height: 50px;
    position: absolute;
  }
  .reg{
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  .bottom{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-input {
    margin-top: 20px;
  }
</style>
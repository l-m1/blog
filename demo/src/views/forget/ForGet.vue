<template>
  <div class="forget">
    <div class="input-box">
      <div class="title">忘记密码</div>
      <el-input
        v-model="ObjInput.email"
        type="text"
        :class="{ borred:true }"
        placeholder="邮箱地址"
      ></el-input>
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="新密码"
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
            <el-button v-if="!count" type="primary" class="submit" @click="getVcode">获取邮箱验证码</el-button>
            <el-button v-else type="primary" class="submit">已发送({{count}}s)</el-button>
          </div>
        </div>
      <div class="bottom">
        <el-button type="info" class="back" @click="back">返回登录</el-button>
        <el-button type="info" class="reg" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ForGet',
    data() {
        return {
            ObjInput: {
                email: "",
                emailreg: false,
                pas: ""
            },
            status: 0,
            count: 0
        };
    },
    methods: {
      register() {
        this.$router.push('/register')
      },
      back() {
        this.$router.push('/login')
      },
      getVcode() {
        this.count = 60;
        this.interval = setInterval(() => {
          this.count--;
          if(this.count === 0) {
            clearInterval(this.interval);
          }
        },1000)
      },
      register() {
       console.log('注册完成');
      }
    },
}
</script>
<style scoped>
  .forget {
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
    padding-left: 0 10px;
  }
  .code-show {
    width: 50%;
    position: relative;
    padding-left: 20px;
  }/* 
  .bottom{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */

  .bottom {
    width: 100%;
    margin-top: 20px;
  }
  .bottom .back {
    float: left;
  }
  .bottom .reg {
    float: right;
  }
  .el-input {
    margin-top: 20px;
  }
</style>
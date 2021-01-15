<template>
  <div class="forget">
    <div class="input-box">
      <div class="title">忘记密码</div>
      <el-input
        v-model="ObjInput.email"
        type="text"
        :class="{ borred:true }"
        placeholder="邮箱"
      ></el-input>
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="新密码"
      ></el-input>
      <el-input
        v-model="ObjInput.email"
        type="text"
        :class="{ borred:true }"
        placeholder="邮箱验证码"
      ></el-input>
      <el-button type="primary" class="submit">获取邮箱验证码</el-button>
      <div class="bottom">
        <el-button type="info" @click="back">返回登录</el-button>
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
            status: 0
        };
    },
    methods: {
      register() {
        this.$router.push('/register')
      },
      back() {
        this.$router.push('/login')
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
  .submit{
    margin-top: 20px;
    width: 100%;
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
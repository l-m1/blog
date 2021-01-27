<template>
  <div class="page">
    <div class="input-box">
      <div class="title">忘记密码</div>
      <el-input
        v-model="ObjInput.email"
        input="regEmail"
        type="email"
        :class="{ borred:true}"
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
          v-model="ObjInput.code"
          type="text"
          style="margin-top:0"
          :class="{ borred:true }"
          placeholder="验证码"
          ></el-input>
          <a href="javascript:;" @click="sendCode">{{isRun?`${runTime}s后获取验证码`:`获取邮箱验证码`}}</a>
        </div>
      <el-button type="primary" class="register" @click="submit">找回账号</el-button>
      <div class="bottom">
        <el-button type="info" @click="switchModel(1)">登录</el-button>
        <el-button type="info" @click="switchModel(2)">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
/* 正则规范 */
import RegExp from "@/utils/RegExp.js";

export default {
  data() {
    return {
      identifyCodes: "1234567890",  //邮箱验证码
      ObjInput: {
        email: "", 
        emailreg: false, 
        pas: "",
        code: "",  //邮箱验证码
      },
      //验证码倒计时
      isRun: false,
      runTime: 30
    };
  },
  methods: {
    //点击获取邮箱验证码
    //验证邮箱是否符合规范
    async sendCode() {
      //如果isRun已经运行即已经倒计时 则证明符合规范
      if(this.isRun) return; //直接返回 不进行以下判断
      //1、邮箱不符合规范
      if(!RegExp.emailRight.test(this.ObjInput.email)) {
        this.$message({
          message: '您输入的邮箱不正确,请重新输入',
          type: 'warning'
        })
        return;
      }
      //2、验证邮箱是否已经被注册
      let emailcode = await this.$api.getEmailCode(this.ObjInput.email);
      if(parseInt(emailcode.ok) === 0) {
        this.$message({
          message: '您输入的邮箱已经被注册',
          type: 'warning'
        })
        return;
      }
      //3、通知服务器发送验证码
      emailcode = await this.$api.getEmailCode(this.ObjInput.email);
      if(parseInt(emailcode.ok) === 1) {  //成功发送之后出现的问题
       this.$message({
          message: '当前网络繁忙，请您稍后再试',
          type: 'warning'
        })
        return;
      }
      //4、开启倒计时
      this.isRun = true;
      this.timer = setInterval(() => {
        this.runTime--;
        if (this.runTime === 0) {
          this.isRun = false;
          clearInterval(this.timer);
          return;
        }
      }, 1000);
    },
    //实现 找回账号
    async submit() {
      //1、邮箱符合规范、密码不为空、
      if(!RegExp.emailRight.test(this.ObjInput.email) | !RegExp.regPassWord.test(this.ObjInput.pas)) {
        this.$message({
          message: '请确认您输入的邮箱、密码是否正确',
          type: 'warning'
        })
        return;
      }
      //2、验证码符合规范  保存验证码
      let code = await this.$api.getEmailCode({data:{email:this.ObjInput.email}});
      if((code.ok) === 1) {  
        this.showCode = true;
        return;
      }
      //3、完成注册
      window.alert('恭喜您账号找回成功 请登录');
    },
    //下方按钮 登录 or 注册
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/login')
          break;
        case 2:
          this.$router.push('/register')
          break;
      }
    }
  },
  watch: {
      ObjInput: {
        // 数据变化时执行的逻辑代码
        handler(newData, oldData) {
          if (RegExp.emailRight.test(this.ObjInput.email)) {
            this.ObjInput.emailreg = true;
          } else {
            this.ObjInput.emailreg = false;
          }
        },
        deep: true,
      },
  }
}
</script>

<style lang='less'>
.el-input {
  margin-top: 20px;
}
@import "./index.less";
</style>
<template>
  <div>
    <div class="login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">系统登陆</h3>
      <p class="lian"></p>
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          type="text"
          auto-complete="off"
          placeholder="用户名"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          style="margin: 0px 0px 25px 0px"
          @keyup.enter.native="handleLogin"
        >
        </el-input>
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted, reactive } from "vue";
import asiox from "axios";
import LoginSon from "./childs/LoginSon.vue";
export default defineComponent({
  name: "Login",
   setup() {
      let ruleForm:any = reactive({
          username:"",
          password:""
      })
      async function submitForm() {
          console.log(ruleForm.username)
          console.log(ruleForm.password)
          let {username,password} = ruleForm
          // let {data} = await axios.post("/api/login",{username,password})
          // console.log(data)
      }
      return {
          ruleForm,
          submitForm
      }
  },
});
</script>
<style rel="stylesheet/scss" lang="scss">
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url("../assets/login_bg.a62d8a.jpg");
        background-size: cover;
        .lian{
          width: 100%;
          height: 1px;
          background: #ffffff;
          opacity: .8;
          margin-bottom: 30px;
        }
    }
    .title {
        margin: 0px auto 10px auto;
        text-align: center;
        color: #707070;
    }
    .login-form {
        border-radius: 6px;
        background: rgba(232,232,232, .7) ;

        width: 300px;
        padding: 25px 25px 5px 25px;
        .el-input {
            height: 38px;
            input {
                height: 38px;
            }
        }
        .input-icon {
            height: 39px;
            width: 14px;
            margin-left: 2px;
        }
    }
    .login-tip {
        font-size: 13px;
        text-align: center;
        color: #bfbfbf;
    }
    .login-code {
        width: 33%;
        height: 38px;
        float: right;
        img {
            cursor: pointer;
            vertical-align: middle;
        }
    }
    .el-login-footer {
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .login-code-img {
        height: 100vh;
    }
</style>
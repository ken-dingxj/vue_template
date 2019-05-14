<template>
  <div id="login">
    <div id="holder"></div>
    <div class="login_form">
      <div class="login_form_title">
        <span>测试管理平台</span>
      </div>
      <div class="login_form_main">
        <el-form
          id="loginForm"
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
        >
          <el-form-item prop="username">
            <el-input
              placeholder="用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
              >登录</el-button
            >
            <el-button type="primary" @click="resetForm('loginForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginAPI from '@/api/service/login.js';
import { Message } from 'element-ui';
import { validateUserName, validatePass } from '@/utils/rule';
import Waves from '@/utils/waves';
export default {
  data() {
    return {
      waves: '',
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validateUserName }],
        password: [{ validator: validatePass }]
      }
    };
  },
  mounted() {
    const vm = this;
    document.getElementById('loginForm').onkeydown = function(e) {
      if (e.keyCode == 13) {
        vm.login();
      }
    };
    this.waves = new window.Waves('#holder', {
      fps: true,
      waves: 3,
      width: 200
    });
    this.waves.animate();
  },
  destroyed() {
    this.waves.cancelAnimate(this.waves.animateID);
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          let data = {
            fuserName: this.loginForm.username,
            fpassword: this.loginForm.password
          };
          loginAPI.signin(data).then(res => {
            if (res) {
              res = res.data;
              if (res.success) {
                this.$method.setStore('token', res.data.token);
                this.$method.setStore('userId', res.data.fuserId);
                this.$method.setStore('fuserName', res.data.fuserName);
                this.$router.push({ name: 'statistics' });
              } else {
                Message.error(res.msg);
              }
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      // this.$method.setStore('token', 123);
      // this.$router.push({ name: 'index' });
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
@import '../../assets/style/mixin';
#login {
  position: relative;
  height: 100%;
  #holder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }
  .login_form {
    min-width: 300px;
    background-color: rgba(50, 76, 190, 0.4);
    position: absolute;
    top: 40%;
    left: 75%;
    border-radius: 10px;
    transform: translate(-75%, -40%);
    box-shadow: 0 0 10px rgb(86, 139, 243);
    padding: 30px;
    .login_form_title {
      font-family: 'Yuanti SC';
      font-size: 32px;
      color: #fff;
      text-align: center;
      padding: 20px 0;
    }
    .login_form_main {
      padding: 30px 10px;
      text-align: center;
      button {
        width: 46%;
        font-size: 20px;
      }
    }
  }
}
</style>

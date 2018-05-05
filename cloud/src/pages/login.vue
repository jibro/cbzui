<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/img/logo.png">
    </div>
    <div class="content">
      <div class="from">
        <h3 class="from-title">ZcCloud置车云平台</h3>
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <input v-model="username" id="username" name="username" class="form-control" type="text" autocomplete="off" placeholder="用户名"
                 maxlength="20">
        </div>
        <div class="form-group">
          <input v-model="password" id="password" name="password" class="form-control" type="password" autocomplete="off" placeholder="密码"
                 maxlength="20">
        </div>
        <div class="form-actions" style="padding-bottom: 0">
          <button @click="commit" type="submit" class="btn">
            登录
          </button>
        </div>
        <div class="create-account">
          <p style="text-align: center;color: white">输入用户名密码登录ZcCloud置车云平台</p>
        </div>
      </div>
      <div class="copyright">2012-2018 © 车置宝&nbsp;www.chezhibao.com
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    commit() {
      API.login({ username: this.username, password: this.password }).then((res) => {
        if (res.data && res.data.token) {
          window.localStorage.token = res.data.token;
          window.localStorage.userName = res.data.userName;
          let url = this.getUrlPage('url')
          if (url) {
            window.location.replace(url)
          } else {
            this.$router.push('/welcome');
          }
        }else{
          this.$toast({
            text: `登录失败`,
            timing: 1500,
            type: 'warn'
          })
        }
      })
    },
    getUrlPage (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return  unescape(r[2])
      } else {
        return null
      }
    }
  }
};
</script>

<style scoped>

  .login {
    background-color: #666;
    color: #000;
    font-family: 'Open Sans', sans-serif;
    padding: 0px !important;
    margin: 0px !important;
    font-size: 13px;
    direction: ltr;
    height: 100%;
    width: 100%;
    background-image: url(../assets/img/1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .logo {
    margin: 0 auto;
    padding: 15px;
    padding-top: 80px;
    text-align: center;

  img {
    vertical-align: middle;
  }

  }

  .content {
    background: url(../assets/img/bg-white-lock.png) repeat;
    width: 360px;
    margin: 0 auto;
    margin-bottom: 0px;
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
  }

  .from {
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  }

  .from .from-title {
    margin-bottom: 25px;
    color: white;
    font-weight: 300 !important;
    font-size: 24px;
    margin-top: 20px;
    line-height: 1.1;
  }

  h3 {
    font-weight: 300 !important;
    font-size: 24px;
    margin-top: 20px;
    line-height: 1.1;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .login .content .form-control {
    background-color: #fff;
    padding-left: 33px !important;
    font-size: 14px;
    font-weight: normal;
    color: #333333;
    border: 1px solid #e5e5e5;
    box-shadow: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    line-height: 1.428571429;
    vertical-align: middle;
    background-image: none;
  }

  .form-control {
    background-color: #fff;
    padding-left: 33px !important;
    font-size: 14px;
    font-weight: normal;
    color: #333333;
    border: 1px solid #e5e5e5;
    box-shadow: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    line-height: 1.428571429;
    vertical-align: middle;
    background-image: none;
  }

  .form-actions {
    background-color: transparent;
    clear: both;
    border: 0px;
    padding: 0px 30px 25px 30px;
    margin-left: -30px;
    margin-right: -30px;
    margin-bottom: 15px;
    float: right!important;
  }

  .btn {
    margin-top: 1px;
    color: white;
    text-shadow: none;
    background-color: #4d90fe;
    border-width: 0;
    padding: 7px 14px;
    font-size: 14px;
    outline: none !important;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    user-select: none;
  }

  .create-account {
    border-top: 1px dotted #eee;
    padding-top: 10px;
    clear: both;
  }

  .copyright {
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    color: #eee;
    font-size: 12px;
  }


</style>

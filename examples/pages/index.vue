<template>
  <div class="pg-index">
    <!-- <div class="index-container">
      <img src="../assets/img/logo.png" class="logo">
      <p><span>车置宝</span>基于vue.js的移动端UI组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
      </div>
    </div> -->
    <div class="mybox">
      <div class="header">
        <div class="yuanwrap">
          <div class="yuan yuan1"></div>
          <div class="yuan yuan2"></div>
          <div class="yuan yuan3"></div>
        </div>
        <div class="con">
          <img class="logo" src="../assets/img/chezhibao.png">
          <div class="enter">
            <router-link :to="{name: 'giud'}">ENTER</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>
<style type="text/less" lang="less">
@keyframes move {
  0%,100%{
    opacity: 0.5;
    transform: translateY(10px);
  }
  50%{
    opacity: 1;
    transform: translateY(0);
  }
}
  .pg-index {
    .mybox{
      width: 70%;
      height: 70vh;
      margin: 0 auto;
      background-color: #fff;
      margin-top: 8vh;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 4px 30px 5px rgba(223, 225, 230, 0.5);
      .header{
        height: 5vh;
        background-color: #333;
        .yuanwrap{
          height: 5vh;
          line-height: 5vh;
          margin-left: 15px;
          .yuan{
            display: inline-block;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            vertical-align: sub;
            margin-right: 5px;
          }
          .yuan1{
            background-color: #ea6262;
          }
          .yuan2{
            background-color: #dfa458;
          }
          .yuan3{
            background-color: #9dd649;
          }
        }
      }
      .con{
        .logo{
          width: 42%;
          margin: 12vh auto 0;
          display: block;
        }
        .enter{
          a{
            margin: 12vh auto 0;
            color: #fff;
            line-height: 1;
            width: 10vw;
            padding: 1.5vh 0;
            background-color: #333;
            line-height: 1;
            border-radius: 50px;
            display: block;
            text-align: center;
            animation: move 3s ease-in-out 0s infinite;
          }
        }
      }
    }
    .index-container {
      width: 960px;
      margin: 0 auto;
      text-align: center;
      padding: 15vh 0;
      .logo{
        width: 40vw;
      }
      p{
        margin-top: 8vh;
        color: #8994C6;
        font-size: 28px;
        span{
          color: #00a7ea;
        }
      }
    }
    .separate-panel{
      position: relative;
      .about{
        position: relative;
        width: 100%;
        height: 200px;
        // top: 20px;
        z-index: 9;
        // background: #fff;
        text-align: center;
        a {
          color: #fff;
          background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
          box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
          display: inline-block;
          width: 190px;
          height: 56px;
          margin: 0 35px;
          font-size: 18px;
          line-height: 56px;
          border-radius: 28px;
          transition: all .3s;
          cursor: pointer;
        }
        .btn-github{
          color: #316DE9;
          border: 1px solid #2F6EE9;
          background: #fff;
          box-shadow: none;
        }
      }
    }
  }
</style>

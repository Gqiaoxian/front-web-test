<template>
   
  
              
  
  
  
  <div class="home">
      <el-form
          label-position="right"
          label-width="100px"
          class="loginForm"
          :model="loginForm"
          ref="ruleForms"
          @submit.prevent
        >
        <el-form-item label="用户名：" prop="account" :rules="[{required:true,message:'请输入用户名',trigger:'blur'}]">
            <el-input v-model="loginForm.username" />
        </el-form-item>
  
        <el-form-item label="密码：" prop="pwd" :rules="[ {required:true,message:'请输入密码',trigger:'blur'},]">
            <el-input type="password" v-model="loginForm.password" />
        </el-form-item>
        <el-form-item label="验证码:" prop="verifyCode" :rules="[{required:true,message:'请输入验证码',trigger:'blur'},]">
            <el-row>
              <el-col :span="8"><el-input
                type="password"
                v-model="loginForm.verifyCode"
                class="inpWidth"
              /></el-col>
              <el-col :span="8" :offset="2"><img :src="this.codeImg" @click="getImg" width="200" height="29"/></el-col>
            </el-row>
        </el-form-item>
        <div style="text-align:center;margin: 1.5rem 0;">
            <button
            style="width:7rem;color: white; background-color: #B05055;border-radius: 5px;border-color: #B05055;font-size: 1.8rem;"
            @click="Submitlogin"
            >
            登 录
        </button>
          </div>
        </el-form>
    </div>-->
  </template>
  
  <script>
  // @ is an alias to /src
  //import { reactive, ref } from "vue"
  //import{useStore} from 'vuex'
  //import {useRouter} from 'vue-router'
  import axios from "axios"
  export default {
    name: 'HomeView',
    data()
    {
        return{
            codeImg: null,
            sessionid: null,
            loginForm:{
              account:'',
              pwd:'',
              verifyCode:'',
              sessionID:''
            }
        }
    },
    methods:{
      Submitlogin(){
        this.$refs['ruleForms'].validate((valid)=>{
          if(valid){
            axios({
              method: 'post',
              url: 'https://nicklorry.top:8090/fzu/login2',
              headers:{
                    'Content-type':'application/json'
              },
              data:this.loginForm
            }).then(res=> {
                console.log(res)
              });
          }
        })
      },
      getImg(){
        axios({
          method: 'get',
          url: 'https://nicklorry.top:8090/fzu/verifycodeInfo',
          headers:{
                    'Content-type':'application/json'
                  },
        }).then(res=> {
            this.sessionid=res.data.sessionId
            let imageURL=res.data.verifyCode
            console.log(imageURL)
            this.codeImg="https://nicklorry.top:8090"+imageURL
        });
      }
    },
    mounted(){
          this.getImg()
  }
  }
  </script>
  <style type="text/css">
  body{
      background: #eff9fe;}
  .container {
      width: 1280px;
      height: 100%;
      margin: 0 auto;
      position: relative;}
  /*公告*/
  .notice{
      width: 100%;
      height: 44px;
      box-shadow: 0px 0px 15px 0px rgba(76, 137, 168, 0.14);
      background: #f6fbfd;
      position: relative;}
  .notice .icon{
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);}
  .notice .title{
      padding-left: 27px;
      line-height: 44px;
      color: #528adb;
      font-size: 16px;
      position: relative;}
  .notice .title span{
      padding-left: 4px;
      font-size: 12px;
      color: #a2a2a2;}
  .notice .gd{
      width: 1000px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 90px;}
  .notice .gd:before{
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 16px;
      background: #dddee0;}
  .txtMarquee-left .bd{ padding-left:10px;}
  .txtMarquee-left .bd .tempWrap{ width:100% !important;}/* 用 !important覆盖SuperSlide自动生成的宽度，这样就可以手动控制可视宽度。 */
  .txtMarquee-left .bd ul{ overflow:hidden; zoom:1;}
  .txtMarquee-left .bd ul li{ position: relative; margin-right:40px;  float:left; height:44px; line-height:44px;  text-align:left; _display:inline; width:auto !important;white-space:nowrap;}/* 用 width:auto !important 覆盖SuperSlide自动生成的宽度，解决文字不衔接问题 */
  .txtMarquee-left .bd ul li span{ color:#999; padding-left: 16px;}
  .txtMarquee-left .bd ul li a{
      color: #666;}
  .txtMarquee-left .bd ul li:before{
      content: "";
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    width:0;
    height:0;
    border-width:5px 0 5px 5px;
    border-style:solid;
    border-color:transparent transparent transparent #bbc9db;}
  .txtMarquee-left .bd ul li:hover a, .txtMarquee-left .bd ul li:hover span{
      color: #333;}
  /*公告*/
  .banner{
      width: 100%;
      height: 502px;
      box-shadow: 0px 0px 15px 0px rgba(76, 137, 168, 0.14);
      position: relative;
      overflow: hidden;}
  .banner .banner-img{
      position: absolute;
      left: 50%;
      margin-left: -960px;
      top: 0;
      z-index: -1;}
  .loginBox{
      width: 446px;
      height: 404px;
      position: absolute;
      right: 20px;
      top: 60px;
      background: #fff;
      box-shadow: 4px 6px 11px 0px rgba(65, 131, 171, 0.33);
       filter:alpha(opacity=90); opacity:0.90;  -moz-opacity:0.90;-khtml-opacity: 0.90;}
  .loginBox .box{
      padding: 26px 30px 34px;}
  .loginBox .box .userLogin{
      font-size: 20px;
      color: #1369c0;
      width: 100%;
      height: 30px;
      border-bottom: 2px solid #dddddd;
      position: relative;}
  .loginBox .box .userLogin .line{
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 200px;
      height: 2px;
      background: #1369c0;
      z-index: 999;}
  .loginBox .box form{
      margin-top: 5px;
      padding: 0 4px;}
  .loginBox .box .inputBox{
      height: 60px;
      border-bottom: 1px solid #dddddd;
      position: relative;}
  .loginBox .box .inputBox .icon{
      position: absolute;
      left: 4px;
      top: 50%;
      transform: translateY(-50%);}
  .loginBox .box .inputBox .icon1{
      width: 19px;
      height: 19px;}
  .loginBox .box .inputBox .icon2{
      width: 17px;
      height: 21px;}
  .loginBox .box .inputBox .icon3{
      width: 15px;
      height: 19px;}
  .loginBox .box .inputBox .input-same{
      width: 254px;
      height: 40px;
      margin-left: 40px;
      margin-top: 10px;
      font-size: 16px;}
  .loginBox .box .inputBox .input-yzm{
      width: 125px;
      height: 40px;
      margin-left: 40px;
      margin-top: 10px;
      font-size: 16px;}
  .loginBox .box .inputBox .refreshBtn{
      width: 24px;
      height: 26px;
      position: absolute;
      right: 27px;
      top: 50%;
      transform: translateY(-50%);}
  .loginBox .box .inputBox .yzm_refresh {
      display: block;
      margin-right: 20px;
      float: right;
      zoom: 1;
      width: 38px;
      height: 34px;
      margin-top: 8px;
      border: 0;
      outline: none;
      background: url(dfiles/11251/themes/46902/default_46902/jwch/images/refresh.jpg) no-repeat center;} 
  .loginBox .box .inputBox .yzmIMG{
      width: 92px;
      height: 34px;
      overflow: hidden;
      position: absolute;
      right: 70px;
      top: 50%;
      transform: translateY(-50%);}
  .loginBox .box .inputBox .yzmIMG img{
      width: 100%;
      height: 100%;}
  input{
      color: #333;}
  input::-webkit-input-placeholder{
    color: #aaaaaa;}
  input::-moz-placeholder{
    color: #aaaaaa;}
  input:-ms-input-placeholder{  
    color: #aaaaaa;}
  .loginBox .box .forgetBox{
      height: 70px;
      position: relative;}
  .loginBox .box .forgetBox .gxk{
      width: 20px;
      height: 20px;
      border: 1px solid #3498db;
      float: left;
      margin-top: 18px;
      vertical-align: top;}
  .loginBox .box .forgetBox .text{
      padding-top: 19px;}
  .loginBox .box .forgetBox .fl{
      padding-left: 4px;
      font-size: 18px;
      color: #999999;
      line-height: 1;}
  .loginBox .box .forgetBox a{
      color: #333;
      font-size: 18px;
      color: #666;}
  .loginBox .box .forgetBox a:hover{
      color: #333;}
  .loginBox .box .btnBox .btn{
      width: 100%;
      height: 56px;
      font-size: 20px;
      color: #fff;
      outline: none;
      border: 0;
      cursor: pointer;}
  .loginBox .box .btnBox .fl{
      background: #528adb;}
  .loginBox .box .btnBox .fr{
      background: #ff8201;}
  
  .loginBox1 .box .forgetBox a:hover{
      color: #333;}
  .loginBox1 .box .btnBox .btn{
      width: 300px;
      height: 56px;
      font-size: 20px;
      color: #fff;
      outline: none;
      border: 0;
      cursor: pointer;}
  .loginBox1 .box .btnBox .fl{
      background: #528adb;}
  .loginBox1 .box .btnBox .fr{
      background: #ff8201;}
  
  /*底部*/
  .tabItem{
      width: 1250px;
      height: 226px;
      background-color: #ffffff;
      box-shadow: 0px 0px 15px 0px rgba(76, 137, 168, 0.14);
      border-radius: 10px;
      margin-top: 40px;
      margin-bottom: 55px;
      position: relative;}
  .tabItem .tab{
      width: 100%;
      height: 50%;
      position: relative;}
  .tabItem .tab:after{
      content: ""; 
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      height: 1px;
      background: #eeeeee;}
  .tabItem .lastTa:after{
      height: 0;}
  .tabItem .tab a{
      display: block;
      float: left;
      width: 25%;
      height: 100%;
      position: relative;}
  .tabItem .tab a img{
      width: 76px;
      height: 76px;
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);}
  .tabItem .tab a p{
      padding-left: 120px;
      padding-top: 30px;
      color: #000;
      font-size: 20px;}
  .tabItem .tab a p span{
      white-space: nowrap;
      font-size: 15px;
      color: #969696;}
  .page__ft .text{
      text-align: center;
      font-size: 20px;
      color: #6b7b83;
      padding-bottom: 12px;} 
  .containerlogin{
      width: 300px;
      height: 100%;
      position: relative;}
  .containermemo{
      width: 600px;
      height: 100%;
      position: relative;}
  .btnBox{margin-top:20px;}
  .fl{float:left;}
  </style>
  
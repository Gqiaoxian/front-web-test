<template>    
    <div style="height:8%;margin: 0;padding: 0;">
      <topBar v-bind:name="$route.name"></topBar>
    </div>
    <div style="margin:0;padding:0;height: 10%;">
    <bbsTopBar></bbsTopBar></div>
    <div class="bbshomepage">
        <!--左侧栏-->
        <div class="bbshomel">
            <div class="bbshomeltop" v-if="!$store.state.isLogin">
              <div style="font-family: yuanquan;font-size:3em;color:#B05055;margin:0.3em 0.3em 0.1em 0.3em">福</div>
              <div style="font-size:1.3em;color:#B05055;">欢迎来到校友论坛!</div>
              <div>
                <el-button  @click="login">登录</el-button>
              </div>
            </div>
            <div class="bbshomeltop" v-if="$store.state.isLogin">
              <!--头像和登出按钮-->
              <div style="display:flex;justify-content:space-between;width:100%">
                <div style="margin:0.5rem 0 0 0.7rem"><img :src=$store.state.picture width="100"/></div>
                <div style="margin:4rem 0.3rem 0 0">
                  <button @click="loginOut" style="width:6rem;color:#B05055;background-color:#EDE0D7;font-size:1.5rem;border: none;border-radius: 20px;padding:0.3rem 0.5rem;cursor:pointer">
                  登出</button>
                </div>
              </div>
              <!--班级搜索和个人主页按钮-->
              <div style="display:flex;justify-content: space-around;">
                <div style="text-align:center;margin:1rem 1rem 0.8rem 0;">
                <botton style="width:8rem;color: #B05055; background-color: #EDE0D7;border-radius: 5px;border-color: #B05055;font-size: 1.4rem;padding:0.2rem 0.5rem;border-radius: 20px;"
                @click="toPersonal">个人主页</botton>
                </div>
                <div style="text-align:center;margin:1rem 0 0.5rem 0;">
                <botton style="width:8rem;color: #B05055; background-color: #EDE0D7;border-radius: 5px;border-color: #B05055;font-size: 1.4rem;padding:0.2rem 0.5rem;border-radius: 20px;"
                @click="toclass">班级搜索</botton></div>
              </div>
          </div>
          <div class="bbshomelmiddle" >
            <button style="width:100%;height:100%;background-color:rgba(255, 255, 255, 0.4);border: none;border-radius: 25px;font-size: 1.3em;color: #B05055;cursor:pointer" @click="writearticle">
              <el-icon><Document /></el-icon>发帖</button>
          </div>
          <div class="bbshomebottom" >
            <el-icon style="color:#B05055;font-size:1.3em"><BellFilled /></el-icon>
            <span style="font-size:1.5em;color:#B05055">论坛公告</span>
            <el-divider style="margin:0;"></el-divider>
            <p style="word-break:break-all">
              &ensp;&ensp;金秋十月，丹桂飘香，在这美好的日子里，计算机与大数据学院40周年院庆将于10月24-25日隆重举行，值此院庆来临之际，开放论坛以供广大师生、校友进行交流！
            </p>
          </div>
          </div>
          <!--右侧栏-->
          <div class="bbshomeright">
            <div style="width:102%;height:100%;overflow-y:scroll"><forumBox></forumBox></div>
          </div>
      </div>
</template>

<script>
import {Document,BellFilled} from'@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import{useStore} from 'vuex'
import {  inject } from 'vue'
import axios from "axios"
import topBar from '../../components/topBar.vue'
import bbsTopBar from '../../components/bbsTopBar.vue'
import { ElMessage } from 'element-plus'
import forumBox from '../../components/forumBox.vue';
//import registerWin from '../../components/registerWin.vue';
//import loginWin from '../../components/loginWin.vue';
    export default {
        name: 'home_page',
        components:{
          topBar,
          bbsTopBar,
          Document,
          BellFilled,
          forumBox
          //loginWin,
          //registerWin
        },
        data(){
          return{
            Img: ''
          }
          
        },
        setup(){
          const router = useRouter()
          const store = useStore()
          const reload = inject('reload')
          const login=()=>{
            router.push({path:"/login"})
          }
          const toPersonal =()=>{
            router.push({path:"/about"})
          }
          const toclass=()=>{
            router.push({path:"/search"})
          }
          const loginOut=()=>{
            axios({
              method:'post',
              url: 'http://www.fzuprrxd.work/bbs/logout/',
              data:{},
              withCredentials:true
            }).then(res=>{
              store.state.isLogin = false;
              store.state.username = '';
              store.state.picture = '';
              store.state.useremail = '';
              reload()
              console.log(res)
            })
          }
          const writearticle=()=>{
            if(!store.state.isLogin)
            {
              ElMessage("还未登录，请先登录")
            }
            else{
              router.push({path:"/write"})
            }
          }
          return{
            login,
            loginOut,
            toPersonal,
            toclass,
            writearticle
          }
        },
         
          
        methods:{
          /*showLoginModle(){
            this.$router.push({name:'login'})
          }*/
         
        },
        computed:{
          msg(){
            return this.$store.state.loginVisible;
          }
        },
    }
</script>
<style scoped>
@font-face{
  font-family: yuanquan;
  src: url('../../assets/yuanquan.ttf')
}
.bbshomepage{
  height: 82%;
  display:flex;
  justify-content:space-around
}
.bbshomel{
  height: 100%;
  width: 25%;
  padding: 0;
  margin: 0;
  display: block;
  float: left;
  min-width: 300px;
}
.bbshomeltop{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.4);
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  height:35%;
  margin: 2em 2em 1em 2em;

}
.bbshomelmiddle{
  height:10%;
  margin:0 1.8em 1em 1.8em;
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  display: flex;
  justify-content:center;
  align-items: center;
  
}
.bbshomebottom{
  height: auto;
  margin: 0 2em 1em 2em;
  background: rgba(255,255,255,0.4);
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  padding: 0.5em 1em;
}

.el-button{
  color:white;
  background-color: #B05055;
  position: relative;
  top:50%
}
.el-button:hover{
  background-color:#ac3d42;
  color: white;
}
.rightArticle{
  height:auto;
  margin: 2em 2em 1em 2em;
  background-color: rgba(255,255,255,0.4);
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
}

.bbshomeright {
  height: auto;
  width: 73%;
  padding: 0 5px;
  margin: 2rem 0 0 0;
  display: block;
  float: left;
  overflow: hidden;
  position: relative;
  /* flex-direction: row; */
  min-width: 300px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
}
</style>


<!--<el-dropdown type="primary" >
              <el-icon style="color: #B05055;height: 2em;width: 2em;font-size: 2em;"><Compass /></el-icon>

              <template #dropdown>
                <el-dropdown-menu class="header-drop" >
                  <el-dropdown-item>首页</el-dropdown-item>
                  <el-dropdown-item>院庆日程</el-dropdown-item>
                  <el-dropdown-item>大事记</el-dropdown-item>
                  <el-dropdown-item>院庆祝福</el-dropdown-item>
                  <el-dropdown-item>校友风采</el-dropdown-item>
                  <el-dropdown-item>福友圈</el-dropdown-item>
                  <el-dropdown-item>院元宇宙</el-dropdown-item>
                </el-dropdown-menu>
              </template>
           </el-dropdown>-->
<template>
  <div style="display:flex;align-items: center;justify-content: center;">
 <!--<el-dialog v-model="$store.state.loginvisible" @close="handleOk" :width="'500px'" >--> 
  
  <div style="width:500px;height:auto;background-color: rgba(255,255,255,0.5);margin-top: 3rem;text-align:center;padding:0 5rem;">
    <h1 >登 录</h1>
      <el-form
        label-position="right"
        label-width="100px"
        class="loginForm"
        :model="loginForm"
        ref="ruleForms"
        @submit.prevent
      >
      <el-form-item label="用户名：" prop="username" :rules="[{required:true,message:'请输入用户名',trigger:'blur'}]">
          <el-input v-model="loginForm.username" />
      </el-form-item>

      <el-form-item label="密码：" prop="password" :rules="[ {required:true,message:'请输入密码',trigger:'blur'},]">
          <el-input type="password" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item label="验证码:" prop="code" :rules="[{required:true,message:'请输入验证码',trigger:'blur'},]">
          <el-row>
            <el-col :span="8"><el-input
              type="password"
              v-model="loginForm.code"
              class="inpWidth"
            /></el-col>
            <el-col :span="8" :offset="2"><img :src="this.codeImg" @click="getImg" width="200" height="29"/></el-col>
          </el-row>
      </el-form-item>
        <div style="text-align:center;margin-bottom: 1em;">
          还没有账号？<button @click="register" style="color: #B05055; background-color: none;border:none;font-size: 1rem;">
            注册
          </button>
          <!--<registerWin v-if="registerVisible" v-modle:visible="registerVisible"></registerWin>-->
        </div >
        <div style="text-align:center;margin: 1.5rem 0;">
          <button
          style="width:7rem;color: white; background-color: #B05055;border-radius: 5px;border-color: #B05055;font-size: 1.8rem;"
          @click="Submitlogin"
          >
          登 录
      </button>
        </div>
      </el-form></div>
 
  </div>
</template>
<script>
import { reactive, ref } from "vue"
import{useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { getCodeImg}  from '@/api/index'
//import registerWin from '../../components/registerWin.vue'
import axios from "axios"
import { ElMessage } from 'element-plus'
export default {
name:"loginWin",
components:{
        //registerWin,
      },
  data()
  {
      return{
          codeImg: null,
          registerVisible:false
      }
  },
 setup(){
      const store = useStore()
      const router = useRouter()
      const ruleForms = ref(null)
      
      const loginForm = reactive({
        //loginFrom:
        //{
        username:'',
        password:'',
        code:''
      //},
        /*rules :{
            username:[
             {required:true,message:'请输入用户名',trigger:'blur'}
            ],
            password:[
              {required:true,message:'请输入密码',trigger:'blur'},
            ],
            code:[
            {required:true,message:'请输入验证码',trigger:'blur'},
            ]
        }*/
      })

      const Submitlogin = () =>
      {
          console.log(loginForm)
          
          ruleForms.value.validate((valid) =>{
          if(valid){
            /*login({username:"user001",password:"123"})
            .then(res=>{
              router.push({path:"/"})
              console.log(res)
            })*/
            axios({
              method:'post',
              url: 'http://www.fzuprrxd.work/bbs/login/',
              data :loginForm,
              
              headers:{
                'Content-type':'multipart/form-data'
              },
              withCredentials:true
            }).then((res)=>{
              if (res.status === 200) {
                if (res.data) {
                  console.log(res)
                  //如果是code是1000，则登录成功，跳转到主页面
                  if (res.data.code === 1000) {
                    /*localStorage.clear()
                    localStorage.setItem('info',1)
                    localStorage['flag'] = 1
                    sessionStorage.clear()
                    sessionStorage.setItem('username',JSON.stringify(res.data))
                    sessionStorage['token']=JSON.stringify(res.data.token)*/
                    store.state.isLogin = true;
                    store.state.picture = res.data.data.avatar;
                    store.state.username = res.data.data.username;
                    store.state.useremail = res.data.data.email;
                    console.log(store.state.username,store.state.useremail)
                    router.push({path:"/"})
                    // 如果code是2000，
                  } else if(res.data.code === 2000 || res.data.code === 3000 ) {
                    // window.location.href = response.data.data.target;
                    const msg = res.data.msg;
                    store.state.isLogin = false;
                    store.state.loginVisible = true;
                    ElMessage(msg);
                    router.push({path:"/login"});
                  } 
                  else{
                    throw res.data;
                  }
                  } else {
                  throw res;
                  }
              }else {
                // 响应码不是200则返回一个失败的Promise
                router.push({path:"/login"})
                return Promise.reject(res);
              }
            })
          } else{
            router.push({path:"/login"})
            console.error(loginForm);
          }
        })
      };
      const register=()=>{
        router.push({path:"/register"})
  }
    return{
      loginForm,
      //...rules,
      //handleOk,
      ruleForms,
      Submitlogin,
      register
    }
},
methods:{
  getImg(){
    getCodeImg() 
          .then(res=>{
            console.log(res)
            this.codeImg = res.data.verifyCodeUrl
          })
  },
  /*register(){
    this.$store.state.registerVisible = true;
  }*/
  /*Submitlogin()
      {
         let _this = this;
         if(this.loginForm.username === '')
         {
          ElMessage('用户名不能为空')
         }
         else if(this.loginForm.password === '')
         {
          ElMessage('密码不能为空')
         }
         else if(this.loginForm.code === '')
         {
          ElMessage('验证码不能为空')
         }
         else{
          login(_this.loginFrom)
         }
      },
      register(){
        this.router.push({path:"/register"})
  }*/
},
mounted(){
        this.getImg()
}
}
</script>
<style scoped>
button{
cursor:pointer;
}
</style>
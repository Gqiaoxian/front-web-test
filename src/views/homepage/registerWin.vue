<template>
  <div style="display:flex;align-items: center;justify-content: center;">
   <!--<el-dialog v-modle:visible="registerVisible" @close="handleOk" :width="'500px'" >-->
     <div style="width:500px;height:auto;background-color: rgba(255,255,255,0.5);margin-top: 3em;text-align: center;padding:0 5rem">
      <h1 >注 册</h1>
         <el-form
         label-position="right"
         label-width="100px"
         class="registerForm"
         :rules="rules"
         :model="registerForm"
         ref="ruleFormRef"
         @submit.prevent
       >
         <el-form-item label="用户名：" prop="username">
           <el-input v-model="registerForm.username" />
         </el-form-item>
         <!--<el-form-item label="上传头像: " >
          <el-input v-model="registerForm.avatar"></el-input>
        <el-upload
          class="avatar-uploader"
          action="#"
          ref="upload"
          :http-request="httprequest"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="hanchange"
          accept="image/jpg,image/jpeg,image/png"
          >
          <img v-if="timer.imgURL" :src="timer.imgURL" class="avatar">
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
         </el-form-item>-->
         <el-form-item label="密码：" prop="password">
           <el-input type="password" v-model="registerForm.password" />
         </el-form-item>
         <el-form-item label="确认密码：" prop="confirm_password">
           <el-input
             type="password"
             v-model="registerForm.confirm_password"
           />
         </el-form-item>
         <el-form-item label="邮箱：" prop="email">
           <el-input v-model="registerForm.email" />
         </el-form-item>
         <el-form-item label="验证码：" prop="email_code">
          <el-row >
              <el-col :span="18"><el-input
                type="password"
                v-model="registerForm.email_code"
                class="inpWidth"
              /></el-col>
              <el-col :span="4" :offset="2">
                <button v-if="timer.isDisable" @click="getCode(ruleFormRef)" style="width:100px;height:100%;color: #B05055; background-color: #EDE0D7;border: none;cursor:pointer" >
                获取验证码
              </button>
              <button v-if="!timer.isDisable" style="width:100px;height:100%;color: #B05055; background-color: #EDE0D7;border: none;font-size:0.2rem">{{timer.statusMsg}}</button>
            </el-col>
            
            </el-row>
         </el-form-item>
          <div style="text-align:center;margin: 1.5rem 0;">
          <button
            style="width:7rem;color: white; background-color: #B05055;border-radius: 5px;border-color: #B05055;font-size: 1.8rem;"
            @click="submitForm(ruleFormRef)"
          >
            注 册
          </button>
        </div>
       </el-form>
     </div>
      
   <!--</el-dialog>-->
  </div>
</template>
<script >
import { reactive,ref} from "vue"
//import{useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from "axios"
import { ElMessage } from 'element-plus'
//import {Plus} from'@element-plus/icons-vue'
   export default{
     name:'registerWin',
     components:{
      //Plus,
     // Delete,
     // ZoomIn,
     },
     data(){
      return{
        uploadBoolean:false,
        imageUrl:'',
        oploadDialogVisible:false,
        //statusMsg:'',
        //isDisable:false,
        /*registerForm : {
          avatar:'',
          username:'',
          email:'',
          password:'',
          confirm_password:'',
          email_code:'',
        },
        rules:{
          avatar:[{required:true,message:"头像不能为空！",trigger:"blur"}],
          username:[{required:true,message:"用户名不能为空！",trigger:"blur"}],
          email:[{required:true,message:"邮箱不能为空！",trigger:"blur"},
                 {pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,message:"邮箱不合法！",trigger:'blur'}],
          password:[{required:true,message:"密码不能为空！",trigger:"blur"},
                  { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, message: '密码必须同时包含数字与字母,且长度为 6-20位',trigger:"blur"}],
          confirm_password:[{required:true,message:"确认密码",trigger:"blur"},
                  { validator: (rule, value, callback) => {
                      if (value === '') {
                        callback(new Error('请再次输入密码'))
                      } else if (value !== this.ruleForm.pwd) {
                        callback(new Error('两次输入密码不一致'))
                      } else {
                        callback()
                      }
                    },
                    trigger: 'blur'}],
          email_code:[{required:true,message:"验证码不能为空！",trigger:"blur"}]        
        }*/
      }
     },
     //props: ['registerVisible'],
       methods:{
        /*getCode(){
          const self = this
          let emailPass 
          (this.$refs['registerForm']).validateField('email',(valid)=>{
            emailPass = valid
          })
        },*/
       /* handleAvatarSuccess(file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                if(this.imageUrl){
                    this.uploadBoolean = true
                }
            },*/
       /* beforeAvatarUpload(file) {
            let types = ['image/jpeg', 'image/jpg', 'image/png'];
            const isJPG = types.includes(file.type);
            const isLt2M = file.size / 1024 / 1024 < 20
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG、JPEG、PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 20MB!');
            }
            return isJPG && isLt2M;
        },*/
        /*oploadImgPre(){
            this.oploadDialogVisible = true
        },
        oploadImgDel(){
                this.imageUrl = ''
                let _this= this
                setTimeout(function(){
                    console.log(_this)
                    _this.uploadBoolean = false
                },1000)
            },*/

       },
       setup(){
       // const imageUrl = ref('')
       const router = useRouter()
        const ruleFormRef = ref('')
        const registerForm = reactive({
          avatar:"",
          username:'',
          email:'',
          password:'',
          confirm_password:'',
          email_code:'',
        })
       /*const handleAvatarSuccess=(file) =>{
                registerForm.avatar = file.raw;
                timer.imageUrl = URL.createObjectURL(file.raw);
                if(timer.imageUrl){
                    timer.uploadBoolean = true
                }
            }
        const oploadImgPre=()=>{
            timer.oploadDialogVisible = true
        }
        const oploadImgDel=()=>{
                timer.imageUrl = ''
                setTimeout(function(){
                    timer.uploadBoolean = false
                },1000)
            }*/
            
           /* const httprequest=(param)=>{
      //拷贝图片到表单数据之中
              registerForm.avatar=param.file;
              console.log(registerForm.avatar);
            }
            const hanchange=(file)=>{
        //显示图片
            timer.imgURL= URL.createObjectURL(file.raw);
          }*/


        const checkEmail = (rule,value,callback) =>{
            const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
            if(regEmail.test(value)){
                //合法的邮箱
               callback()
            }
            callback(new Error("请输入合法的邮箱"))
        }
       const validateConfirm = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error("确认密码不能为空"))
            }else if(value !== registerForm.password){
                callback(new Error("两次输入的密码不一致"))
            }else {
                callback()
            }
        }
        /*const checkpassword=(rule,value,callback) =>{
          const regPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
            if(regPassword.test(value)){
                //合法的邮箱
               callback()
            }
            callback(new Error("密码必须同时包含数字与字母,且长度为 6-20位"))
        }*/

        const rules ={
          //avatar:[{required:true,message:"头像不能为空！",trigger:"blur"}],
          username:[{required:true,message:"用户名不能为空！",trigger:"blur"}],
          email:[{required:true,message:"邮箱不能为空！",trigger:"blur"},
                 {validator:checkEmail,trigger:'blur'}],
          password:[{required:true,message:"密码不能为空！",trigger:"blur"},
                    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, message: '密码必须同时包含数字与字母,且长度为 6-20位',trigger:"blur"}],
          confirm_password:[{validator:validateConfirm,trigger:"blur"}],
          email_code:[{required:true,message:"验证码不能为空！",trigger:"blur"}]   
        }
        //const upload = ref()

        const submitForm =(formE1)=>{
           if(!formE1){
            return;
           }
           formE1.validate((valid) =>{
            if(valid){
             // upload.value.submit()
             // console.log(registerForm.avatar)
              //let formdata = new FormData()
              //formdata.append("avatar",registerForm.avatar)
              //formdata.append("username",registerForm.username)
              //formdata.append("password",registerForm.password)
              //formdata.append("email",registerForm.email)
             //formdata.append("confirm_password",registerForm.confirm_password)
             //formdata.append("email_code",registerForm.email_code)
              //console.log(formdata.get("avatar"))
              axios({
                method:'post',
                url:'http://www.fzuprrxd.work/bbs/register/',
                data:registerForm,
                headers:{
                  'Content-type':'multipart/form-data'
                },
                withCredentials:true
              }).then(res=>{
                console.log(res)
                if(res.status === 200){
                  if(res.data){
                    if(res.data.code === 1000){
                     console.log(res)
                     ElMessage("注册成功！")
                     router.push({path:"/login"})
                    }
                    else{
                      console.log(res)
                      const msg = res.data.msg
                      ElMessage(msg)
                  }
                }
                else{
                  timer.isDisable = true
                  timer.statusMsg = ''
                }
              }}).catch(err =>{
                timer.isDisable = true
                timer.statusMsg = ''
                console.log(err.response.data.message)
              })
            }
           })
        }
        const timer = reactive({
          statusMsg : '',
          isDisable : true,
         // imgURL:"",
         // img:"",
        })
        
        
        const getCode=()=>{
          //formE1.validateField('email',(valid)=>{
            const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
            if(regEmail.test(registerForm.email)){
              console.log(registerForm.email)
              axios({
                method:'post',
                url:'http://www.fzuprrxd.work/bbs/get_register_code/',
                data:{
                  email: registerForm.email
                },
                headers:{
                  'Content-type':'multipart/form-data'
                },
                withCredentials:true
              }).then(res=>{
                console.log(res)
                if(res.status === 200){
                  if(res.data){
                    if(res.data.code === 1000){
                      let count = 60
                      timer.isDisable = false
                      timer.statusMsg = count +'秒后重新发送'
                      //console.log(isDisable,statusMsg)
                      count = count -1
                      let timerid = window.setInterval(function(){
                        timer.statusMsg = count +'秒后重新发送'
                        count = count - 1
                        if(count <= 0){
                          console.log('clear' + timerid)
                          window.clearInterval(timerid)
                          timer.isDisable = true
                          timer.statusMsg = ''
                        }
                      },1000)
                    }
                  }
                }
                else{
                  timer.isDisable = true
                  timer.statusMsg = ''
                }
              }).catch(err =>{
                timer.isDisable = true
                timer.statusMsg = ''
                console.log(err.response.data.message)
              })
            }
        }
        /*const onfilechange= (e)=> { //获取到图片文件
          var files = e.target.files;

        if (!files.length)return;
            registerForm.avatar = files[0];
            console.log(files[0]);
        }
        /*const handleAvatarSuccess = (
          response,
          uploadFile
        ) => {
          imageUrl.value = URL.createObjectURL(uploadFile.raw!)
        }

        const beforeAvatarUpload= (rawFile) => {
          if (rawFile.type !== 'image/png' ) {
            ElMessage.error('上传头像的图片必须是png格式！')
          } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('图片不可以超过2MB！')
          }
        }*/
        return{
       // imageUrl,
         registerForm,
         ruleFormRef,
         rules,
         timer,
        // upload,
         //onfilechange,
         submitForm,
         getCode,
        // httprequest,
        // hanchange
         //oploadImgPre,
         //oploadImgDel,
         //handleAvatarSuccess
        //beforeAvatarUpload,
        //handleAvatarSuccess
       }
    }  
}
</script>
<style scoped>
button{
  cursor:pointer;
}

.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  border:1px solid brown;
  font-size: 28px;
  color: #7a8088;
  width:7rem;
  height: 7rem;
  text-align: center;
}
.avatar {
width: 7rem;
height:7rem;
display: block;
}
</style>
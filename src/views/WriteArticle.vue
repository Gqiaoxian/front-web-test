<template>
    <div style="height:100%">
        <div >
            <topBar name="福友圈"></topBar>
        </div>
        <div style="height:10%;margin:0;padding:0;">
            <bbsTopBar></bbsTopBar>
        </div>
        <div class="Body">
            <div class="container">
                <div class="title">
                    发布帖子 
                </div>
                <div style="text-align:center">
                    <el-button style="margin:0.6rem 1.5rem 0 0" @click="submitArticle('articleForm')">发布</el-button>
                </div> 
                <hr>
                <el-form 
                    :model="articleForm"
                    ref="ruleForms">
                    <el-form-item prop="title" :rules="[{required:true,message:'标题不可为空',trigger:'blur'}]">
                        <el-input 
                            class="input_title"
                            type="text" 
                            v-model="articleForm.title" 
                            placeholder="请输入标题" />
                    </el-form-item>
                </el-form>
                <el-form 
                    :model="articleForm">
                    <el-form-item prop="content" :rules="[{required:true,message:'内容不能为空',trigger:'blur'}]">
                        <el-input 
                            class="input_content"
                            type="textarea"
                            resize="none"
                            :rows="12"
                            v-model="articleForm.content" 
                            placeholder="请输入内容" />
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script scoped>
import topBar from '../components/topBar.vue'
import bbsTopBar from '../components/bbsTopBar.vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
import { reactive, ref } from "vue"
import { ElMessage } from 'element-plus'

export default {
    name: 'writeArticle',
    components: {
        topBar,
        bbsTopBar
    },
    setup(){
        const router = useRouter()
        const ruleForms = ref(null)
        const articleForm =reactive({
                title: "",
                content:"",
            }) 
        const submitArticle =()=>{
            console.log(articleForm);
            ruleForms.value.validate((valid=>{
                if(valid){
                    axios({
                        method:'post',
                        url: 'http://www.fzuprrxd.work/bbs/add_article/',
                        data :articleForm,
                        headers:{
                        'Content-type':'multipart/form-data'
                        },
                        withCredentials:true
                    }).then(res=>{
                        ElMessage('发布成功')
                        if (res.status === 200){
                            console.log(res)
                            router.push({path:"/"})
                        }
                        // else{
                            
                        // }
                    })
                }
            }))
        }
        return{
            ruleForms,
            articleForm,
            submitArticle
        }
    }
}
</script>


<style>
.Body {
    background: #EDE0D7;
    height: 82%;
    padding: 30px;
}
.container {
    border-radius: 30px;
    background-color: rgba(255,255,255,0.59);
    height: 90%;
    padding: 25px;
    box-shadow: 4px 4px 10px rgb(135, 133, 133);
}
.container .title {
    font-size: 37px;
    font-weight: normal;
    text-align: center;
    height: 12%;
    width: 30%;
    display: block;
    float: left;
}
.container hr{
    margin-top: 4rem;
}
.container .el-button{
    display: block;
    float: right;
    width: 10%;
    margin-top: 5%;
    margin-right: 6%;
    background-color: #980F17;
    border-color: #980F17;
    color: aliceblue;
    transition: all 0.3s;
    box-shadow: 4px 4px 5px rgb(135, 133, 133);
}
.container .el-button:hover{
    transform: scale(1.05);
}
.container .input_title{
    margin-top: 2%;
    height: 70%;
    width: 91%;
    margin-left: 3%;
    background-color: #ffffff;
    border-radius: 5px;
}
.container .input_title .el-input{
    height: 100%;
}
.container .input_content{
    margin-top: 0.2rem;
    height: 82%;
    width: 91%;
    margin-left: 3%;
    border-radius: 5px;
}
.container .input_content .el-input{
    height: 100%;
}
</style>
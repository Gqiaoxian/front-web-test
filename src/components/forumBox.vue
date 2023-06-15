<template>
  <el-tabs v-model="activeName"
      @tab-click="handleClick" 
  >
  <el-tab-pane label="最新贴子" name="first" >
      <div class="box" v-for="article in list" v-bind:key="article.id">

        <div class="boxTitle">
          <!-- <div style="float:left"> -->
            <img :src=article.avatar alt=""
              style="height: 40px;
                    width: 40px;" 
                    />
          <!-- </div> -->
          <!-- <div style="float:left"> -->
            <h3>
              {{article.username}}</h3>
            <h3>
              {{article.create_time}}
            </h3>
          <!-- </div> -->
          <!-- <h3>{{item.name}}</h3>
          <h3>{{item.date}}</h3> -->
        </div>

        <div class="boxBodyTle">
          <a class="pp1" :href=article.article_url>
            {{ article.title }}
          </a>
          <!-- <p1 class="pp1">{{item.Btitle}}</p1> -->
        </div>
        <div class="boxBodyCnt">
          <p2 class="pp2">
            {{article.desc}}
          </p2>
          <!-- <p2 class="pp2">{{item.Btext}}</p2> -->
        </div>
        <div class="boxBodyCom">
          <img class="Zan" src="../assets/点赞.png" alt=""
            style="height: 20px;
                   width: 20px;"
                   >
          <h3 class="ZanCnt">({{article.up_num}})</h3>
          <a class="ReCom" :href=article.article_url>回复</a>
          <img class="Re" src="../assets/回复.png" alt=""
            style="height:20px;
                   width: 20px;"
                   >
        </div>
        
        <div class="boxLine">
          <span style="white-space:pre"></span>
          <span class="line"></span>
        </div>
      <div class="boxLine">
        <span style="white-space:pre"></span>
        <span class="line" 
          style="visibility:hidden">
        </span>
      </div>
    </div>
  </el-tab-pane>


  <el-tab-pane label="我的贴子" name="second" @tab-click="myarticle">
    <div v-if="!$store.state.isLogin" style="text-align:center;color:#B05055;font-size:1.5rem;margin-top:8rem;">还未登录，请登录！</div>
    <div class="box" v-for="article in list2" v-bind:key="article.id ">

    <div class="boxTitle">
        <img :src=article.avatar alt=""
          style="height: 40px;
                width: 40px;" 
                >
        <h3>
          {{article.username}}</h3>
        <h3>
          {{article.create_time}}
        </h3>

    </div>

    <div class="boxBodyTle">
      <a class="pp1" :href=article.article_url>
        {{ article.title }}
      </a>
    </div>
    <div class="boxBodyCnt">
      <p2 class="pp2">
        {{article.desc}}
      </p2>
    </div>
    <div class="boxBodyCom">
      <img class="Zan" src="../assets/点赞.png" alt=""
        style="height: 20px;
              width: 20px;"
              >
      <h3 class="ZanCnt">({{article.up_num}})</h3>
      <a class="ReCom" :href=article.article_url>回复</a>
      <img class="Re" src="../assets/回复.png" alt=""
        style="height:20px;
              width: 20px;"
              >
        </div>

    <div class="boxLine">
      <span style="white-space:pre"></span>
      <span class="line"></span>
    </div>

    <div class="boxLine">
    <span style="white-space:pre"></span>
    <span class="line" 
      style="visibility:hidden">
    </span>
    </div>
    </div>

   
  </el-tab-pane>


  <el-tab-pane label="我的回复" name="third" @click="mycommit">
    <div v-if="!$store.state.isLogin" style="text-align:center;color:#B05055;font-size:1.5rem;margin-top:8rem;">还未登录，请登录！</div>
    <div class="box" v-for="article in myReplyList" v-bind:key="article.id">

      <div class="boxTitle">
        <img :src=article.avatar alt=""
             style="height:40px;
                   width: 40px;"
        >
        <h3>
          <b>{{article.comment_user}}</b> 回复 <a :href=article.article_url><b>{{article.article_title}} </b></a>   {{article.create_time}}
        </h3>

      </div>
      <div class="boxBodyTle">
        
      </div>
      <div class="boxBodyCnt">
        <p2 class="pp2">
          {{article.comment_content}}
        </p2>
      </div>
      <!-- <div class="boxBodyCom">
        <img class="Zan" src="../assets/点赞.png" alt=""
             style="height: 20px;n
                   width:20px;"
        >
        <h3 class="ZanCnt">(0)</h3>
        <h3 class="ReCom">回复</h3>
        <img class="Re" src="../assets/回复.png" alt=""
             style="height: 20px;
                   width: 20px;"
        >
      </div> -->
      <div class="boxLine">
        <span style="white-space:pre"></span>
        <span class="line"></span>
      </div>
      <div class="boxLine">
        <span style="white-space:pre"></span>
        <span class="line"
              style="visibility:hidden">
        </span>
      </div>
    </div>
  </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
//import{useStore} from 'vuex'
//import { ElMessage } from 'element-plus'
//import {useRouter} from 'vue-router'
export default {
  name: 'forumBox',
  data() {
    return {
      myReplyList:[],
      info: '',
    //   list: [{
    //     name:'',
    //     date:'',
    //     Btitle:'',
    //     Btext:'',
    //     img:require("../assets/默认头像.png")
    //   },
    //  ],
    list:[],
    list2:[],
    ArticleID:'',
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(tab);
      var i=0;
      var k=0;
      if(k==0){
        if(!this.$store.state.isLogin)
        {
          //ElMessage("还未登录，请先登录")
        }
      else{
        axios({
        method:"get",
        url:'http://www.fzuprrxd.work/bbs/my_site',
        withCredentials:true
       }
        ).then((response2)=>
        {
            // console.log(response2.data.data.article_list);
            this.list2=response2.data.data.article_list;
            // console.log(this.list2[0]);
        });
      }
  }
    if(i==0){
      if(!this.$store.state.isLogin)
        {
         // ElMessage("还未登录，请先登录")
        }
        else{
          axios({
          method:"get",
          url:'http://www.fzuprrxd.work/bbs/new_comment',
          withCredentials:true
            }
          ).then((response2)=>
          {
              console.log(response2.data.data.com_to_me);
              this.myReplyList=response2.data.data.com_to_me;
              console.log(this.myReplyList);
          })
        }
    }

    }


    
  },
  /*setup(){
    const store = useStore()
    const router = useRouter()
    const handleClick=(tab, event)=> {
      console.log(tab, event);
      console.log(tab);
      var i=0;
      var k=0;
      if(k==0){
        if(store.state.isLogin)
        {
          ElMessage("还未登录，请先登录")
          router.push({path:"/login"})
        }
      else{
        axios({
        method:"get",
        url:'http://www.fzuprrxd.work/bbs/my_site',
       }
        ).then((response2)=>
        {
            // console.log(response2.data.data.article_list);
            this.list2=response2.data.data.article_list;
            // console.log(this.list2[0]);
        });
      }
  }
    if(i==0){
    axios({
        method:"get",
        url:'http://www.fzuprrxd.work/bbs/new_comment',
      }
    ).then((response2)=>
    {
        console.log(response2.data.data.com_to_me);
        this.myReplyList=response2.data.data.com_to_me;
        console.log(this.myReplyList);
    })
  }

    }
    /*const myarticle=()=>{
      if(!store.state.isLogin){
        ElMessage("还未登录，请先登录")
        router.push({path:"/login"})
      }
    }
    const mycommit=()=>{
      if(!store.state.isLogin){
        ElMessage("还未登录，请先登录")
        router.push({path:"/login"})
      }
    }*/
   /* return{
      //myarticle,
      //mycommit
      handleClick
    }
  },*/
  mounted() {
    axios({
        method:"get",
        url:'http://www.fzuprrxd.work/bbs/home',
        withCredentials:true
      }
    ).then((response)=>
     {this.info = response.data;
        // console.log(response);
        this.list=response.data.data.article_list;
        // this.ArticleID=require('http://www.fzuprrxd.work/bbs/article/'+this.list[0].article_id)
        // console.log(this.list[0].title);
    })
  }
}

</script>

<!-- "scoped" 使样式仅在当前组件生效 -->
<style scoped>
.box {
text-align: center
}
.box.boxLine {
height: 1px;
width: 100%;
}
.boxLine .line {
display: inline-block;
width: 95%;
border-top: 1px solid #b4b1b1;
}
.box .boxTitle {
float: left;
position: relative;
height: 60px;
width: 60%;
}
.box .boxTitle img {
margin-top: .7%;
margin-left: 8.3%;
float: left;
position: relative;
border-radius: 50%;
}

.box .boxTitle h3 {
float: left;
position: relative;
margin-top: 15px;
margin-left: 2%;
font-size: 14px;
font-weight: normal;
text-align: CENTER;
color: #333333;
line-height: 20px;
}

.box .boxBodyTle {
float: left;
position: relative;
height: 30px;
width: 60%;
}
.box .boxBodyTle .pp1 {
float: left;
position: relative;
margin-top: .5%;
margin-left: 8.3%;
font-weight: bold;

}
.box .boxBodyCnt {
float: left;
position: relative;
margin-top: 2%;
height: 30px;
width: 60%;

}
.box .boxBodyCnt .pp2 {
float: left;
position: relative;
margin-left: 8.3%;
max-width: 90%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.boxBodyImg {
float: right;
position: relative;
margin-right: 5%;
margin-top: 1%;
}

.boxBodyCom {
float: right;
position: relative; 
margin-right: 5%;
margin-top: 1%;
margin-bottom: 0%;
height: 40px;
width: 30%;
}

.boxBodyCom .Zan {
float: left;
position: relative;
margin-left: 50%;
margin-top: 8%;
}
.boxBodyCom .ZanCnt {
float: left;
position: relative;
font-size: 20px;
margin-top: 8%;
margin-left: 2%;
font-size: 16px;
font-weight: normal;
text-align: CENTER;
color: #555555;
line-height: 20px;
}
.boxBodyCom .Re {
float: right;
position: relative;
margin-right: 2%;
margin-top: 8%;
}
.boxBodyCom .ReCom {
float: right;
position: relative;
font-size: 20px;
margin-top: 8%;
margin-right: 0%;
font-size: 16px;
font-weight: normal;
text-align: CENTER;
color: #555555;
line-height: 20px;
}
</style>
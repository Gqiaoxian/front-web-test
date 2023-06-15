<template>
<div ><topBar v-bind:name="$route.name"></topBar></div>

<div ><img class="bp" src="../assets/source/background.png"/>
<div style="display:flex;justify-content:space-around;"><div class="leftbox">
    <h1 class="hh1">福&ensp;线上活动</h1>
    <ul id='scheduleline'>
    <li class='schedule'>
        <input class='radio' id='schedule1' name='schedules' type='radio' checked>
        <div class="relative">
        <label for='schedule1'><strong>6月02日 &ensp;校庆特别报道</strong></label>
        <span class='circle'></span>
        </div>
        <div class='content'>
            <p>
                时值福州大学计算机系成立四十周年，软件学院成立二十周年,学院隆重举行系列庆祝活动。计算机学院延续传统开展<strong>“计算机青年·牛牛汇”学院特色品牌活动。</strong><br /><a href="https://news.fzu.edu.cn/info/1015/24791.htm"><strong>点击此处查看详情</strong></a>
            </p>
        </div>
    </li>
    <li class='schedule'>
        <input class='radio' id='schedule2' name='schedules' type='radio'>
        <div class="relative">
        <label for='schedule2'><strong>10月22日起&ensp;元宇宙</strong></label>
        <span class='circle'></span>
        </div>
        <div class='content'>
        <p>
            为了让各位校友能增强院庆的体验感，我们在院庆中推出风格的虚拟桌面，<a href="#"><strong>点击此处体验</strong></a>此外，在元宇宙中增添了一个名为<strong>MyShell</strong>的一个小游戏，通过输入<strong>命令行</strong>命令可以进行人物的移动参观曾经的校园<a href="#"><strong>元宇宙入口</strong></a>，开始探索属于你的独特校园吧！
        </p>
        </div>
    </li>
    <li class='schedule'>
        <input class='radio' id='schedule3' name='schedules' type='radio'>
        <div class="relative">
        <label for='schedule3'><strong>10月22日起&ensp;虚拟合影</strong></label>
        <span class='circle'></span>
        </div>
        <div class='content'>
        <p>
            因为疫情，我们很多校友，社会人士都无法来到现场，为了让大家可以为这次的院庆留下独特的回忆，本次院庆特别推出<strong>虚拟合影</strong>，可以和学院地标进行合影保存！快来创造属于你和学校的合影吧！<a href="#"><strong>虚拟合影入口</strong></a>
        </p>
        </div>
    </li>
    <li class='schedule'>
        <input class='radio' id='schedule4' name='schedules' type='radio'>
        <div class="relative">
        <label for='schedule4'><strong>10月22日起&ensp;校友论坛</strong></label>
        <span class='circle'></span>
        </div>
        <div class='content'>
        <p>
            本次院庆，计算机与大数据学院特别推出了<strong>校友论坛</strong>，在这里你可以发表帖子，寻找班级同学和同级校友，快来论坛发表一个帖子吧！<a href="#"><strong>校友论坛入口</strong></a>
        </p>
        </div>
    </li>
    </ul>
</div>
<!-- 线下日程 -->
<div class="right">
    <div class="rhh1">
        <h1 >线下活动&ensp;福</h1>
    </div>
    
<div class="rightbox">
    <ul id='rscheduleline'>
    <li class='rschedule'>
        <input class='rradio' id='rschedule1' name='rschedules' type='radio' checked>
        <div class="rrelative">
        <label for='rschedule1'><strong>5月30日17：00&ensp;社会捐赠签约及实习基地授牌仪式</strong></label>
        <span class='rcircle'></span>
        </div>
        <div class='rcontent'>
            <p>
                本次院庆，为支持福州大学计算机与大数据学院的人才培养和高质量发展，进一步推进学院教学实习与就业实践基地建设，增强校企合作，推动产学研深度融合，学院举办了社会捐赠签约及实习基地授牌仪式。<br />活动地点：<strong style="color: #fd6b6b;">图书馆博学厅</strong>
            </p>
        </div>
    </li>
    <li class='rschedule'>
        <input class='rradio' id='rschedule2' name='rschedules' type='radio'>
        <div class="rrelative">
        <label for='rschedule2'><strong>6月02日下午 &ensp;计算机学院校友交流讲座</strong></label>
        <span class='rcircle'></span>
        </div>
        <div class='rcontent'>
        <p>
            值此计算机建系40周年，软件学院建院20周年，学校邀请了各位优秀校友回校分享经验，欢迎各位校友、同学、对计算机感兴趣的各位同学前往参加。<br />活动地点：<strong style="color: #fd6b6b;">数计七号楼报告厅</strong>
        </p>
        </div>
    </li>
    <li class='rschedule'>
        <input class='rradio' id='rschedule3' name='rschedules' type='radio'>
        <div class="rrelative">
        <label for='rschedule3'><strong>10月5日下午&ensp;“计算机青年·牛牛汇”活动</strong></label>
        <span class='rcircle'></span>
        </div>
        <div class='rcontent'>
        <p>
            这次活动活动邀请了2015级计算机专业(2019届本科毕业生）并入围华为“天才少年”计划的校友郑浩晖与同学们分享自己在专业学习、求职就业、学科竞赛等方面的心得与经验.<br />活动地点：<strong style="color: #fd6b6b;">数计七号楼报告厅</strong>。
        </p>
        </div>
    </li>
    <li class='rschedule'>
        <input class='rradio' id='rschedule4' name='rschedules' type='radio'>
        <div class="rrelative">
        <label for='rschedule4'><strong>10月22日&ensp;计算机系周年趣味跑活动</strong></label>
        <span class='rcircle'></span>
        </div>
        <div class='rcontent'>
        <p>
            本次院庆，将开展计算机系周年趣味跑，利用学校的建筑，跑出带有“40”或者“20”字样的路径图，你可以使用keep，悦跑圈，步多多等软件，既可以锻炼身体，也为本次院庆送上特别的一份祝福。等什么，快运动起来吧！
        </p>
        </div>
    </li>
    </ul>
</div>
</div></div></div>
</template>
<script>
import topBar from '../components/topBar.vue'

export default ({
    name:'schedulePage',
    components:{
        topBar
    }
})
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.bp{
    position: fixed;
    /* top:8%; */
    left: 0;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    z-index: 0;
}


/*onlineschedule*/
.leftbox{
  min-width: 500px;
  width: 30%;
  height: 70%;
  float: left;
  margin-top:0;
  z-index:1;
}
.hh1{
    display: inline-block;
    margin: 5px 0px 0px 0px;
    color: #B05055;
}
  #scheduleline{
    list-style: none;
    margin: 0px 0px 30px 10px;
    padding-left: 20px;
    border-left: 8px solid #B05055;
  }
  #scheduleline li {
    margin: 15px 0 30px 0;
    position: relative;
  }
  #scheduleline p {
    margin: 0 0 15px;
  }
  .circle {
    margin-top: -10px;
    top: 50%;
    left: -34px;
    width: 10px;
    height: 10px;
    background: #ee7e82;
    border: 5px solid #ffffff;
    border-radius: 50%;
    display: block;
    position: absolute;
  }
  
  .content {
    max-height: 20px;
    padding: 40px 20px 0;
    border-color: #B05055;
    background-color: #B05055;
    border-width: 2px;
    border-style: solid;
    border-radius: 20px;
    position: relative;
  }
  .content:before, .content:after {
    content: "";
    width: 0;
    height: 0;
    border: solid transparent;
    position: absolute;
    pointer-events: none;
    right: 99%;
  }
  .content:before {
    border-right-color: inherit;
    border-width: 20px;
    top: 50%;
    margin-top: -20px;
  }
  .content:after {
    border-right-color: #B05055;
    border-width: 17px;
    top: 50%;
    margin-top: -17px;
  }
  .content p {
    max-height: 0;
    color: transparent;
    text-align: justify;
    word-break: break-word;
    hyphens: auto;
    overflow: hidden;
  }
  
  .leftbox label {
    font-size: 1.1rem;
    float:left;
    margin:0 ;
    color: #fcfaf9;
    position: absolute;
    right:25px;
    z-index: 100;
    cursor: pointer;
    top: 10px;
    transition: transform 0.2s linear;
  }
  .radio {
    display: none;
  }
  
  .radio:checked + .relative label {
    cursor: auto;
    transform: translateX(20px);
  }
  .radio:checked + .relative .circle {
    background: #B05055;
  }
  .radio:checked ~ .content {
    max-height: 350px;
    border-color: #B05055;
    margin-right: 20px;
    transform: translateX(15px);
    transition: all 0.4s linear;
  }
  .radio:checked ~ .content p {
    max-height: 400px;
    color: #ffd4d4;
    transition:  all 0.3s linear ;
  }
  .leftbox a{
    color: #fd6b6b;
    text-decoration: none;
  }
  .leftbox a:hover{
    color: #f84a4a;
}
/*rightbox*/
.right{
  width:40%;
  height: 65%;
  float: left;
  margin-left: 10%;
  margin-right:1.3%;
  margin-top:0;
  min-width: 600px;
  z-index:1;
}
.rightbox{
  width: 80%;
  height:80%;
  float: right;
  min-width: 500px;
}
.rhh1{
    float: right;
    width: 100%;
    margin-top: 5px;
    color: #B05055;
}
#rscheduleline{
  list-style: none;
  margin: 0px 0px 30px 0px;
  padding-right: 20px;
  border-right: 8px solid #B05055;
}
#rscheduleline li {
  margin: 15px 0px 30px 0;
  position: relative;
}
#rscheduleline p {
  margin: 0 0 15px;
}
.rightbox label{
  font-size: 1.1rem;
  width: 100%;
  margin:0px;
  color: #fcfaf9;
  position: absolute;
  right:15px;
  z-index: 100;
  cursor: pointer;
  top: 10px;
  transition: transform 0.2s linear;
}
.rcircle {
  margin-top: -10px;
  top: 50%;
  right: -35px;
  width: 10px;
  height: 10px;
  background: #ee7e82;
  border: 5px solid #ffffff;
  border-radius: 50%;
  display: block;
  position: absolute;
}

.rcontent {
  max-height: 20px;
  padding: 43px 10px 0;
  border-color: #B05055;
  background-color: #B05055;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  position: relative;
}
.rcontent:before, .rcontent:after {
  content: "";
  width: 0;
  height: 0;
  border: solid transparent;
  position: absolute;
  pointer-events: none;
  left: 99%;
}
.rcontent:before {
  border-left-color: inherit;
  border-width: 20px;
  top: 50%;
  margin-top: -20px;
}
.rcontent:after {
  border-left-color: #B05055;
  border-width: 17px;
  top: 50%;
  margin-top: -17px;
}
.rcontent p {
  max-height: 0;
  color: transparent;
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
}
.rradio {
  display: none;
}

.rradio:checked + .rrelative label {
  cursor: auto;
  transform: translateX(-25px);
}
.rradio:checked + .rrelative .rcircle {
  background: #B05055;
}
.rradio:checked ~ .rcontent {
  max-height: 250px;
  border-color: #B05055;
  margin-right: 10px;
  transform: translateX(-10px);
  transition: all 0.4s linear;
}
.rradio:checked ~ .rcontent p {
  max-height: 300px;
  color: #ffd4d4;
  transition:  all 0.3s linear ;
}

@media screen and (min-width: 1240px) {
  
}
</style>
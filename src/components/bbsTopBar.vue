<template>
    <div class="bbsNav">
        <div class="bbsNav2">
            <a style="font-size:1.2em;color:#EDE0D7;">
                <el-icon><HomeFilled /></el-icon>首页.福友圈
            </a>
            <span style="color:white; font-size:1.5em">论坛</span>
        </div>
</div>     
</template>
<script>
import {HomeFilled} from'@element-plus/icons-vue'
export default {
    name:'bbsTopBar',
    components:{
          HomeFilled
    }
}
</script>
<style >
  .bbsNav{
  width: 100%;
  margin: 0 0;
  background-image: linear-gradient(to bottom right,rgb(250,41,4),rgb(112, 77, 51));
  min-width: 920px;
}
.bbsNav2{
    
    display: flex;
    flex-direction: column;
    margin-left: 5em;
    border-left:8px solid rgb(250, 227, 25);
    width: 80%;
}

</style>

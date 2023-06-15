<template>
    <div class="elhead">
        <!--左侧图标--><img src="../assets/image1.png" style=" margin:0;height: 2.5em; position: absolute;">
        <!--title-->
       <h1 style="color:#B05055;margin: auto;position: relative;left: 0.7em;">{{name}}</h1>
        <el-dropdown type="primary" >
            <el-icon style="color: #B05055;font-size: 2em;position: relative;right: 0.2em;"><Compass /></el-icon>
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
        </el-dropdown>
    </div>
</template>
<script>
import {Compass} from'@element-plus/icons-vue'
export default {
    name:'topBar',
    props:['name'],
    components:{
          Compass,
    }
}
</script>
<style >
.elhead{
    display:flex;
    position:absolute;
    justify-content: space-between;
    align-items: center;
    width:100%;
    background-color: #EDE0D7;
    min-width: 920px;
}
.header-drop li{
    color: #B05055!important;
    font-size: 1.5em;
}
.header-drop li:hover{
    background-color: #f5d7d9;
}
</style>

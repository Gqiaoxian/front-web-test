
<template>
  <div class="outdiv">
    <router-view v-if="isRouterAlive"></router-view>
  </div>

</template>

<style>
 html,body,#app,.outdiv{
  height:100%;
  padding: 0;
  margin: 0;
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  border:hidden;
  background-color: #EDE0D7;
 }
</style>


<script>
import{nextTick,provide,ref} from "vue"
export default {
    name:"App",
    setup(){
      const isRouterAlive = ref(true)
      const reload=()=>{
        isRouterAlive.value = false
        nextTick(()=>{
          isRouterAlive.value = true
        })
      }
      provide('reload',reload)
      return{
        isRouterAlive,reload
      }
    },
    created(){
      if(sessionStorage.getItem("store")){
        this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
}
</script>

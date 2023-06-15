import { createRouter, createWebHistory } from 'vue-router'
import homepage from "@/views/homepage/home_page.vue"
import login from "@/views/homepage/login.vue";
import login2 from "@/views/homepage/login2.vue";
import register from "@/views/homepage/registerWin.vue";
import schedule from "@/views/schedulePage.vue";
import write from "@/views/WriteArticle.vue"
//import person from "@/views/About.vue"

const routes = [
  {
    path: "/",
    name: "福友圈",
    component: homepage,

  },
  {
    path:"/login",
    name: "login",
    component: login,
  },
  {
    path:"/login2",
    name: "login2",
    component: login2,
  },
  {
    path:"/register",
    name:"register",
    component: register,
  },
  {
    path:"/schedule",
    name:"校庆日程",
    component: schedule,
  },
  {
    path:"/write",
    name:"write",
    component:write
  },
  /*{
    path:"/about",
    name:"person",
    component:person
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

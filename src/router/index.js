import Vue from 'vue'
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage";
import SecondPage from "@/views/SecondPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/second',
    name: 'SecondPage',
    component: SecondPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'
import Login from '../views/login/Index.vue'
import Home from '../views/home/Home.vue'

// 异步加载形式定义组件
Vue.use(VueRouter)

export const baseRoutes = [
  {
    path: '/',
    component: Layout,
    meta:{
      title: '首页',
      isLogin: true, // 是否需要登录
    },
    // 二级路由
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },  
    ]
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'
import Login from '../views/login/Index.vue'

import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // 二级路由
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  },
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

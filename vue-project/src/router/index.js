import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Index.vue'
import Login from '../views/login/Index.vue'

import Home from '../views/home/Home.vue'

// 异步加载形式定义组件
const Product = () => import('@/views/product/Index.vue')
const List = () => import('@/views/product/list/Index.vue')
const Category = () => import('@/views/product/category/Index.vue')

const Order = () => import('@/views/order/Index.vue')
const OrderList = () => import('@/views/order/list/Index.vue')
const Collect = () => import('@/views/order/collect/Index.vue')

const Advert = () => import('@/views/advert/Index.vue')
const AdvertList = () => import('@/views/advert/list/Index.vue')

Vue.use(VueRouter)

const routes = [
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
      {
        path: '/product',
        name: 'home',
        component: Product,
        children: [
          {
            path: 'list',
            name: 'list',
            component: List
          },
          {
            path: 'category',
            name: 'category',
            component: Category
          }
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'order-list',
            name: 'order-list',
            component: OrderList
          },
          {
            path: 'order-collect',
            name: 'order-collect',
            component: Collect
          },
          {
            path: 'order-vul',
            name: 'order-vul',
            component: Collect
          }
        ]
      },
      {
        path: '/advert',
        name: 'advert',
        component: Advert,
        children: [
          {
            path: 'advert-list',
            name: 'advert-list',
            component: AdvertList
          },
        ]
      },
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

// 配置路由全局前置首位导航------------
import store from '@/store'
router.beforeEach((to, from, next) => {
   // 判断进入的路由界面是否需要登录 不需要登录直接进入
   // https://v3.router.vuejs.org/guide/advanced/meta.html
   if (to.matched.some(ele => ele.meta.isLogin)) {
    // 需要登录 --- 1.判断是否已经登录了 token值是否存在
    if (store.state.login.userinfo.token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next() // make sure to always call next()!
  }
})


export default router

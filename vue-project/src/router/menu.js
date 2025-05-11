/**
 * 动态菜单 - 全部的菜单导航 除了首页登录
 */

// 商品管理
const Product = () => import('@/views/product/Index.vue')
const List = () => import('@/views/product/list/Index.vue')
const Category = () => import('@/views/product/category/Index.vue')

// 订单管理
const Order = () => import('@/views/order/Index.vue')
const OrderList = () => import('@/views/order/list/Index.vue')
const Collect = () => import('@/views/order/collect/Index.vue')

// 广告管理
const Advert = () => import('@/views/advert/Index.vue')
const AdvertList = () => import('@/views/advert/list/Index.vue')

// 系统管理
const SystemManage = () => import('@/views/SystemManage')
const department = () => import('@/views/SystemManage/department/index.vue')
const role = () => import('@/views/SystemManage/role/index.vue')


export const menu = [
    {
        path: '/product',
        name: 'home',
        component: Product,
        meta: {
            title: "产品管理"
        },
        children: [
            {
                path: 'list',
                name: 'list',
                component: List,
                meta:{
                    title:"产品列表"
                  },
            },
            {
                path: 'category',
                name: 'category',
                component: Category,
                meta:{
                    title:"产品分类"
                  },
            }
        ]
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        meta:{
          title:"订单管理"
        },
        children: [
            {
                path: 'order-list',
                name: 'order-list',
                component: OrderList,
                meta:{
                    title:"订单列表"
                },
            },
            {
                path: 'order-collect',
                name: 'order-collect',
                component: Collect,
                meta:{
                    title:"汇总清单"
                },
            },
            // {
            //     path: 'order-vul',
            //     name: 'order-vul',
            //     component: Collect,
            //     meta:{
            //         title:"订单审核"
            //     },
            // }
        ]
    },
    {
        path: '/advert',
        name: 'advert',
        component: Advert,
        meta:{
            title:"广告分类"
        },
        children: [
            {
                path: 'advert-list',
                name: 'advert-list',
                component: AdvertList,
                meta:{
                    title:"广告列表"
                },
            },
        ]
    },
    {
        path: '/system',
        name: 'system',
        component: SystemManage,
        redirect: '/system/role',
        meta: {
          title: '系统管理',
        },
        children: [
            {
                path: 'role',
                name: 'role',
                component: role,
                meta: {
                  title: '角色管理',
                }
            },
            {
                path: 'department',
                name: 'department',
                component: department,
                meta: {
                  title: '部门管理',
                }
            },
        ]
    },
]
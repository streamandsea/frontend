/**
 * 路由守卫
 */
// 配置路由全局前置首位导航------------
import router from '@/router'
import store from '@/store'
router.beforeEach((to, from, next) => {
    console.log('路由守卫---------', to)
    // 判断进入的路由界面是否需要登录 不需要登录直接进入
    // https://v3.router.vuejs.org/guide/advanced/meta.html
    if (to.matched.length== 0 || to.matched.some(ele => ele.meta.isLogin)) { // 需要登录
        // 需要登录 --- 1.判断是否已经登录了 token值是否存在
        if (store.state.login.userinfo.token) { // 登录过了 可以查看页面了
            // 继续 判断当前存储的vuex里面是否已经有动态导航了 如果没有菜单导航 需要获取菜单导航
            if(store.state.menu.dyMenuList.length != 0) { // 有导航
                next()    
            } else { // 没有导航
                // 获取导航
                console.log('动态路由菜单为空，重新请求菜单数据')
                store.dispatch('menu/getMenuList')
                .then(mybaseRoutes =>{
                    console.log('没有导航---获取导航', mybaseRoutes)
                    // 把导航菜单追加到路由实例上
                    mybaseRoutes.forEach(ele => {
                        router.addRoute(ele)
                    })
                })
            }
        } else {
            next('/login')
        }
    } else {
        // 不需要登录
        next()
    }
})
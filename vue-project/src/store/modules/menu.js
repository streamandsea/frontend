/**
 * 动态的路由导航
 */
// 导入请求的接口方法
// import permission from '@/api/index'
import api from '@/api/index'


export default {
    namespaced: true,
    state: {
        // 定义动态导航容器---存储动态导航
        dyMenuList: []
    },
    mutations: {
        // 设置菜单导航
        setMenuList(state, payload) {
            state.dyMenuList = payload;
        },
        // 清空菜单导航
        removeMenuList(state) {
            state.dyMenuList = [];
        }
    },
    actions: {
        // 定义请求动态路由信息的接口方法------token------
        async getMenuList({ /*commit,*/ rootState }) {
            console.log("rootState", rootState);
            console.log('rootState.login.userinfo.token', rootState.login.userinfo.token);
            // let res = await permission({token: rootState.login.userinfo.token})
            let res = await api.permission({ token: rootState.login.userinfo.token });
            console.log('后端返回的导航菜单内容:---', res.data)
        },
    }
}
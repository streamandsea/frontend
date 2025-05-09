import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  },
  plugins: [
    createPersistedState({
      key: 'info', // 存储vuex数据的任意键名 -- 本地存储里面 localStorage 
      paths: ['product', 'login'] // 存储的模块名称一级全局state数据 不写默认存储所有内容
    }),
  ]
})

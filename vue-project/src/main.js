import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import './plugins/element.js'
import './assets/css/base.css'
import api from './api'

Vue.prototype.$api = api;

// 所有的组件通过this.$echarts来使用
// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
// Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

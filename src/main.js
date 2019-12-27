import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'
// 导入axios,用于http请求
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:9200/api/'
// axios.defaults.headers.common[""]
// axios.header.
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/global.css'
import './assets/fonts/iconfont.css'
import globalvariable from "./globalvariable"
import XLSX from 'xlsx'

//请求头里添加Authorization属性
axios.interceptors.request.use(config =>{
    config.headers.Authorization = sessionStorage.getItem("logintoken");
    config.headers.Terminal = "computer";
    return config;
})
//配置根路径
axios.defaults.baseURL = 'http://localhost:8081'
//axios.defaults.baseURL = 'http://192.168.96.131:8081/spt2'
Vue.prototype.$http = axios
Vue.prototype.$GLOBAL = globalvariable
Vue.config.productionTip = false
Vue.prototype.XLSX = XLSX

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

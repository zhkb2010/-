import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.BASE_API = process.env.VUE_APP_BASE_API || ""; //环境变量
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import axios from 'axios'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const id = "136DCD006054C14E_1";
const baseURL = "https://run.jiaopb.com";
// axios({
//   url: 'https://run.jiaopb.com/wx/mqtt/sendMqtt', //服务器的地址   👉请求地址
//   method: 'get', //用什么方式请求 get/post, 如果不写，默认是post      👉请求类型 
//   timeout: 5000, // 请求超时设置，单位是ms   
//   params: {
//     deviceNum: id
//   }
// }).then(res => {
//   console.log(res);
// })

// axios({
//   baseURL,
//   url: '/wx/mqtt/deviceState',
//   timeout: 5000,
//   params: {
//     deviceNum: id
//   }
// }).then(res => console.log(res.data.data))

// axios.all([
//   axios({
//     baseURL,
//     url: '/wx/mqtt/deviceState',
//     timeout: 5000,
//     params: {
//       deviceNum: id
//     }
//   }).then(res => console.log(res.data.data)),
//   axios({
//     baseURL,
//     url: '/wx/mqtt/sendMqtt',
//     timeout: 5000,
//     params: {
//       deviceNum: id
//     }
//   }).then(res => console.log(res.data.data)),

// ])
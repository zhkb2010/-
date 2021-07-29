import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const WWW = () => import('../views/www.vue')
const VVV = () => import('../views/vvv.vue')

const routes = [{
    path: '/test2',
    component: VVV,
    name: "测试2"
  },
  {
    path: '/test1', // 将来调用时的名称
    component: WWW, // 调用上面导入的组件 Home 
    name: "测试1"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// 路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 生成路由器
const router = new VueRouter({
  routes
})

export default router

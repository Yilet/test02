import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入登录组件
import Login from '../components/login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

// 路由
const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: Login
  },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //to 代表将要访问的页面
  //form 代表从哪个路径跳转而来
  //next 代表放行
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  return next()
})

export default router

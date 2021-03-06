import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login 
  }
    ,
  {
    path: '/home',
    name: 'home',
    component: Home 
  }
]



const router = new VueRouter({
  routes
})
//路由导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path == '/login') next();
  const token = window.sessionStorage.getItem('token');
  if(!token) next('/login');
  next();
})

export default router

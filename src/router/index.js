import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'
import Layout from '@/views/layout/index'
import Article from '@/views/article/index'
import Dashboard from '@/views/dashboard/index'
// import store from '@/store/index'
 Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:'/login',component: Login},
    {
      path:'/',
      component:Layout,
      children:[
        {path:'/article',component :Article},
        {path:'/dashboard',component :Dashboard}
      ]
   }
  ]
})
// router.beforeEach((to,from,next)=>{
//   const token = store.state.user.token
//   if(token){
//     next()
//   } else {
//     next('/login')
//   }
// })
export default router

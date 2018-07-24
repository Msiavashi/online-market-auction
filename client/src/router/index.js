import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Signup from '@/pages/Signup'
// import Login from '@/pages/Login'
// import Register from "@/pages/Register"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/pageone',
    name: 'PageOne',
    alias:'/one',
    component:() => import('../views/PageOne.vue')
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    redirect:'/pagetwo/childone',
    component:() => import('../views/PageTwo.vue'),
    children:[
      {
        path:"childone",
        name:"ChildOne",
        component:()=>import('../views/ChildOne.vue')
      },
      {
        path:"childtwo",
        name:"ChildTwo",
        component:()=>import('../views/ChildTwo.vue')
      },
      {
        path:"childthree/:username",
        name:"ChildThree",
        component:()=>import('../views/ChildThree.vue')
      }
    ]
  },{
    path:"/home",
    redirect:"/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

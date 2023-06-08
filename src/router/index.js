import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/sub1',
    name: 'Submodulo1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      { 
        path: 'parcial1',
        component: () => import(/* webpackChunkName: "about" */ '../views/Submodulo1.vue')
      },
      { 
        path: 'parcial2',
        component: () => import(/* webpackChunkName: "about" */ '../views/Submodulo2.vue')
      },
      { 
        path: 'parcial3',
        component: () => import(/* webpackChunkName: "about" */ '../views/Submodulo3.vue')
      },      
    ]
  },
  {
    path: '/sub2',
    name: 'Submodulo2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/sub3',
    name: 'Submodulo3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Submodulo3.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

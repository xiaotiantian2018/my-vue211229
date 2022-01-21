import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bar from '@/views/Bar.vue'
import Set from '@/views/Set.vue'
import Slot from '@/views/Slot.vue'

Vue.use(VueRouter)

// const Bar = { template: '<div>barDDDSDFSAFADSFADSFDASAS</div>' }
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar
  },
  {
    path: '/set',
    name: 'set',
    component: Set
  },
  {
    path: '/slot',
    name: 'slot',
    component: Slot
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

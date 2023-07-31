import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bar from '@/views/Bar.vue'
import Set from '@/views/Set.vue'
import SlotEg from '@/views/SlotEg.vue'
import upLoad from '@/views/upLoad.vue'
import Parent from '@/views/Parent.vue'

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
    component: Bar,
    meta:{ isAuth: false, title:"barbarbar" },
    beforeEnter: (to, from, next) => {
      console.log('独享路由守卫',to,from,next)
      if(to.meta.isAuth){ //判断是否需要鉴权
        if(localStorage.getItem('school')==='heikeji'){
          next()
        }else{
          alert('独享路由守卫-学校名不对，无权限查看！')
        }
      }else{
        next()
      }
    }

  },
  {
    path: '/set',
    name: 'set',
    component: Set
  },
  {
    path: '/slotEg',
    name: 'slotEg',
    component: SlotEg
  },
  {
    path: '/upLoad',
    name: 'upLoad',
    component: upLoad
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
	console.log('前置路由守卫',to,from)
	if(to.meta.isAuth){ //判断是否需要鉴权
		if(localStorage.getItem('school')==='heikeji'){
			next()
		}else{
			alert('全局前置路由守卫-学校名不对，无权限查看！')
		}
	}else{
		next()
	}
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '黑科技系统'
})
export default router

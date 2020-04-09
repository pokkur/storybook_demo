import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../pages/One.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'One',
    component: One
  },
  {
    path: '/two',
    name: 'Two',
    // route level code-splitting
    // this generates a separate chunk (Two.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Two" */ '../pages/Two.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

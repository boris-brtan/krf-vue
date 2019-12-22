import Vue from 'vue'
import VueRouter from 'vue-router'
import Donations from '../views/Donations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'donations',
    component: Donations
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (user.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/donation/:id',
    name: 'donation',
    // route level code-splitting
    // this generates a separate chunk (donation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "donation" */ '../views/Donation.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router

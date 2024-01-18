import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppHome from '../components/AppHome.vue'
import RouterTest from '../components/RouterTest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/router-test',
    name: 'RouterTest',
    component: RouterTest
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

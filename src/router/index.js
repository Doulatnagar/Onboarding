import { createRouter, createWebHistory } from 'vue-router'
import Screen from '../views/Screen.vue'
import ScreenTwo from '../views/ScreenTwo.vue'
import Register from '@/views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Screen,
  },
  {
    path: '/Screen2',
    name: 'Screen2',
    component: ScreenTwo,
  },
  {
    path: '/register',
    name: 'FormExample',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

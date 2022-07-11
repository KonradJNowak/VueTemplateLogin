import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Navigation from '@/components/Navigation/setup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('@/views/Home.vue'),
      navigation: Navigation
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('@/views/About.vue'),
      navigation: Navigation
      //'navigation-panel': () => import('@/components/Navigation/setup.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: () => import('@/views/About.vue'),
      'navigation-panel': () => import('@/components/Test/setup.vue')
    },
    meta: {
      authenticationRequired: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

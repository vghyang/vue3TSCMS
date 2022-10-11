import localCache from '@/utils/localCache'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { fristMenu } from '@/utils/map-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/Main.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/notfound/NotFound.vue')
  }
]
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  // if (to.path !== '/login') {
  //   if (localCache.getCache('token') && to.path === '/main') {
  //     return fristMenu.url
  //   } else if (localCache.getCache('token')) {
  //     return true
  //   } else {
  //     return '/login'
  //   }
  // }

  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    } else if (to.path === '/main') {
      return fristMenu.url
    }
  }
})
export default router

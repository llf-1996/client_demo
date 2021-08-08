import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Layout.vue'

const routes = [
  {
    path: '/',
    redirect: '/chart/page1',
  },
  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/page1',
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "report" */ '@/views/chart/Page1.vue'),
        meta: {
          needLogin: true
        }
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "report" */ '@/views/chart/Page2.vue'),
        meta: {
          needLogin: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          name: 'Home',
          path: '/home',
          component: () => import('@/views/home/index.vue'),
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/components-show',
      component: Layout,
      children: [
        {
          name: 'Table',
          path: 'table',
          component: () => import('@/views/components-show/table/index.vue'),
          meta: { title: '表格组件' }
        }
      ]
    },
    
    {
      path: '/setting',
      component: Layout,
      children: [
        {
          name: 'Setting',
          path: 'index',
          component: () => import('@/views/setting/index.vue'),
          meta: { title: '设置' }
        }
      ]
    },
    {
      path: '/about',
      component: Layout,
      children: [
        {
          name: 'About',
          path: 'index',
          component: () => import('@/views/about/index.vue'),
          meta: { title: '关于' }
        }
      ]
    }
  ]
})

export default router

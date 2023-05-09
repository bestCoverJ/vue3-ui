import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index/index.vue')
    },
    {
      path: '/Components',
      name: 'Components',
      component: () => import('../views/Components/index.vue'),
      redirect: '/Components/Button',
      children: [
        {
          path: 'Button',
          name: 'Button',
          component: () => import('../views/Components/Button/index.vue')
        },
        {
          path: 'Input',
          name: 'Input',
          component: () => import('../views/Components/Input/index.vue')
        }
      ]
    }
  ]
})

export default router

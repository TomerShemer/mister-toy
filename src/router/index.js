import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'
import dashboard from '../views/dashboard.vue'
import aboutPage from '../views/about-page.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/toy',
      name: 'toy-store',
      component: toyApp
    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-edit',
      component: toyEdit
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    },
  ]
})

export default router

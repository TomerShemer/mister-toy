import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'

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
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

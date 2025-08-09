import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import list from '../views/list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about/',
      name: 'about',
      component: about,
      props: true,
    },
    {
      path: '/list/',
      name: 'list',
      component: list,
      props: true,
    },
  ],
})

export default router


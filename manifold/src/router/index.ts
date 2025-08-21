import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import list from '../views/list.vue'
import contacts from '../views/contacts.vue'
import messenger from '../views/messenger.vue'

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
    {
      path: '/contacts/',
      name: 'contacts',
      component: contacts,
      props: true,
    },
    {
      path: '/messenger/',
      name: 'messenger',
      component: messenger,
    },
    
  ],
})

export default router


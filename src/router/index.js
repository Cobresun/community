import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contributors from '../views/Contributors.vue'
import EpisodePage from '../views/EpisodePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: Contributors
  },
  {
    path: "/ep/:id",
    name: "EpisodePage",
    component: EpisodePage,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

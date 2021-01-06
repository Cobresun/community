import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EpisodePage from '../views/EpisodePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EpisodePage from '../components/EpisodePage.vue'

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

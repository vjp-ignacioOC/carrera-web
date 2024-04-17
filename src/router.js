import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PrincipalView from '@/views/PrincipalView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/principal', component: PrincipalView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
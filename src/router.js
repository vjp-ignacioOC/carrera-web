import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PrincipalView from '@/views/PrincipalView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistroView from '@/views/RegistroView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/principal', component: PrincipalView },
  { path: '/login', component: LoginView },
  { path: '/registro', component: RegistroView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
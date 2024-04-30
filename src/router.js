import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistroView from '@/views/RegistroView.vue'
import PerfilUsuarioView from './views/PerfilUsuarioView.vue'
import EntrenamientosView from '@/views/EntrenamientosView.vue'
import PatrocinadoresView from '@/views/PatrocinadoresView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/entrenamientos', component: EntrenamientosView },
  { path: '/perfil', component: PerfilUsuarioView },
  { path: '/login', component: LoginView },
  { path: '/registro', component: RegistroView },
  { path: '/patrocinadores', component: PatrocinadoresView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
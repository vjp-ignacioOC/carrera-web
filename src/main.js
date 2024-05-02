import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const app = createApp(App);
const vuetify = createVuetify();

app.use(router).use(vuetify).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import 'bootstrap/dist/css/bootstrap.css';


const app = createApp(App);
const vuetify = createVuetify();

app.use(router).use(vuetify).mount('#app')

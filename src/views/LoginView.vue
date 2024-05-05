<template>
  <div class="form-container">
    <form class="formularioRegistro">
      <div class="form-group">
        <label for="InputEmail">Introduzca su Email</label>
        <input type="email" v-model="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"
          placeholder="Email">
      </div>
      <div class="form-group">
        <label for="InputPassword">Contraseña</label>
        <input type="password" v-model="password" class="form-control" id="InputPassword" placeholder="Contraseña">
      </div>

      <v-btn @click="iniciarSesion" class="btn btn-primary">Acceder</v-btn>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { VBtn } from "vuetify/lib/components/index.mjs";

const vuetify = createVuetify();

export default {
  vuetify, // Añadir Vuetify a la vista
  components: {
    VBtn
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    iniciarSesion() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // La autenticación fue exitosa
          console.log('Autenticación exitosa:', userCredential.user);
          this.$router.push('/');  // Redirigir a la página principal
        })
        .catch((error) => {
          console.log('Intentando iniciar sesión con:', this.email, this.password);
          console.error('Error en la autenticación:', error);
          alert('Usuario o contraseña incorrectos ' + error.code + ' ' + error.message);
        });

    },
  },
};
</script>

<style scoped>
.form-container {
  background: lightgrey;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 20px auto;
  box-sizing: border-box;
}


.form-group {
  margin-bottom: 1rem;
  padding: 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #6c757d;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
<template>
  <div class="form-container">
    <form ref="registrarUsuario" class="formularioRegistro">
      <div class="form-group">
        <label for="registerEmail">Email</label>
        <input type="email" v-model="email" class="form-control" id="registerEmail" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="registerNombre">Nombre</label>
        <input type="text" v-model="nombre" class="form-control" id="registerNombre" placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="registerApellidos">Apellidos</label>
        <input type="text" v-model="apellidos" class="form-control" id="registerApellidos" placeholder="Apellidos">
      </div>
      <div class="form-group">
        <label for="registerPassword">Contraseña</label>
        <input type="password" v-model="password" class="form-control" id="registerPassword" placeholder="Contraseña">
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword"
          placeholder="Confirmar Contraseña">
        <small id="emailHelp" class="form-text text-muted">No comparta su contraseña con nadie.</small>
      </div>
      <v-btn @click="crearUsuario" class="btn btn-primary">Registrar</v-btn>
    </form>
  </div>
</template>

<script>
// import firebase from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
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
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      confirmPassword: '',
      imageUrl: '',
      // rules: {
      //   required: (value) => !!value || 'Este campo es requerido',
      //   email: (value) => {
      //     const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //     return validarEmail.test(value) || 'El email no es válido';
      //   },
      //   password: (value) => {
      //     if (value.length < 6) {
      //       return 'La contraseña debe tener al menos 6 caracteres';
      //     }
      //     return true;
      //   },
      //   confirmPassword: (value) => {
      //     if (value !== this.password) {
      //       return 'Las contraseñas no coinciden';
      //     }
      //     return true;
      //   },
      // },
    };
  },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    async crearUsuario() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      if (this.password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        console.log('Usuario creado:', user.uid); // UID del usuario para usarlo como referencia en Firestore
        
        // Aquí guardas la información adicional en Firestore
        await setDoc(doc(db, "users", user.uid), {
          nombre: this.nombre,
          apellidos: this.apellidos,
          imageUrl: this.imageUrl,
        });

        this.$router.push('/login');
      } catch (error) {
        console.error('Error al crear el usuario:', error);
        alert(`Error al crear el usuario: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>

.formularioRegistro {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
  /* Centrado horizontal */
  position: relative;
  /* Para centrado vertical */
  top: 50%;
  /* Para centrado vertical */
  transform: translateY(-50%);
  /* Para centrado vertical */
}

.form-container {
  height: 100vh;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-check-label {
  margin-left: 0.5rem;
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

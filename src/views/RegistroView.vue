<template>
  <div class="form-container">
    <form ref="registrarUsuario" class="formularioRegistro">
      <div class="titulo d-flex justify-content-center">
        <h2>Registrarse</h2>
      </div>
      <div class="form-group">
        <label for="registerEmail">Email</label>
        <input type="email" v-model="email" @input="validateEmail" class="form-control" id="registerEmail" placeholder="Email">
        <div v-if="emailError" class="emailIncorrecto">Email incorrecto.</div>
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
        <input type="password" v-model="password" @input="validatePassword" class="form-control" id="registerPassword" placeholder="Contraseña">
        <div v-if="passwordError" class="passIncorrecto">La contraseña debe tener mínimo 6 caracteres.</div>

      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" v-model="confirmPassword" @input="validateConfirmPassword" class="form-control" id="confirmPassword"
          placeholder="Confirmar Contraseña">
        <div v-if="confirmPasswordError" class="repassIncorrecto">Las contraseñas no son iguales.</div>

      </div>
      <div class="login">
        <small id="emailHelp" class="form-text text-muted">¿Ya tienes cuenta? <RouterLink to="/login">Inicia Sesión
          </RouterLink></small>
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
      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
    };
  },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = this.email !== '' && !emailPattern.test(this.email);    
    },
    validatePassword() {
      this.passwordError = this.password !== '' && this.password.length < 6;
    },
    validateConfirmPassword() {
      this.confirmPasswordError = this.confirmPassword !== '' && this.password !== this.confirmPassword;
    },
    async crearUsuario() {

      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.email || !this.password || !this.confirmPassword || !this.nombre || !this.apellidos) {
        alert('Debes rellenar todos los campos.');
        return;
      }
      // if (!this.email.includes('@')) {
      //   document.querySelector('.emailIncorrecto').classList.remove('d-none');
      //   return;
      // }
      // if (this.password.length < 6) {
      //   document.querySelector('.passIncorrecto').classList.remove('d-none');
      //   return;
      // }
      // if (this.password !== this.confirmPassword) {
      //   document.querySelector('.repassIncorrecto').classList.remove('d-none');
      //   return;
      // }
      if (this.emailError || this.passwordError || this.confirmPasswordError) {
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

        this.$router.push('/');
        this.contadorDorsal++;
      } catch (error) {
        alert('Error al crear el usuario. Por favor, compruebe que todos los campos son correctos y que el Email no está siendo utilizado.');
        console.error(`Error al crear el usuario: ${error.message}`, error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: fit-content;
  padding: 0;
}

.formularioRegistro {
  background: lightgrey;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 30px 0 30px 0;

}

.form-group {
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 600;
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

.form-text {
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

/* Mejoras de accesibilidad */
input:focus,
button:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
}

.emailIncorrecto,
.passIncorrecto,
.repassIncorrecto {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .form-container {
    width: 90%;
    margin: 0;
  }
}
</style>

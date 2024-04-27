<template>
  <div class="form-container">
    <form ref="registrarUsuario">
      <div class="form-group">
        <label for="registerEmail">Email</label>
        <input type="email" v-model="email" class="form-control" id="registerEmail" placeholder="Email"
          :rules="[rules.required]">
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
      <button @click="crearUsuario" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<script>
// import firebase from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default {
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      confirmPassword: '',
      rules: {
        required: (value) => !!value || 'Este campo es requerido',
        email: (value) => {
          const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return validarEmail.test(value) || 'El email no es válido';
        },
        password: (value) => {
          if (value.length < 6) {
            return 'La contraseña debe tener al menos 6 caracteres';
          }
          return true;
        },
        confirmPassword: (value) => {
          if (value !== this.password) {
            return 'Las contraseñas no coinciden';
          }
          return true;
        },
      },
    };
  },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    crearUsuario() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      if (this.password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/login');
          console.log('Usuario creado');
        })
        .catch((error) => {
          console.error(error);
        });

    },
  },
};
</script>

<style scoped>
.form-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
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

button.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.btn:hover {
  background-color: #0056b3;
}
</style>

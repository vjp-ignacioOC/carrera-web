<!-- HTML de la vista -->
<template>

  <div class="principal">
    <h1>Perfil de Usuario</h1>
    <div class="cambiarContraseña">
        <p>Si quiere restablecer su contraseña <span id="resetPassword" class="text-primary" @click="recuperarContraseña">Pulse aquí</span></p>
    </div> 
    <div class="botones">
      <v-btn @click="desconectarPerfil">Desconectar</v-btn>
    </div>
  </div>
  
</template>


<!-- Funcionalidad, con JavaScript, de la vista -->
<script>
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
     return {
       //Recoge el email del usuario logueado
       email: auth.currentUser.email,
     };
   },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
  },
  methods: {
    desconectarPerfil() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("Usuario desconectado");
        this.$router.push("/login");
      }).catch((error) => {
        console.error(error);
      });
    },
     recuperarContraseña() {
       // Enviar un correo electrónico al usuario para restablecer la contraseña
       sendPasswordResetEmail(auth, this.email)
         .then(() => {
           alert('Correo electrónico enviado');
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode, errorMessage);
         });
     },
  },
};
</script>


<!-- Estilos de CSS para la vista -->
<style scoped>

h1 {
  color: white;
}

.botones {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

#resetPassword {
  cursor: pointer;
}

</style>
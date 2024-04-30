<!-- HTML de la vista -->
<template>

  <div class="container principal">

    <div class="row">
      <h1 class="col-12">Perfil de {{ nombre }}</h1>
    </div>

    <div class="row">
      <!-- Muestra la foto de perfil del usuario -->
      <div class="col-md-4">
        <img :src="imagenUrl" alt="Foto de perfil" class="fotoPerfil">
      </div>
      <!-- Muestra los datos del usuario logueado -->
      <div class="col-md-8">
        <div class="datosUsuario">
          <p>Nombre: {{ nombre }}</p>
          <p>Apellidos: {{ apellidos }}</p>
          <p>Email: {{ email }}</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Subir una imagen de perfil</h3>
        <input type="file" @change="seleccionarFoto" id="fileInput">
        <v-btn @click="subirFoto" class="btn btn-primary">Subir Archivo</v-btn>
      </div>
      <div class="col-md-6 botones">
        <v-btn @click="desconectarPerfil" class="btn btn-danger">Desconectar</v-btn>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 cambiarContraseña">
        <p>Si quiere restablecer su contraseña <span id="resetPassword"
            @click="recuperarContrasenia">Pulse aquí</span></p>
      </div>
    </div>
  </div>

</template>


<!-- Funcionalidad, con JavaScript, de la vista -->
<script>
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc } from 'firebase/firestore';


export default {
  data() {
    return {
      //Recoge el email del usuario logueado
      email: auth.currentUser ? auth.currentUser.email : '',
      nombre: '',
      apellidos: '',
      file: null,
      imagenUrl: '',
    };
  },
  computed: {
    $route() {
      return this.$route.fullPath;
    },
    imagenSrc() {
      return this.imagenUrl || '';
    }
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
    recuperarContrasenia() {
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
    cargarDatosUsuario: async function () {
      // Recoge los datos del usuario logueado si existe
      if (auth.currentUser) {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.nombre = docSnap.data().nombre;
          this.apellidos = docSnap.data().apellidos;
          this.imagenUrl = docSnap.data().imageUrl;
        } else {
          console.log("No se encontraron datos del usuario.");
        }
      }
    },

    seleccionarFoto(event) {
      this.file = event.target.files[0]; // Toma el primer archivo seleccionado
    },
    subirFoto() {
      if (!this.file) {
        alert('Por favor, selecciona un archivo primero.');
        return;
      }
      const user = auth.currentUser;
      if (!user) {
        alert('No estás autenticado.');
        return;
      }
      const safeName = this.file.name.replace(/[^a-zA-Z0-9.]/g, "_");
      const storagePath = `${user.uid}/uploads/${safeName}`;
      const fileRef = storageRef(storage, storagePath);
      uploadBytes(fileRef, this.file).then((snapshot) => {
        console.log('Archivo subido con éxito:', snapshot);
        return getDownloadURL(fileRef); // Obtengo la url de descarga
      }).then((urlDescargada) => {
        console.log('URL de descarga:', urlDescargada);
        this.imagenUrl = urlDescargada; // Actualizo la imagen en la vista
        alert('Archivo subido con éxito!');
        return setDoc(doc(db, "users", user.uid), { imageUrl: urlDescargada }, { merge: true });
      }).catch((error) => {
        console.error('Error al subir el archivo:', error);
        alert('Error al subir archivo: ' + error.message);
      });
    }
  },
  mounted() {
    this.cargarDatosUsuario().catch(error => console.error('Error al cargar datos del usuario:', error));
  },
};
</script>


<!-- Estilos de CSS para la vista -->
<style scoped>
h1 {
  color: white;
}

.fotoPerfil {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.datosUsuario p {
  margin: 5px 0;
}

.botones {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  cursor: pointer;
  height: 7vh;
}

.btn {
  margin-right: 10px;
}

.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.cambiarContraseña {
  margin-top: 20px;
}

#resetPassword {
  cursor: pointer;
  color: blue;
}
</style>
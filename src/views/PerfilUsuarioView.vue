<!-- HTML de la vista -->
<template>

  <div class="container principal">

    <div class="row">
      <div class="col-12">
        <h1>Mi Perfil</h1>
      </div>
    </div>

    <div ref="perfil" class="row w-100">
      <!-- Muestra la foto de perfil del usuario -->
      <div class="col-md-4 p-0 text-center">
        <img :src="imagenUrl" alt="Foto de perfil" class="fotoPerfil m-2"  >
      </div>
      <!-- Muestra los datos del usuario logueado -->
      <div class="col-md-8 p-0 d-flex justify-content-center">
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
        <v-btn @click="descargarPDF" class="btn btn-warning">Descargar Dorsal PDF</v-btn>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 cambiarPassword">
        <p>En caso de querer restablecer su contraseña <span id="resetPassword" @click="recuperarContrasenia">Pulse aquí</span>
        </p>
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
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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
    // Este método se dispara cuando el usuario selecciona un archivo. Si el archivo es JPG o JPEG, se llama a convertirAPng.
    seleccionarFoto(event) {
    this.file = event.target.files[0];
    if (this.file && (this.file.type === 'image/jpeg' || this.file.type === 'image/jpg')) {
      // Convertir a PNG si el archivo es JPEG/JPG
      this.convertirAPng(this.file);
    }
  },
  // Este método carga el archivo original como una imagen, dibuja esta imagen en un <canvas>, y luego utiliza toDataURL para obtener la imagen en formato PNG. Finalmente, se utiliza toBlob para convertir la URL de datos en un blob, que luego se convierte en un objeto File de PNG que se puede subir.
  convertirAPng(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgElement = document.createElement("img");
      imgElement.src = event.target.result;
      imgElement.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
        canvas.toDataURL('image/png'); // Convertir a PNG

        canvas.toBlob((blob) => {
          // Conserva el nombre original pero cambia la extensión a .png
          const nombreOriginal = file.name.replace(/\.[^/.]+$/, "");
          const nombreNuevo = `${nombreOriginal}.png`;
          this.file = new File([blob], nombreNuevo, {
            type: 'image/png',
            lastModified: Date.now()
          });
          this.subirFoto(); // Subir después de la conversión
        }, 'image/png');
      };
    };
    reader.readAsDataURL(file);
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
    },
    // Descargar el perfil del usuario en formato PDF
    descargarPDF() {
      html2canvas(this.$refs.perfil, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: 'a6'
        });
        // Calcular el ancho y alto del PDF para mantener la relación de aspecto de la imagen
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('perfil.pdf');
      }).catch(error => console.error('Error al generar PDF:', error));
    }
  },
  mounted() {
    this.cargarDatosUsuario().catch(error => console.error('Error al cargar datos del usuario:', error));
  },
};
</script>


<!-- Estilos de CSS para la vista -->
<style scoped>

.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: lightgray;
  box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.1);
}


.fotoPerfil {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 15px 10px 5px rgba(0, 0, 0, 0.1);
} 

.datosUsuario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
}

.datosUsuario p {
  margin: 5px 0;
  font-size: 1.2em;
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

.cambiarPassword {
  margin-top: 20px;
}

#resetPassword {
  cursor: pointer;
  color: blue;
}

#resetPassword:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .botones {
    justify-content: flex-start;
    margin-top: 10px;
  }

  .cambiarContraseña {
    margin-top: 10px;
  }
}
</style>
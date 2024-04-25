/* Importar las funciones específicas desde los módulos de Firebase */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCzBf_X8_hSoNhJu7IulQWxs9LJKHq0vj0",
    authDomain: "carrera-web.firebaseapp.com",
    projectId: "carrera-web",
    storageBucket: "carrera-web.appspot.com",
    messagingSenderId: "927843212037",
    appId: "1:927843212037:web:545349dcf79f4af077b56c",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancias para Auth y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exportaciones
export { auth, db };

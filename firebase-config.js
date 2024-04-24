// Importar Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase para tu proyecto
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Referencias a Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; // Exportar para usar en otros archivos

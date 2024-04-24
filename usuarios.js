// usuarios.js o user-services.js
import { db } from './firebase-config'; // Asegúrate de tener el archivo de configuración de Firebase
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Colección para usuarios
const usuariosCollection = collection(db, 'usuarios');

// Función para agregar usuario
function agregarUsuario(datosUsuario) {
    return addDoc(usuariosCollection, datosUsuario);
}

// Función para obtener todos los usuarios
function obtenerUsuarios() {
    return getDocs(usuariosCollection).then((snapshot) => {
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
}

// Función para actualizar usuario
function actualizarUsuario(id, datosActualizados) {
    const usuarioRef = doc(usuariosCollection, id);
    return updateDoc(usuarioRef, datosActualizados);
}

// Función para eliminar usuario
function eliminarUsuario(id) {
    const usuarioRef = doc(usuariosCollection, id);
    return deleteDoc(usuarioRef);
}

// Exportar funciones para usar en otras partes del proyecto
export { agregarUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario };

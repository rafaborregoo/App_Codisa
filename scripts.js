import { auth, db } from './firebase-config'; // Importar Firebase y Firestore
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { agregarUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario } from './usuarios.js';

// Función para iniciar sesión
function iniciarSesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado
      const user = userCredential.user;
      console.log('Inicio de sesión exitoso:', user);
      return user;
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
      throw error;
    });
}

// Función para registrar usuario
function registrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario registrado
      const user = userCredential.user;
      console.log('Registro exitoso:', user);
      return user;
    })
    .catch((error) => {
      console.error('Error al registrar usuario:', error);
      throw error;
    });
}

// Escuchar el evento de envío del formulario para agregar un usuario
document.getElementById('form-agregar-usuario').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const rol = document.getElementById('rol').value;

  // Llamar a la función para agregar el usuario a Firebase
  agregarUsuario({ nombre, correo, rol })
      .then(() => {
          alert('Usuario agregado con éxito');
          actualizarListaUsuarios(); // Actualizar la lista de usuarios después de agregar uno nuevo
      })
      .catch((error) => {
          console.error('Error al agregar usuario:', error);
      });
});

// Función para actualizar la lista de usuarios
function actualizarListaUsuarios() {
  obtenerUsuarios().then((usuarios) => {
      const lista = document.getElementById('lista-usuarios');
      lista.innerHTML = ''; // Limpiar la lista actual
      usuarios.forEach((usuario) => {
          const item = document.createElement('li');
          item.textContent = `${usuario.nombre} (${usuario.rol}) - ${usuario.correo}`;
          lista.appendChild(item);
      });
  });
}

// Llamar a la función para cargar la lista de usuarios al inicio
actualizarListaUsuarios();

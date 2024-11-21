<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-custom from-bg-gradient-start to-bg-gradient-end dark:from-dark-main dark:to-primary-dark p-4">
    <div class="w-full max-w-md">
      <div class="bg-white dark:bg-dark-main rounded-2xl shadow-xl overflow-hidden transform  transition-all duration-300">
        <div class="relative">
          <div class="absolute inset-0 bg-opacity-20 dark:bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>
          <div class="relative p-8">
            <h2 class="text-4xl font-bold text-center mb-8 text-primary dark:text-white">
              {{ isLogin ? 'Bienvenido de nuevo' : 'Únete a nosotros' }}
            </h2>
            <div class="flex justify-center mb-8">
              <button @click="isLogin = true" :class="tabButtonClass(true)">Iniciar sesión</button>
              <button @click="isLogin = false" :class="tabButtonClass(false)">Registrarse</button>
            </div>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div v-if="!isLogin" class="space-y-4 animate-fade-in">
                <label class="block">
                  <span class="text-gray-700 dark:text-gray-300">Nombre completo</span>
                  <input type="text" class="form-input" placeholder="Juan Pérez" required />
                </label>
              </div>
              <div class="space-y-4">
                <label class="block">
                  <span class="text-gray-700 dark:text-gray-300">Correo electrónico</span>
                  <input type="email" class="form-input" placeholder="tu@email.com" required />
                </label>
                <label class="block">
                  <span class="text-gray-700 dark:text-gray-300">Contraseña</span>
                  <input type="password" class="form-input" placeholder="••••••••" required />
                </label>
              </div>
              <button type="submit" class="w-full py-3 px-6 text-white bg-primary hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg transition-colors duration-300 transform hover:scale-105">
                {{ isLogin ? 'Iniciar sesión' : 'Crear cuenta' }}
              </button>
            </form>
            <div class="mt-6 text-center">
              <a href="#" class="text-sm text-primary hover:underline dark:text-white">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="mt-8">
              <p class="text-center text-gray-600 dark:text-gray-400 mb-4">O continúa con</p>
              <div class="flex justify-center space-x-4">
                <button @click="socialLogin('facebook')" class="social-btn bg-blue-600 hover:bg-blue-700">
                  <FontAwesomeIcon :icon="faFacebook"  style="color: whitesmoke;"  class="w-5 h-5" />
                </button>
                <button @click="socialLogin('x')" class="social-btn bg-black hover:bg-gray-800">
                  <FontAwesomeIcon :icon="faXTwitter" style="color: whitesmoke;" class="w-5 h-5" />
                </button>
                <button @click="socialLogin('google')" class="social-btn bg-red-500 hover:bg-red-600">
                  <FontAwesomeIcon :icon="faGoogle" style="color: whitesmoke;"  class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center animate-slide-up">
        <p class="text-gray-600 dark:text-gray-400">
          {{ isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?" }}
          <a @click.prevent="isLogin = !isLogin" href="#" class="text-primary hover:underline dark:text-white ml-1">
            {{ isLogin ? 'Regístrate' : 'Inicia sesión' }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faFacebookF, faGoogle, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const isLogin = ref(true)

const tabButtonClass = (isActive) => `
  px-6 py-2 text-sm font-medium transition-all duration-300
  ${isActive
    ? 'text-primary dark:text-white border-b-2 border-primary'
    : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white'
}
`

const handleSubmit = () => {
  // Manejar el envío del formulario
  console.log(isLogin.value ? 'Iniciando sesión...' : 'Registrando...')
}

const socialLogin = (provider) => {
  // Manejar el inicio de sesión social
  console.log(`Iniciando sesión con ${provider}`)
}
</script>

<style scoped>
.form-input {
  @apply mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:text-white transition duration-300;
}

.bg-gradient-custom {
  @apply bg-gradient-to-br;
}

/* Animación personalizada para los campos del formulario */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.form-input:focus {
  animation: float 3s ease-in-out infinite;
}

/* Efecto de brillo para elementos primarios */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(88, 133, 243, 0.5); }
  50% { box-shadow: 0 0 20px rgba(88, 133, 243, 0.8); }
}

button[type="submit"] {
  animation: glow 3s infinite;
}

/* Transición del modo oscuro */
@media (prefers-color-scheme: dark) {
  .bg-white {
    transition: background-color 0.3s ease;
  }
}

/* Botones de inicio de sesión social */
.social-btn {
  @apply w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110;
}

.social-btn svg {
  @apply transition-transform duration-300;
}

.social-btn:hover svg {
  transform: rotate(15deg);
}
</style>
<template>
  <div :class="'min-h-screen duration-300'">
    <main>
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
            class="text-center z-10 px-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
            Redefiniendo Tu <span class="text-primary dark:text-primary-light">Experiencia Automotriz</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Alquila autos, compra repuestos, conéctate con mecánicos y únete a una vibrante comunidad automotriz, todo en una sola aplicación.
          </p>
          <div class="flex justify-center space-x-4">
            <button
                @mouseover="scaleUp($event)"
                @mouseleave="scaleDown($event)"
                class="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg dark:bg-primary-light"
            >
              Comenzar
            </button>
            <button
                @mouseover="scaleUp($event)"
                @mouseleave="scaleDown($event)"
                class="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg border border-primary dark:bg-gray-800 dark:text-primary-light dark:border-primary-light"
            >
              Saber Más
            </button>
          </div>
        </div>

        <!-- Floating Chevron -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown class="text-gray-400 dark:text-gray-600 w-10 h-10" />
        </div>

        <!-- Background Car Icon -->
        <div
            ref="carIcon"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        >
          <Car class="w-[600px] text-primary dark:text-primary-light" />
        </div>
      </section>

      <!-- Características Section -->
      <section id="caracteristicas" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Nuestras Características
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
                v-for="(feature, index) in features"
                :key="index"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
                class="flex items-start space-x-4"
            >
              <div class="bg-blue-100 p-3 rounded-full dark:bg-blue-900">
                <component :is="feature.icon" class="w-6 h-6 text-primary dark:text-primary-light" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 dark:text-white">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sobre Nosotros Section -->
      <section id="sobre-nosotros" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Sobre CarApp
          </h2>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              CarApp está revolucionando la industria automotriz al proporcionar una plataforma integral que atiende todas tus necesidades relacionadas con el automóvil. Nuestra misión es simplificar y mejorar cada aspecto de la propiedad y el mantenimiento del automóvil.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Fundada por un equipo de entusiastas del automóvil e innovadores tecnológicos, CarApp combina tecnología de vanguardia con un profundo conocimiento de la industria para ofrecer una experiencia de usuario sin igual.
            </p>
            <button
                @mouseover="scaleUp($event)"
                @mouseleave="scaleDown($event)"
                class="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg dark:bg-primary-light"
            >
              Conoce Más Sobre Nosotros
            </button>
          </div>
        </div>
      </section>

      <!-- Descargar Section -->
      <section id="descargar" class="py-20  dark:text-white text-dark-main">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-8">Descarga CarApp Hoy</h2>
          <p class="text-xl mb-12 max-w-2xl mx-auto">
            Experimenta el futuro de los servicios automotrices. Disponible en plataformas Android e iOS.
          </p>
          <div class="flex justify-center space-x-6">
            <a
                href="#"
                class="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg flex items-center dark:bg-gray-800 dark:text-primary-light"
            >
              <FontAwesomeIcon :icon="faAndroid" style="color: forestgreen" class="mr-2 w-6 h-6" />
              App Android
            </a>
            <a
                href="#"
                class="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg flex items-center dark:bg-gray-800 dark:text-primary-light"
            >
              <FontAwesomeIcon :icon="faAppStoreIos" class="mr-2 w-6 h-6" />
              App iOS
            </a>
          </div>
        </div>
      </section>

      <!-- Términos Section -->
      <section id="terminos" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Términos y Condiciones
          </h2>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-4 dark:text-white">1. Aceptación de Términos</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Al acceder o utilizar CarApp, aceptas estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguna parte de estos términos, no podrás usar nuestros servicios.
            </p>
            <h3 class="text-2xl font-semibold mb-4 dark:text-white">2. Licencia de Uso</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Se otorga permiso para descargar temporalmente una copia de CarApp para uso personal y no comercial transitorio únicamente. Esto es la concesión de una licencia, no una transferencia de título.
            </p>
            <h3 class="text-2xl font-semibold mb-4 dark:text-white">3. Descargo de Responsabilidad</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Los materiales en CarApp se proporcionan "tal cual". CarApp no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las otras garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.
            </p>
            <button
                @mouseover="scaleUp($event)"
                @mouseleave="scaleDown($event)"
                class="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg dark:bg-primary-light"
            >
              Leer Términos Completos
            </button>
          </div>
        </div>
      </section>

      <!-- Contacto Section -->
<!--      <section id="contacto">-->
<!--        <div class="container mx-auto px-6">-->
<!--          <h2 class="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">-->
<!--            Contáctanos-->
<!--          </h2>-->
<!--          <div class="max-w-2xl mx-auto">-->
<!--            <form @submit.prevent="submitForm" class="space-y-6">-->
<!--              <div>-->
<!--                <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">-->
<!--                  Nombre-->
<!--                </label>-->
<!--                <input-->
<!--                    type="text"-->
<!--                    id="nombre"-->
<!--                    v-model="contactForm.name"-->
<!--                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"-->
<!--                />-->
<!--              </div>-->
<!--              <div>-->
<!--                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">-->
<!--                  Email-->
<!--                </label>-->
<!--                <input-->
<!--                    type="email"-->
<!--                    id="email"-->
<!--                    v-model="contactForm.email"-->
<!--                    class="mt-1  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"-->
<!--                />-->
<!--              </div>-->
<!--              <div>-->
<!--                <label for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300">-->
<!--                  Mensaje-->
<!--                </label>-->
<!--                <textarea-->
<!--                    id="mensaje"-->
<!--                    v-model="contactForm.message"-->
<!--                    rows="4"-->
<!--                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"-->
<!--                ></textarea>-->
<!--              </div>-->
<!--              <button-->
<!--                  type="submit"-->
<!--                  @mouseover="scaleUp($event)"-->
<!--                  @mouseleave="scaleDown($event)"-->
<!--                  class="w-full bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg dark:bg-primary-light"-->
<!--              >-->
<!--                Enviar Mensaje-->
<!--              </button>-->
<!--            </form>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Car,
  ShoppingCart,
  Users,
  MessageCircle
} from 'lucide-vue-next'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faAndroid, faAppStoreIos} from "@fortawesome/free-brands-svg-icons";

// Contact Form
const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

// Form Submission
const submitForm = () => {
  console.log('Form submitted:', contactForm.value)
  contactForm.value = {
    name: '',
    email: '',
    message: ''
  }
}
// Dark Mode State
const isDarkMode = ref(false)

// Features Data
const features = [
  {
    icon: Car,
    title: 'Alquiler Inteligente de Autos',
    description: 'Experimenta alquileres de autos sin complicaciones con nuestro sistema de reservas intuitivo y amplia selección de vehículos.'
  },
  {
    icon: ShoppingCart,
    title: 'Mercado de Repuestos',
    description: 'Encuentra las piezas perfectas para tu vehículo con nuestra extensa plataforma de comercio electrónico, con opciones OEM y aftermarket.'
  },
  {
    icon: Users,
    title: 'Red de Mecánicos Expertos',
    description: 'Conéctate con mecánicos certificados, lee reseñas y obtén asesoramiento profesional para todas tus necesidades automotrices.'
  },
  {
    icon: MessageCircle,
    title: 'Foro Comunitario',
    description: 'Únete a nuestra vibrante comunidad de entusiastas del automóvil, comparte experiencias y aprende de otros conductores.'
  }
]

// Car Rotation Effect
const carIcon = ref(null)

const handleScroll = () => {
  if (carIcon.value) {
    const rotation = window.scrollY / 2
    carIcon.value.style.transform = `rotate(${rotation}deg)`
  }
}

// Button Scale Effects
const scaleUp = (event) => {
  event.target.style.transform = 'scale(1.05)'
}

const scaleDown = (event) => {
  event.target.style.transform = 'scale(1)'
}

// Dark Mode Toggle (to be implemented with your specific toggle method)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Any additional custom styles can be added here */
</style>
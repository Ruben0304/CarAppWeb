<template>
  <footer class="bg-gray-800 text-white py-12 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div>
          <div class="flex items-center space-x-2">
            <img src="/assets/img/th.jpeg" alt="Logo" class="w-8 h-8 rounded-full" />
            <span class="text-xl font-bold text-white ">
              CarApp
            </span>
          </div>
          <p class="text-sm pt-5 text-gray-400">Tu solución automotriz todo en uno</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#caracteristicas" class="text-gray-400 hover:text-white transition-colors duration-300">Características</a></li>
            <li><a href="#sobre-nosotros" class="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nosotros</a></li>
            <li><a href="#descargar" class="text-gray-400 hover:text-white transition-colors duration-300">Descargar</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <ul class="space-y-2">
            <li><a href="mailto:contacto@carapp.com" class="text-gray-400 hover:text-white transition-colors duration-300">contacto@carapp.com</a></li>
            <li><a href="#contacto" class="text-gray-400 hover:text-white transition-colors duration-300">Formulario de Contacto</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center text-sm text-gray-500">
        © 2024 CarApp. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Estilo adicional opcional si lo necesitas */
</style>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
        @click="toggleMenu"
        class="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
    >
      <Download v-if="!isOpen" class="w-6 h-6" />
      <Download v-else class="w-6 h-6" />
    </button>

    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" class="absolute bottom-16 right-0 bg-white dark:bg-dark-main rounded-lg shadow-xl p-4 w-48 sm:w-56">
        <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Descargar App</h3>
        <a
            href="#android-download"
            class="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <FontAwesomeIcon :icon="faAndroid" class="w-5 h-5 mr-2 text-green-500" />
          <span class="text-gray-700 dark:text-gray-300">Android</span>
        </a>
        <a
            href="#ios-download"
            class="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <FontAwesomeIcon :icon="faAppStoreIos"  class="w-5 h-5 mr-2 text-primary" />
          <span class="text-gray-700 dark:text-gray-300">iOS</span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download, XIcon, SmartphoneIcon, AppleIcon } from 'lucide-vue-next'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faAndroid, faAppStoreIos} from "@fortawesome/free-brands-svg-icons";

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
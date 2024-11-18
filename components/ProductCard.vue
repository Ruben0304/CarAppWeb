<template>
  <div class="bg-white dark:bg-gray-800  rounded-xl shadow-lg overflow-hidden w-64 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
    <div class="relative h-full flex flex-col">
      <!-- Imagen y contenedor principal -->
      <div class="relative h-48 overflow-hidden">
        <img
            :src="imageUrl"
            :alt="name"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <!-- Botón de favorito -->
        <button
            @click="$emit('favoriteClick')"
            class="absolute top-2 right-2 p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors backdrop-blur-sm"
        >
          <HeartIcon
              :class="{ 'text-red-500 fill-red-500': isFavorite, 'text-gray-600 dark:text-gray-300': !isFavorite }"
              class="h-5 w-5 transition-colors duration-300"
          />
        </button>
      </div>

      <!-- Información del producto -->
      <div class="p-4 flex-grow flex flex-col justify-between bg-white dark:bg-gray-700 ">
        <div>
          <!-- Nombre del producto -->
          <h3 class="font-bold text-lg text-gray-800 dark:text-gray-800">{{ name }}</h3>

          <!-- Tipo de parte -->
          <div class="mt-2 flex items-center">
            <MapPinIcon class="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span class="ml-1 text-sm text-gray-600 dark:text-gray-300">{{ partType }}</span>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <!-- Rating -->
          <div class="flex items-center space-x-0.5">
            <template v-for="i in 5" :key="i">
              <StarIcon
                  :class="i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'"
                  class="w-4 h-4"
              />
            </template>
            <span class="ml-1 text-xs text-gray-600 dark:text-gray-400">{{ rating.toFixed(1) }}</span>
          </div>

          <!-- Precio -->
          <p class="text-lg font-bold text-gray-900 dark:text-gray-100">
            {{ price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HeartIcon, MapPinIcon, StarIcon } from 'lucide-vue-next'

defineProps({
  name: {
    type: String,
    required: true
  },
  partType: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  }
});

defineEmits(['favoriteClick']);
</script>
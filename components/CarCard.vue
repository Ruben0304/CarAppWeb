<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20 group">
    <div class="relative pb-[56.25%]"> <!-- 16:9 aspect ratio -->
      <img
          :src="car.image"
          :alt="car.name"
          class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <button
          @click="$emit('toggleFavorite')"
          class="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
      >
        <Heart
            :class="[
            'w-5 h-5',
            car.isFavorite ? 'fill-primary text-primary' : 'text-gray-600 dark:text-gray-400'
          ]"
        />
      </button>
    </div>
    <div class="p-4 space-y-3">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ car.name }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ car.type }}</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex space-x-4">
          <div class="flex items-center space-x-1">
            <Users class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ car.seats }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Settings2 class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ car.transmission }}</span>
          </div>
        </div>
        <div class="text-right">
          <span class="text-lg font-semibold text-primary">${{ car.pricePerDay }}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">/d</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart, Users, Settings2 } from 'lucide-vue-next'

defineProps({
  car: {
    type: Object,
    required: true
  }
})

defineEmits(['toggleFavorite'])
</script>
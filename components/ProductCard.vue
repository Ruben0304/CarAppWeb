<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20 group border border-gray-200 dark:border-gray-700 flex flex-col">
    <div class="relative pb-[100%]"> <!-- 1:1 aspect ratio -->
      <img
          :src="imageUrl"
          :alt="name"
          class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <button
          @click="$emit('favoriteClick')"
          class="absolute top-2 right-2 p-1.5 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors backdrop-blur-sm"
      >
        <HeartIcon
            :class="{ 'text-red-500 fill-red-500': isFavorite, 'text-gray-600 dark:text-gray-300': !isFavorite }"
            class="h-4 w-4 transition-colors duration-300"
        />
      </button>
    </div>

    <div class="p-2 flex-grow flex flex-col justify-between">
      <div>
        <h3 class="font-semibold text-xs sm:text-sm text-gray-800 dark:text-white line-clamp-2">{{ name }}</h3>
        <div class="mt-1 flex items-center">
          <MapPinIcon class="h-3 w-3 text-gray-600 dark:text-gray-400" />
          <span class="ml-1 text-xs text-gray-600 dark:text-gray-300">{{ partType }}</span>
        </div>
      </div>

      <div class="mt-2 flex items-center justify-between">
        <div class="flex items-center space-x-0.5">
          <template v-for="i in 5" :key="i">
            <StarIcon
                :class="i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'"
                class="w-3 h-3"
            />
          </template>
          <span class="ml-1 text-xs text-gray-600 dark:text-gray-400">{{ rating.toFixed(1) }}</span>
        </div>
        <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">
          {{ price }}
        </p>
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
})

defineEmits(['favoriteClick'])
</script>
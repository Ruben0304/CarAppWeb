<!-- components/TheHeader.vue -->
<template>
    <nav class="bg-white dark:bg-gray-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-semibold text-gray-800 dark:text-white">AutoParts</NuxtLink>
          </div>
          <div>
            <button @click="toggleDarkMode" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <sun-icon v-if="isDarkMode" class="h-6 w-6 text-yellow-400" />
              <moon-icon v-else class="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { SunIcon, MoonIcon } from '@heroicons/vue/solid'
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  </script>
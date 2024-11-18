<template>
    <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-lg px-6 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo and App Name -->
          <div class="flex items-center space-x-2">
            <img src="" alt="Logo" class="w-8 h-8" />
            <span class="text-xl font-bold text-gray-800 dark:text-gray-200">CarApp</span>
          </div>
  
          <!-- Navigation Icons -->
          <ul class="flex space-x-12">
            <li v-for="item in navItems" :key="item.name">
              <a 
                :href="item.href" 
                class="flex flex-col items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
              >
                <component :is="item.icon" class="w-6 h-6 mb-1" />
                <span class="text-xs">{{ item.name }}</span>
              </a>
            </li>
          </ul>
  
          <!-- Right Side: Search, Theme Toggle, Auth -->
          <div class="flex items-center space-x-4">
            <button class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" aria-label="Search">
              <Search class="w-5 h-5" />
            </button>
  
            <!-- Theme Toggle -->
            <button 
              @click="toggleDarkMode" 
              class="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Toggle dark mode"
            >
              <span 
                class="absolute left-0 top-0 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center"
                :class="{ 'translate-x-6': isDarkMode }"
              >
                <Sun v-if="!isDarkMode" class="w-4 h-4 text-yellow-500" />
                <Moon v-else class="w-4 h-4 text-indigo-500" />
              </span>
            </button>
  
            <button v-if="!isLoggedIn" @click="login" class="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
              <LogIn class="w-5 h-5 mr-2" />
              <span class="text-sm">Login</span>
            </button>
            <div v-else class="flex items-center space-x-4">
              <span class="text-sm text-gray-800 dark:text-gray-200">Welcome, User</span>
              <button @click="logout" class="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
                <LogOut class="w-5 h-5 mr-2" />
                <span class="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Home, ShoppingBag, MessageCircle, Car, Search, Sun, Moon, LogIn, LogOut } from 'lucide-vue-next'
  const colorMode = useColorMode()
  const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Market', href: '#', icon: ShoppingBag },
    { name: 'Renta', href: '#', icon: Car },
    { name: 'Consultar', href: '#', icon: MessageCircle }

  ]
  
  const isLoggedIn = ref(false)
  const isDarkMode = ref(false)
  
  const login = () => {
    // Implementa tu lógica de inicio de sesión aquí
    isLoggedIn.value = true
  }
  
  const logout = () => {
    // Implementa tu lógica de cierre de sesión aquí
    isLoggedIn.value = false
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  </script>
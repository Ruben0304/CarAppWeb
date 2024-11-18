<template>
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
    <div class="bg-white dark:bg-gray-800 dark:bg-opacity-50 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-lg px-6 py-3 transition-all duration-300 dark:neon-border">
      <!-- Mobile Menu Button -->
      <button
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden absolute right-6 top-4 z-50"
          aria-label="Toggle menu"
      >
        <div class="w-6 h-6 flex flex-col justify-between transform transition-all duration-300">
          <span
              class="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2.5': isMenuOpen }"
          ></span>
          <span
              class="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
              class="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2.5': isMenuOpen }"
          ></span>
        </div>
      </button>

      <div class="flex flex-col lg:flex-row justify-between items-center">
        <!-- Logo and App Name -->
        <div class="flex items-center space-x-2 mb-4 lg:mb-0">
          <img src="" alt="Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-gray-800 dark:text-gray-200">CarApp</span>
        </div>

        <!-- Navigation Items -->
        <div
            class="w-full lg:w-auto fixed lg:static top-0 left-0 h-screen lg:h-auto bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent transition-all duration-300 transform"
            :class="[
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full lg:translate-y-0 opacity-0 lg:opacity-100',
            'lg:transform-none'
          ]"
        >
          <ul class="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 pt-20 lg:pt-0">
            <li v-for="item in navItems" :key="item.name">
              <a
                  :href="item.href"
                  class="flex flex-col items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                  @click="isMenuOpen = false"
              >
                <component :is="item.icon" class="w-6 h-6 mb-1" />
                <span class="text-xs">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>

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

          <!-- Login/Avatar -->
          <div v-if="!isLoggedIn" class="relative">
            <button @click="login" class="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
              <User class="w-5 h-5 mr-2" />
              <span class="text-sm">Login</span>
            </button>
          </div>
          <div v-else class="relative group">
            <button class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white overflow-hidden">
                <img v-if="userAvatar" :src="userAvatar" alt="User avatar" class="w-full h-full object-cover" />
                <User v-else class="w-5 h-5" />
              </div>
              <span class="text-sm text-gray-800 dark:text-gray-200">{{ userName }}</span>
            </button>
            <!-- Dropdown menu -->
            <div class="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
              <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Home, ShoppingBag, MessageCircle, Car, Search, Sun, Moon, User } from 'lucide-vue-next'

const colorMode = useColorMode()
const navItems = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'Market', href: '#', icon: ShoppingBag },
  { name: 'Renta', href: '#', icon: Car },
  { name: 'Consultar', href: '#', icon: MessageCircle }
]

const isLoggedIn = ref(false)
const isDarkMode = ref(false)
const isMenuOpen = ref(false)
const userName = ref('John Doe')
const userAvatar = ref('')

const login = () => {
  isLoggedIn.value = true
  userName.value = 'John Doe'
  // Aquí puedes establecer el avatar del usuario si lo tienes
  // userAvatar.value = 'URL_DEL_AVATAR'
}

const logout = () => {
  isLoggedIn.value = false
  userName.value = ''
  userAvatar.value = ''
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
.dark .neon-border {
  box-shadow: 0 0 5px #fff,
  0 0 10px #fff,
  0 0 15px #0073e6,
  0 0 20px #0073e6,
  0 0 25px #0073e6,
  inset 0 0 5px #fff,
  inset 0 0 10px #0073e6;
}

/* Ensure smooth transitions for mobile menu */
@media (max-width: 1024px) {
  .fixed {
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
}
</style>
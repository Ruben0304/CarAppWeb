<template>
  <nav class="fixed top-5 left-0 w-full z-50 px-4 py-2 transition-all duration-300 ease-in-out">
    <div class="max-w-6xl mx-auto">
      <!-- Container principal con efecto neón -->
      <div
          class="relative bg-bg-gradient-start bg-opacity-20 dark:bg-dark-main
          dark:bg-opacity-20 backdrop-blur-lg rounded-2xl px-4 py-2
          transition-all duration-300
          shadow-[0_0_15px_rgba(88,133,243,0.15)]
          border border-primary/30
          hover:shadow-[0_0_20px_rgba(88,133,243,0.25)]
          animate-fade-in"
      >
        <!-- Desktop Layout -->
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <img src="/assets/img/th.jpeg" alt="Logo" class="w-8 h-8 rounded-full" />
            <span class="text-xl font-bold text-dark-main dark:text-bg-gradient-start">
              CarApp
            </span>
          </div>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex space-x-8">
            <li v-for="item in navItems" :key="item.name">
              <a
                  @click.prevent="navigateTo(item.href)"
                  class="group flex flex-col items-center text-dark-main dark:text-bg-gradient-start/90
                  hover:text-primary dark:hover:text-primary-light
                  transition-all duration-300 cursor-pointer"
              >
                <component
                    :is="item.icon"
                    class="w-6 h-6 mb-1 transition-transform duration-300
                    group-hover:scale-110"
                />
                <span class="text-xs font-medium opacity-90 group-hover:opacity-100">
                  {{ item.name }}
                </span>
              </a>
            </li>
          </ul>

          <!-- Right Side Controls -->
          <div class="hidden md:flex items-center space-x-4">
            <button
                @click="navigateTo('/search')"
                class="text-dark-main dark:text-bg-gradient-start hover:text-primary
                dark:hover:text-primary-light transition-colors duration-300"
                aria-label="Search"
            >
              <Search class="w-5 h-5" />
            </button>

            <!-- Desktop Theme Toggle -->
            <button
                @click="toggleDarkMode"
                class="relative w-12 h-6 rounded-full bg-bg-gradient-end dark:bg-primary-dark
                transition-colors duration-300 focus:outline-none
                focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Toggle dark mode"
            >
              <span
                  class="absolute left-0 top-0 w-6 h-6 rounded-full bg-white
                  shadow-md transform transition-transform duration-300
                  ease-in-out flex items-center justify-center"
                  :class="{ 'translate-x-6': isDarkMode }"
              >
                <Sun v-if="!isDarkMode" class="w-4 h-4 text-primary" />
                <Moon v-else class="w-4 h-4 text-primary-light" />
              </span>
            </button>

            <!-- Auth Buttons -->
            <button
                v-if="!isLoggedIn"
                @click="navigateToAuth"
                class="flex items-center px-4 py-2 rounded-full bg-primary
                text-bg-gradient-start hover:bg-primary-light
                hover:shadow-[0_0_15px_rgba(88,133,243,0.3)]
                transition-all duration-300"
            >
              <LogIn class="w-4 h-4 mr-2" />
              <span class="text-sm">Iniciar sesión</span>
            </button>
            <div v-else class="flex items-center space-x-4">
              <span class="text-sm text-dark-main dark:text-bg-gradient-start">
                Welcome, User
              </span>
              <button
                  @click="logout"
                  class="flex items-center px-4 py-2 rounded-full
                  bg-bg-gradient-end dark:bg-primary-dark
                  text-dark-main dark:text-bg-gradient-start
                  hover:bg-primary/20 dark:hover:bg-primary/40
                  hover:shadow-[0_0_15px_rgba(88,133,243,0.2)]
                  transition-all duration-300"
              >
                <LogOut class="w-4 h-4 mr-2" />
                <span class="text-sm">Logout</span>
              </button>
            </div>
          </div>

          <!-- Mobile Controls -->
          <div class="md:hidden flex items-center space-x-2">
            <!-- Mobile Theme Toggle -->
            <button
                @click="toggleDarkMode"
                class="p-2 rounded-full bg-bg-gradient-end dark:bg-primary-dark
                text-dark-main dark:text-bg-gradient-start
                hover:bg-primary/20 dark:hover:bg-primary/40
                transition-all duration-300"
                aria-label="Toggle dark mode"
            >
              <Sun v-if="!isDarkMode" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
            </button>

            <!-- Mobile Menu Button -->
            <button
                @click="toggleMobileMenu"
                class="text-dark-main dark:text-bg-gradient-start
                hover:text-primary dark:hover:text-primary-light
                transition-colors duration-300"
            >
              <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
            v-show="isMobileMenuOpen"
            class="md:hidden absolute top-full left-0 w-full mt-2
            bg-bg-gradient-start/95 dark:bg-dark-main/95 backdrop-blur-lg
            rounded-xl shadow-lg border dark:border-primary/30
            transition-all duration-300 ease-in-out
            dark:shadow-[0_0_15px_rgba(88,133,243,0.15)]
            animate-slide-up"
        >
          <ul class="p-4 space-y-4">
            <li v-for="item in navItems" :key="item.name">
              <a
                  @click.prevent="navigateTo(item.href)"
                  class="flex items-center space-x-3 text-dark-main
                  dark:text-bg-gradient-start hover:text-primary
                  dark:hover:text-primary-light p-2 rounded-lg
                  hover:bg-primary/10 dark:hover:bg-primary/20
                  transition-all duration-300 cursor-pointer"
              >
                <component :is="item.icon" class="w-5 h-5" />
                <span class="text-sm font-medium">{{ item.name }}</span>
              </a>
            </li>
            <li class="pt-4 border-t dark:border-primary-dark">
              <button
                  v-if="!isLoggedIn"
                  @click="navigateToAuth"
                  class="w-full flex items-center justify-center px-4 py-2
                  rounded-full bg-primary text-bg-gradient-start
                  hover:bg-primary-light
                  hover:shadow-[0_0_15px_rgba(88,133,243,0.3)]
                  transition-all duration-300"
              >
                <LogIn class="w-4 h-4 mr-2" />
                <span class="text-sm">Login</span>
              </button>
              <button
                  v-else
                  @click="logout"
                  class="w-full flex items-center justify-center px-4 py-2
                  rounded-full bg-bg-gradient-end dark:bg-primary-dark
                  text-dark-main dark:text-bg-gradient-start
                  hover:bg-primary/20 dark:hover:bg-primary/40
                  hover:shadow-[0_0_15px_rgba(88,133,243,0.2)]
                  transition-all duration-300"
              >
                <LogOut class="w-4 h-4 mr-2" />
                <span class="text-sm">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import {
  Home,
  ShoppingBag,
  MessageCircle,
  Car,
  Search,
  Sun,
  Moon,
  LogIn,
  LogOut,
  Menu,
  X
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const colorMode = useColorMode()
const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Market', href: '/parts', icon: ShoppingBag },
  { name: 'Renta', href: '/cars', icon: Car },
  { name: 'Consultar', href: '/', icon: MessageCircle }
]

const isLoggedIn = ref(false)
const isDarkMode = ref(false)
const isMobileMenuOpen = ref(false)

const login = () => {
  isLoggedIn.value = true
  isMobileMenuOpen.value = false
}

const logout = () => {
  isLoggedIn.value = false
  isMobileMenuOpen.value = false
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  colorMode.preference = isDarkMode.value ? 'dark' : 'light'
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navigateTo = (path) => {
  router.push(path)
}

const navigateToAuth = () => {
  router.push('/auth')
}

// Sync isDarkMode with colorMode on mount and when colorMode changes
onMounted(() => {
  isDarkMode.value = colorMode.value === 'dark'
})

watch(() => colorMode.value, (newValue) => {
  isDarkMode.value = newValue === 'dark'
})
</script>

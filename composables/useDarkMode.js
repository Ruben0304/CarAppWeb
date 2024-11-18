// composables/useDarkMode.js
import { ref, watch } from 'vue'

export const useDarkMode = () => {
  const isDarkMode = ref(false)

  if (process.client) {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true'
    watch(isDarkMode, (newValue) => {
      localStorage.setItem('darkMode', newValue)
      updateDarkMode(newValue)
    })
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  function updateDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
}
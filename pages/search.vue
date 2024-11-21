<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Búsqueda de Productos y Carros</h1>

      <!-- Barra de búsqueda elegante -->
      <div class="relative mb-12">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar productos o carros..."
            class="w-full py-4 px-6 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-lg"
            @input="performSearch"
        />
        <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
            @click="performSearch"
        >
          <SearchIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Resultados de la búsqueda -->
      <div v-if="searchPerformed">
        <div v-if="filteredProducts.length > 0 || filteredCars.length > 0">
          <!-- Resultados de productos -->
          <div v-if="filteredProducts.length > 0" class="mb-12">
            <h2 class="text-2xl font-semibold text-white mb-4">Carros</h2>
            <ProductGrid :products="filteredProducts" />
          </div>

          <!-- Resultados de carros -->
          <div v-if="filteredCars.length > 0">
            <h2 class="text-2xl font-semibold text-white mb-4">Piezas</h2>
            <ProductGridParts :cars="filteredCars" />
          </div>
        </div>
        <div v-else class="text-center text-white text-xl">
          No se encontraron resultados para "{{ searchQuery }}"
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SearchIcon } from 'lucide-vue-next'

const searchQuery = ref('')
const searchPerformed = ref(false)

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o store)
const allProducts = ref([
  { id: 1, name: "Car Engine Oil Filter", partType: "Engine", price: "$29.99", rating: 4.5 },
  { id: 2, name: "Brake Pads Set", partType: "Brakes", price: "$49.99", rating: 4.8 },
  { id: 3, name: "LED Headlight Bulbs", partType: "Lighting", price: "$39.99", rating: 4.7 },
  { id: 4, name: "Car Battery", partType: "Electrical", price: "$89.99", rating: 4.9 },
])

const allCars = ref([
  { id: 1, name: "Tesla Model 3", type: "Electric", price: "$41,190", rating: 4.8 },
  { id: 2, name: "Toyota Camry", type: "Sedan", price: "$25,295", rating: 4.5 },
  { id: 3, name: "Ford F-150", type: "Truck", price: "$29,990", rating: 4.7 },
  { id: 4, name: "Honda CR-V", type: "SUV", price: "$26,400", rating: 4.6 },
])

const filteredProducts = computed(() => {
  if (!searchQuery.value) return []
  return allProducts.value.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.partType.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredCars = computed(() => {
  if (!searchQuery.value) return []
  return allCars.value.filter(car =>
      car.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const performSearch = () => {
  searchPerformed.value = true
}
</script>
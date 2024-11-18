<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center text-red-500 py-8">
      <p>Error loading products. Please try again later.</p>
      <button
          @click="fetchProducts"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Retry
      </button>
    </div>

    <!-- Products Grid -->
    <div
        v-else
        class="flex justify-center items-center min-h-screen"
    >
      <div class="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
            v-for="product in products"
            name="Nombre del producto"
            partType="Tipo de parte"
            imageUrl="https://pngimg.com/d/engine_PNG20.png"
            price="$99.99"
            :isFavorite="false"
            :rating="4.5"
            @favoriteClick="handleFavoriteClick"
        />
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!isLoading && !error && products.length === 0" class="text-center py-8 text-gray-500">
      No products found.
    </div>
  </div>
</template>

<script setup>
import ProductCard  from './ProductCard.vue'
import { useProducts } from '../composables/useProducts'

const { products, isLoading, error, fetchProducts } = useProducts()

const handleFavoriteClick = (productId) => {
  // Aquí iría la lógica para manejar el favorito
  console.log(`Toggle favorite for product ${productId}`)
}
</script>

<template>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
      <ProductCard
          v-for="(product, index) in products"
          :key="index"
          v-bind="product"
          @favorite-click="toggleProductFavorite(index)"
      />
    </div>

</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    name: "Car Engine Oil Filter",
    partType: "Engine",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$29.99",
    isFavorite: false,
    rating: 4.5
  },
  {
    name: "Brake Pads Set",
    partType: "Brakes",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$49.99",
    isFavorite: false,
    rating: 4.8
  },
  {
    name: "LED Headlight Bulbs",
    partType: "Lighting",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$39.99",
    isFavorite: false,
    rating: 4.7
  },
  {
    name: "Car Battery",
    partType: "Electrical",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$89.99",
    isFavorite: false,
    rating: 4.9
  },
  {
    name: "Spark Plugs Set",
    partType: "Ignition",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$19.99",
    isFavorite: false,
    rating: 4.6
  },
  {
    name: "Air Filter",
    partType: "Engine",
    imageUrl: "https://pngimg.com/d/engine_PNG20.png",
    price: "$14.99",
    isFavorite: false,
    rating: 4.7
  }
])

const toggleProductFavorite = (index) => {
  products.value[index].isFavorite = !products.value[index].isFavorite
}
</script>
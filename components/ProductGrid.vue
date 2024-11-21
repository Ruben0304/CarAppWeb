<template>
  <div class="min-h-screen  sm:px-6 lg:px-0">
    <div class="w-full mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CarCard
            v-for="(car, index) in cars"
            :key="index"
            :car="car"
            @toggle-favorite="toggleFavorite(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarCard from './CarCard.vue'

const cars = ref([
  {
    name: "Porsche 718 Cayman S",
    type: "Coupé",
    image: "https://pngimg.com/d/maserati_PNG28.png",
    seats: 2,
    transmission: "Manual",
    pricePerDay: 400,
    isFavorite: false
  },
  {
    name: "BMW M2 Competition",
    type: "Coupé",
    image: "https://pngimg.com/d/maserati_PNG28.png",
    seats: 4,
    transmission: "Automatic",
    pricePerDay: 350,
    isFavorite: false
  },
  {
    name: "Audi RS5 Sportback",
    type: "Sportback",
    image: "https://pngimg.com/d/maserati_PNG28.png",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 450,
    isFavorite: false
  },
  {
    name: "Mercedes-AMG GT",
    type: "Coupé",
    image: "https://pngimg.com/d/maserati_PNG28.png",
    seats: 2,
    transmission: "Automatic",
    pricePerDay: 500,
    isFavorite: false
  }
])

const toggleFavorite = (index) => {
  cars.value[index].isFavorite = !cars.value[index].isFavorite
}
</script>
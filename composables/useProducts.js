import { ref, onMounted } from 'vue'

export const useProducts = () => {
  const products = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchProducts = async () => {
    try {
      isLoading.value = true
      // Aquí irían tus llamadas a la API real
      // Simulando datos de ejemplo
      products.value = [
        {
          id: 1,
          name: 'Brake Pads',
          partType: 'Braking System',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$129.99',
          isFavorite: false,
          rating: 4.5
        },
        {
          id: 2,
          name: 'Oil Filter',
          partType: 'Engine',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$24.99',
          isFavorite: true,
          rating: 4.0
        },
        {
          id: 3,
          name: 'Spark Plugs Set',
          partType: 'Ignition',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$45.99',
          isFavorite: false,
          rating: 4.8
        },
        {
          id: 4,
          name: 'Air Filter',
          partType: 'Engine',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$19.99',
          isFavorite: false,
          rating: 4.2
        },
        {
          id: 5,
          name: 'Alternator',
          partType: 'Electrical',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$299.99',
          isFavorite: true,
          rating: 4.7
        },
        {
          id: 6,
          name: 'Timing Belt',
          partType: 'Engine',
          imageUrl: 'https://pngimg.com/d/engine_PNG20.png',
          price: '$89.99',
          isFavorite: false,
          rating: 4.4
        }
      ]
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    fetchProducts()
  })

  return {
    products,
    isLoading,
    error,
    fetchProducts
  }
}

<!-- pages/product/[id].vue -->
<template>
    <div :class="{ 'dark': isDarkMode }">
      <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
        <TheHeader />
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div v-if="product" class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                {{ product.name }}
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
                Product details and seller information.
              </p>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700">
              <dl>
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Price
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    ${{ product.price.toFixed(2) }}
                  </dd>
                </div>
                <div class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Description
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {{ product.description }}
                  </dd>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Seller
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {{ product.seller.name }}
                  </dd>
                </div>
                <div class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Seller Email
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {{ product.seller.email }}
                  </dd>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Seller Rating
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {{ product.seller.rating }}/5
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div v-else class="text-center py-12">
            <p class="text-xl text-gray-600 dark:text-gray-300">Product not found</p>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const { getProductById } = useProducts()
  const { isDarkMode } = useDarkMode()
  
  const product = ref(getProductById(route.params.id))
  </script>
// nuxt.config.ts


export default defineNuxtConfig({
  // Fecha de compatibilidad de Nuxt
  compatibilityDate: '2024-04-03',

  // Activar devtools para desarrollo
  devtools: { enabled: true },
  
  // Módulos necesarios
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  // Configuración de la aplicación
  app: {
    head: {
      title: 'Auto Parts Ecommerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Encuentra las mejores piezas para tu auto' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

 
  // Configuración de componentes automáticos
  components: {
    dirs: [
      '~/components',
      '~/components/ui'
    ]
  },

  // Configuración del modo de renderizado
  ssr: true,

  // Configuración de desarrollo
  typescript: {
    strict: true
  },

 
  // Variables de entorno públicas
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
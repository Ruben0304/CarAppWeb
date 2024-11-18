// nuxt.config.ts


export default defineNuxtConfig({
    // Fecha de compatibilidad de Nuxt
    compatibilityDate: '2024-04-03',

    // Activar devtools para desarrollo
    devtools: {enabled: true},

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
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Encuentra las mejores piezas para tu auto'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/assets/img/th.jpeg'}
            ]
        }
    },
    pwa: {
        manifest: {
            name: 'CarApp',
            short_name: 'App',
            lang: 'es',
            icons: [{
                src: '/assets/img/th.jpeg',
                sizes: '192x192',
                type: 'image/jpeg'
            }, {src: '/assets/img/th.jpeg', sizes: '512x512', type: 'image/jpeg'}],
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#5885F3'
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
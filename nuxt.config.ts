// nuxt.config.ts


export default defineNuxtConfig({
    // Fecha de compatibilidad de Nuxt
    compatibilityDate: '2024-04-03',

    // Activar devtools para desarrollo
    devtools: {enabled: true},

    // Módulos necesarios
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light'
    },
    app: {
        head: {
            title: 'CarApps - Tienda de Autos en Cuba',
            meta: [{charset: 'utf-8'}, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                name: 'description',
                content: 'CarApps: La mejor aplicación en Cuba para compra y venta de piezas de vehículos, renta de autos y consultas con mecánicos. Encuentra todo lo que necesitas en un solo lugar.'
            }, {name: 'author', content: 'CarApps Team'}, {
                name: 'keywords',
                content: 'CarApps, Cuba, compra de piezas, venta de piezas, renta de vehículos, consultas mecánicas, autos, mecánicos, vehículos'
            }],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/assets/img/th.jpeg'}]
        }
    },
    pwa: {
        manifest: {
            name: 'CarApps - La Mejor Aplicación para Autos en Cuba',
            short_name: 'CarApps',
            lang: 'es',
            description: 'CarApps: La mejor aplicación en Cuba para compra y venta de piezas de vehículos, renta de autos y consultas con mecánicos.',
            icons: [{src: '/assets/img/th.jpeg', sizes: '192x192', type: 'image/jpeg'}, {
                src: '/assets/img/th.jpeg',
                sizes: '512x512',
                type: 'image/jpeg'
            }],
            start_url: '/',
            display: 'standalone',
             background_color: '#ffffff',
            theme_color: '#5885F3'
        }
    },
    sitemap: {
        hostname: 'https://car-app-web-chi.vercel.app/', routes: async () => {
            return [
                {url: '/', changefreq: 'daily'},
                {url: '/parts', changefreq: 'monthly'},
                {url: '/cars', changefreq: 'monthly'},
                {url: '/search', changefreq: 'monthly'},
                {url: '/auth', changefreq: 'monthly'}]
        }
    },robots: {
        UserAgent: '*', Disallow: '/auth', Allow: '/', Allow: '/parts', Allow: '/cars', Allow: '/search', Sitemap: 'https://car-app-web-chi.vercel.app/sitemap.xml' } ,

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
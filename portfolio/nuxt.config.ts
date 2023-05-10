// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
            protocol: 'ws',
            host: 'localhost'
            }
        },
    },

    modules: [
        '@vueuse/nuxt',
    ],

    css: ['~/assets/sass/app.scss']
})

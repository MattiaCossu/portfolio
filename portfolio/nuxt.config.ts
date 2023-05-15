// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
          hmr: {
            protocol: 'ws',
          }
        }
    },

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts'
    ],

    googleFonts: {
      families: {
        'Fira Code': [100, 200, 300, 400, 500, 600, 700],
        Raleway: {
          wght: [100, 450, 700],
          ital: [100]
        },
      }
    },

    css: ['~/assets/sass/app.scss']
})

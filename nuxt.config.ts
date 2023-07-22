// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@anu-vue/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt'
  ],
  app: {
    head: {
      title: 'Vagg',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  css: ['~/assets/scss/main.scss'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr']
  },
  anu: {
    themes: {
      light: {
        colors: {
          primary: '27, 50%, 32%',
          secondary: '223, 26%, 21%',
          success: '139, 35%, 47%',
          info: '199, 84%, 48%',
          warning: '34, 87%, 60%',
          danger: '2, 93%, 64%'
        }
      }
    }
  }
})

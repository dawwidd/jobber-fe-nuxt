export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jobber-fe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 8000
  },

  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/vuetify']
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/bootstrap-vue'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseUrl: 'http://localhost:3000',
    credentials: true
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          required: false,
          type: false
        },
        // refreshToken: {
        //   property: 'refreshToken',
        //   data: 'refreshToken',
        //   maxAge: 60 * 60 * 24
        // },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          user: { url: 'auth', method: 'get', propertyName: 'data' },
          // refresh: { url: 'auth/refresh', method: 'get' },
          logout: { url: 'auth/logout', method: 'post'}
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    }
  }
}

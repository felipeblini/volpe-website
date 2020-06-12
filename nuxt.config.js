export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F39E27', throttle: 0, height: '6px' },
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/global.scss'],
  styleResources: {
    scss: ['~/assets/scss/_colors.scss', '~/assets/scss/_mixins.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/global-scripts', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    // '@nuxt/typescript-build'
  ],

  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://volpeambiental.com.br/wp-json/wp/v2/posts'
  },
  /*
  ** Server Middleware endpoints
  */
  serverMiddleware: [
    '~/api/contact',
  ],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { }
  }
}

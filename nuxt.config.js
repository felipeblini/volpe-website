import bodyParser from 'body-parser'

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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/global.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
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
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/contact': {
      target: process.env.URL,
      pathRewrite: { '^/api/': '/' },
      changeOrigin: true,
      onProxyReq: function log(proxyReq, req, res) {
        console.log({ bodyyyyyyyyyyyyyyyyyyyyyyyyyyy: req.body })
        console.log(proxyReq.getHeader('Content-Type'))

        if (!req.body || !Object.keys(req.body).length) {
          return
        }

        const contentType = proxyReq.getHeader('Content-Type')
        const writeBody = (bodyData) => {
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
          proxyReq.write(bodyData)
        }
        if (contentType.includes('application/json') || contentType.includes('application/x-www-form-urlencoded')) {
          writeBody(JSON.stringify(req.body))
        }
      }
    }
  },
  serverMiddleware: [
    '~/api/contact',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { }
  }
}

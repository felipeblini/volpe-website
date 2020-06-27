const axios = require('axios');

console.log({ ENV: process.env.NODE_ENV })

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
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F39E27', throttle: 0 },
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
    { src: '~/plugins/global-scripts', ssr: false },
    '~/plugins/vue-lazyload.client.js',
    '~/plugins/vue-js-modal.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics',
    '@nuxtjs/device',
    '@nuxt/http',
    // 'nuxt-responsive-loader',
    //'nuxt-purgecss',
  ],

  http: {
    // HTTP options here
    baseURL: '/'
  },

  sitemap: {
    hostname: "https://volpeambiental.com.br",
    routes: async () => {
      const { data: servicesData } = await axios.get("https://volpeambiental.com.br/wp-json/wp/v2/posts?categories=2");

      const routes = servicesData.map(service => {
        return {
          url: `/servicos/${service.id}/${service.title.rendered
            .toLowerCase()
            .replace(/ /g, '-')}`,
          priority: 0.9,
          lastmod: service.date
        }
      });

      routes.push('/quemsomos/construção-civil-reforma-demolição-coleta-de-residuos');

      return routes
    }
  },

  webfontloader: {
    google: {
      families: ["Raleway:400,900"]
    }
  },

  googleAnalytics: {
    id: "UA-169431629-1"
  },

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
    // analyze: true,
    // publicPath: 'http://volpeambiental.com.br/site',
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
    extend(config, ctx) {
      config.module.rules.unshift({
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            // disable: isDev,
            placeholder: true,
            quality: 65,
            placeholderSize: 30,
            name: 'img/[name].[hash:hex:7].[width].[ext]',
            adapter: require('responsive-loader/sharp')
          }
        }
      })
      // remove old pattern from the older loader
      config.module.rules.forEach(value => {
        if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // reduce to svg and webp, as other images are handled above
          value.test = /\.(svg|webp)$/
          // keep the configuration from image-webpack-loader here unchanged
        }
      })

    }
  }
}

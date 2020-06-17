const axios = require('axios');

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
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    '@nuxtjs/device',
    '@nuxt/http',
  ],

  sitemap: {
    hostname: "https://volpeambiental.com.br",
    routes: async () => {
      const { data: servicesData } = await axios.get("https://volpeambiental.com.br/wp-json/wp/v2/posts?categories=2");

      console.log({ servicesData });

      return servicesData.map(service => {
        console.log({ service });
        return {
          url: `/servicos/${service.id}/${service.title.rendered
            .toLowerCase()
            .replace(/ /g, '-')}`,
          priority: 0.9,
          lastmod: service.date
        }
      });
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

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "http://volpeambiental.com.br/sitemap.xml"
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
  publicPath: process.env.NODE_ENV === 'production'
    ? '/site/'
    : '/',
  /*
  ** Build configuration
  */
  build: {
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
    extend(config, ctx) { }
  }
}

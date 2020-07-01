// nuxt config

export default {
  mode: 'spa',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
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
  loading: { color: '#0000ff' },
  css: [
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    middleware: ['auth']
  },
  plugins: [
    { src: '@plugins/axios'}
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/router', {
      path: './router'
    }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy'
  ],
  axios: {
    baseURL: '/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sign-in', method: 'post', propertyName: 'data.token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: false // { url: '/auth/user-info', method: 'post', propertyName: 'data' }
        },
        tokenName: 'X-IDevToken',
        tokenRequired: true,
        tokenType: false
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/',
      home: '/dashboard'
    },
    localStorage: false,
    cookie: {
      prefix: 'idev.',
      options: {
        path: '/',
        maxAge: 86400
      }
    }
  },
  proxy: {
    '/api': {
      target: 'https://api.dilikpulatov.com/client-api',
      secure: false,
      pathRewrite: { '^/api': '' }
    },
  },
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true
  },
  build: {
    extend (config, ctx) {
    }
  }
}

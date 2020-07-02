import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '', redirect: {name: 'dashboard'} },
      {
        path: '/dashboard',
        name: 'dashboard',
        component:() => import('@/pages/dashboard/index').then(m => m.default || m),
      },
      {
        path: '/test',
        name: 'test',
        component:() => import('@/pages/dashboard/test').then(m => m.default || m),
      },
      {
        path: '/users',
        name: 'users',
        component:() => import('@/pages/dashboard/Users.vue').then(m => m.default || m),
        
      },
      {
        path: '/wievs',
        name: 'wievs',
        component:() => import('@/pages/dashboard/Wievs.vue').then(m => m.default || m),
      },
      {
        path: '/auth/login',
        name: 'auth_login',
        component:() => import('@/pages/auth/login').then(m => m.default || m)
      },
      /*{
        path: '/error',
        name: 'error',
        component:() => import('@/pages/error/index').then(m => m.default || m),
      },
      {path: '*', redirect: {name: "error"}}*/
    ],
    scrollBehavior (to, from, savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (savedPosition) {
            resolve(savedPosition)
          } else {
            resolve({ x: 0, y: 0 })
          }
        }, 500)
      })
    }
  })

  router.beforeEach((to, from, next) => {
    next()
  })

  return router
}

import Vue from 'vue'
import Router from 'vue-router'

import Meta from 'vue-meta'
import {sync} from 'vuex-router-sync'
import NProgress from 'nprogress'

import store from '@/store'
import routes from '@/router/routes'

Vue.use(Router)
Vue.use(Meta)

//https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if user is not logged in and trying to access a restricted page
//   const publicPages = ['/authenticate', '/']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')

//   if (authRequired && !loggedIn) return next('/authenticate')

//   next()
// })

router.beforeEach((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start()
  }

  if (routeTo.matched.some(record => record.meta.requiresSuperAdmin)) {
    if (!isLoggedIn()) {
      next({
        name: 'welcome',
      })
    } else {
      if (isSuperAdmin()) {
        next()
      } else {
        next({
          name: 'unauthorized',
        })
      }
    }
  } else if (routeTo.matched.some(record => record.meta.requiresAdmin)) {
    if (!isLoggedIn()) {
      next({
        name: 'welcome',
      })
    } else {
      if (isSuperAdmin() || isAdmin()) {
        next()
      } else {
        next({
          name: 'unauthorized',
        })
      }
    }
  } else if (routeTo.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        name: 'welcome',
      })
    } else {
      next()
    }
  } else if (routeTo.matched.some(record => record.meta.requiresVisitor)) {
    if (isLoggedIn()) {
      next({
        name: 'dashboard',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach(() => {
  NProgress.done()
})

function isLoggedIn() {
  if (!store.state.user && window.user) {
    store.commit('auth/SET_USER_DATA', window.user)
  }
  return store.getters['auth/loggedIn']
}
function isSuperAdmin() {
  const userTypes = store.getters['auth/userTypes']
  return userTypes.includes('Super Admin')
}
function isAdmin() {
  const userTypes = store.getters['auth/userTypes']
  return (
    userTypes.includes('Super Admin') ||
    userTypes.includes('Org Admin') ||
    userTypes.includes('Admin')
  )
}

sync(store, router)

export default router

// // https://css-tricks.com/lazy-load-routes-in-vue-with-webpack-dynamic-comments/.

// const routeOptions = [
//   {path: '/', name: 'Home'},
//   {path: '/about', name: 'About'},
//   {path: '/login', name: 'Login'},
// ]

// const routes = routeOptions.map(route => {
//   return {
//     ...route,
//     component: () =>
//       import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`),
//   }
// })

// const router = new VueRouter({
//   routes,
// })

// https://css-tricks.com/lazy-load-routes-in-vue-with-webpack-dynamic-comments/.

const routeOptions = [
  {path: '/', name: 'Home'},
  {path: '/about', name: 'About'},
  {path: '/login', name: 'Login'},
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`),
  }
})

const router = new VueRouter({
  routes,
})

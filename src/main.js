import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import '@/plugins'
import '@/components/_global'
import '@/directives/_global'
import '@/assets/css/tailwind.css'

Vue.use(require('vue-shortkey'))

Vue.config.productionTip = false

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
  },
}).$mount('#app')

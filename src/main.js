import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import {Model} from 'vue-api-query'

import NodeIntersect from '@/directives/NodeIntersect'

import '@/plugins'
import '@/components/_global'

import '@/assets/css/tailwind.css'

Vue.use(require('vue-shortkey'))
Vue.config.productionTip = false

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$axios = window.axios = axios

Vue.directive('NodeIntersect', NodeIntersect)

// inject global axios instance as http client to Model
Model.$http = axios

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
    //
    axios.interceptors.response.use(
      response => response,
      error => {
        console.log(error.response)
        if (error.response.status === 401) {
          this.$router.push('/')
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      },
    )
  },
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'
import {Model} from 'vue-api-query'

// import camelcaseKeys from 'camelcase-keys'
// import snakecaseKeys from 'snakecase-keys'

// axios.defaults.transformResponse = [
//   (data, headers) => {
//     if (data && headers['content-type'].includes('application/json')) {
//       return camelcaseKeys(JSON.parse(data), {deep: true})
//     }
//   },
// ]

// axios.defaults.transformRequest = [
//   (data, headers) => {
//     if (data && headers['content-type'].includes('application/json')) {
//       return JSON.stringify(snakecaseKeys(data, {deep: true}))
//     }
//   },
// ]

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$axios = window.axios = axios
// inject global axios instance as http client to Model
Model.$http = axios

export default axios.create({
  baseURL: process.env.apiURL || 'https://api.victortolbert.com',
})
// import axios from '~/plugins/axios'

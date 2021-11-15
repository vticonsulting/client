import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'https://api.victortolbert.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  all() {
    return apiClient.get('users')
  },
  getUsers() {
    return apiClient.get('users')
  },
  getUser(id) {
    return apiClient.get(`users/${id}`)
  },
  postUser(user) {
    return apiClient.post('users', user)
  },
}

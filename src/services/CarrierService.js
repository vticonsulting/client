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
  getCarriers() {
    return apiClient.get('carriers')
  },
  getCarrier(id) {
    return apiClient.get('carriers/' + id)
  },
  postCarrier(carrier) {
    return apiClient.post('carriers', carrier)
  },
}

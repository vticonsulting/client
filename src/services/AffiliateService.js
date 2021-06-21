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
  getAffiliates(perPage, page) {
    return apiClient.get('/affiliates?_limit=' + perPage + '&_page=' + page)
  },
  getAffiliate(id) {
    return apiClient.get('/affiliates/' + id)
  },
  postAffiliate(affiliate) {
    return apiClient.post('/affiliates', affiliate)
  },
}

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
  getProjects(perPage, page) {
    return apiClient.get('projects')
  },
  getProject(id) {
    return apiClient.get('projects/' + id)
  },
  postProject(project) {
    return apiClient.post('projects', project)
  },
}

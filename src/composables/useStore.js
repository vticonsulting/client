import {reactive, readonly} from '@vue/composition-api'
import moment from 'moment'
import axios from 'axios'
import 'isomorphic-fetch'

const initialPostState = () => ({
  all: {},
  ids: [],
  loaded: false,
})

export const initialState = () => ({
  posts: initialPostState(),
})

class Store {
  constructor(initialState) {
    this.state = reactive(initialState)
  }

  getState() {
    return readonly(this.state)
  }

  async fetchPosts() {
    // using fetch
    // const data = await fetch('http://localhost:8080/posts').then(response => response.json()).then(data => data)
    // const {data} = await axios.get('http://my-json-server.typicode.com/victortolbert/my-json-server/posts')
    const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/posts`)
    // transformRequest
    // transformResponse
    // headers
    // credentials, jwt
    for (const post of data) {
      if (!this.state.posts.ids.includes(post.id.toString())) {
        this.state.posts.ids.push(post.id.toString())
      }

      this.state.posts.all[post.id] = {...post, created: moment(post.created)}
    }

    this.state.posts.loaded = true
  }
}

export const useStore = new Store(initialState())

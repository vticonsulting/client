<template>
  <main class="flex-1 bg-secondary-100">
    <p v-if="false">
      {{ $t('edit_volunteer') }} / {{ $t('edit_advocate') }} |
      {{ $t('edit_family_members') }}
    </p>

    <section>
      <pre>{{ person }}</pre>
    </section>
  </main>
</template>

<script>
import {data2} from '@/__mocks__'

export default {
  props: ['person'],
  // middleware: 'guest',
  data() {
    return {
      data2,
      data: [],
      keepFirst: false,
      openOnFocus: false,
      name: '',
      selected: null,
      minutesGranularity: 15,
      hoursGranularity: 2,
      file: null,
      dropFiles: [],
      isLoading: false,
      isFetching: false,
      recipe: {
        title: null,
        author: null,
        time: 5,
        image: null,
        servings: 1,
        difficulty: 'easy',
        procedure: '',
      },
      errors: {
        title: null,
        author: null,
        image: null,
        procedure: null,
        time: null,
        servings: null,
      },
      page: 1,
      totalPages: 1,
    }
  },
  computed: {
    filteredDataObj() {
      return this.data2.filter(option => {
        return option.user.first_name
          .toString()
          .toLowerCase()
          .includes(this.name.toLowerCase())
      })
    },
  },
  watch: {
    file(newFile) {
      this.recipe.image = window.URL.createObjectURL(newFile)
    },
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
    _validateRecipe() {
      let isValid = true
      for (const key in this.errors) {
        this.errors[key] = null
        if (!this.recipe[key]) {
          this.errors[key] = 'This field cannot be empty'
          isValid = false
        }
        if ((key === 'servings' || key === 'time') && this.recipe[key] < 1) {
          this.errors[key] = 'This field should be at least 1'
          isValid = false
        }
      }
      return isValid
    },
    addRecipe() {
      this.isLoading = true
      if (this._validateRecipe()) {
        setTimeout(() => {
          this.$store.commit('addRecipe', this.recipe)
          this.recipe = {
            title: '',
            author: '',
            time: 5,
            image: null,
            servings: 1,
            difficulty: 'easy',
            procedure: '',
          }
          this.isLoading = false
        }, 2000)
      } else {
        this.isLoading = false
      }
    },
    handleIconClick() {
      // console.log('handleIconClick')
    },
    handleIconRightClick() {
      // console.log('handleIconRightClick')
    },
    getAsyncData(name) {
      // String update
      if (this.name !== name) {
        this.name = name
        this.data = []
        this.page = 1
        this.totalPages = 1
      }
      // String cleared
      if (!name.length) {
        this.data = []
        this.page = 1
        this.totalPages = 1
        return
      }
      // Reached last page
      if (this.page > this.totalPages) {
        return
      }
      this.isFetching = true
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}&page=${this.page}`,
      )
        .then(response => response.json())
        .then(data => {
          data.results.forEach(item => this.data.push(item))

          this.page++
          this.totalPages = data.total_pages
        })
        .catch(error => {
          throw error
        })
        .finally(() => {
          this.isFetching = false
        })
    },
    getMoreAsyncData() {
      this.getAsyncData(this.name)
    },
  },
}
</script>

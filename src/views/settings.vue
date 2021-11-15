<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('settings') }}</BasePageHeading>

    <section v-if="false" class="max-w-xl p-8">
      <OField :label="$t('find_movie')">
        <OAutocomplete
          :data="movies"
          :placeholder="$t('enter_movie_name')"
          field="title"
          clearable
          size="medium"
          input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          open-on-focus
          :loading="isFetching"
          check-infinite-scroll
          :debounce-typing="500"
          @typing="getAsyncData"
          @select="option => (selected = option)"
          @infinite-scroll="getMoreAsyncData"
        >
          <template #default="{ option }">
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class>
                  <img width="120" :src="`https://image.tmdb.org/t/p/w500/${option.poster_path}`" />
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold">{{ option.title }}</h4>
                <p class="mt-1">{{ option.overview }}</p>
                <small>
                  {{ $t('released_at') }} {{ option.release_date }},
                  {{ $t('rated') }}
                  <b>{{ option.vote_average }}</b>
                </small>
              </div>
            </div>
          </template>
          <template #footer>
            <span v-show="page > totalPages" class="has-text-grey">{{ $t('no_movies_found') }}</span>
          </template>
        </OAutocomplete>

        <div v-if="selected" class="mt-4">
          <span
            class="text-xs font-semibold tracking-widest uppercase border-b"
          >{{ $t('selected') }}</span>
          <p class="mt-1 font-mono text-xs">{{ selected }}</p>
        </div>
      </OField>
    </section>
  </main>
</template>

<script>
import { movies } from '@/__mocks__'

export default {
  data() {
    return {
      movies,
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

<style>
.ex-center {
  text-align: center;
}
.o-autocomplete .o-autocomplete-menu .o-autocomplete-item {
  @apply whitespace-normal;
}
</style>

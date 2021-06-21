<template>
  <main class="flex-1">
    <BasePageHeading>Movies</BasePageHeading>
    <section class="max-w-screen-md p-8">
      <OField label="Find a movie">
        <OAutocomplete
          :data="data"
          placeholder="e.g. Friday"
          field="title"
          clearable
          size="medium"
          open-on-focus
          :loading="isFetching"
          check-infinite-scroll
          :debounce-typing="500"
          @typing="getAsyncData"
          @select="option => (selected = option)"
          @infinite-scroll="getMoreAsyncData"
        >
          <template v-slot:default="{option}">
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class="">
                  <img
                    width="120"
                    :src="`https://image.tmdb.org/t/p/w500/${option.poster_path}`"
                  />
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold">{{ option.title }}</h4>
                <p class="mt-1">
                  {{ option.overview }}
                </p>
                <small>
                  Released at {{ option.release_date }}, rated
                  <b>{{ option.vote_average }}</b>
                </small>
              </div>
            </div>
          </template>
          <template v-slot:footer>
            <span v-show="page > totalPages" class="has-text-grey">
              Thats it! No more movies found.
            </span>
          </template>
        </OAutocomplete>

        <div v-if="selected" class="mt-4">
          <span class="text-xs font-semibold tracking-widest uppercase border-b"
            >Selected</span
          >
          <p class="mt-1 font-mono text-xs">{{ selected }}</p>
        </div>
      </OField>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      selected: null,
      isFetching: false,
      name: '',
      page: 1,
      totalPages: 1,
    }
  },
  methods: {
    handleIconClick() {
      console.log('handleIconClick')
    },
    handleIconRightClick() {
      console.log('handleIconRightClick')
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
.o-autocomplete .o-autocomplete-menu .o-autocomplete-item {
  @apply whitespace-normal;
}
</style>

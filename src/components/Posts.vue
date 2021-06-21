<script>
import {defineComponent, computed, onMounted, ref} from '@vue/composition-api'
import {useStore} from '@/composables/useStore'
import {filterPosts} from '@/utilities/postUtils.js'

export default defineComponent({
  setup() {
    const periods = ['today', 'this week', 'this month']
    const selectedPeriod = ref('today')
    const store = useStore()

    onMounted(async () => {
      if (!store.getState().posts.loaded) {
        await store.fetchPosts()
      }
    })

    const allPosts = computed(() =>
      store.getState().posts.ids.reduce((acc, id) => {
        const post = store.getState().posts.all[id]
        return acc.concat(post)
      }, []),
    )

    const posts = computed(() =>
      filterPosts(allPosts.value, selectedPeriod.value),
    )
    const setPeriod = period => (selectedPeriod.value = period)

    return {
      store,
      periods,
      setPeriod,
      posts,
    }
  },
})
</script>

<template>
  <section class="p-8 bg-opacity-50 shadow bg-primary-500 lg:rounded-lg">
    <a
      v-for="period in periods"
      :key="period"
      data-testid="period"
      :class="{'is-active': period === selectedPeriod}"
      @click="setPeriod(period)"
    >
      {{ period }}
    </a>

    <div
      v-for="post in posts"
      :key="post.id"
      data-testid="post"
      class="panel-block"
    >
      <div>
        <a>{{ post.title }}</a>
        <div>{{ post.created.format('Do MMM') }}</div>
      </div>
    </div>
  </section>
</template>

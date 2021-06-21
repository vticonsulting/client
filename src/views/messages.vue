<template>
  <div class="flex px-8 mt-16 space-x-8">
    <article class="w-full">
      <!-- Message Cards -->
      <!-- <MessageCard
          v-for="message in message.messages"
          :key="message.id"
          :message="message"
        /> -->

      <div class="grid grid-flow-col space-x-6 border-red-600 auto-cols-fr">
        <div class="p-6 bg-gray-400 rounded-xl">1</div>
        <div class="p-6 bg-gray-400 rounded-2xl">
          <img class="w-16 h-16 transform rotate-3" src="/img/logo.png" />
        </div>
        <div class="p-6 bg-gray-400 rounded-3xl">3</div>
      </div>

      <!-- Use `outline-white` on dark backgrounds -->
      <div class="p-6 bg-gray-900">
        <button class="px-4 py-1 text-white rounded focus:outline-white">
          Outline Button
        </button>
      </div>

      <!-- Use `outline-black` on light backgrounds -->
      <div class="p-6 bg-gray-100">
        <button class="px-4 py-1 rounded focus:outline-black">
          Outline Button
        </button>
      </div>

      <span class="text-4xl"> 🧱 </span>
      <!-- <MessageTable :messages="$store.state.message.messages" /> -->

      <template v-if="page != 1">
        <RouterLink
          :to="{name: 'messages', query: {page: page - 1}}"
          rel="prev"
        >
          Prev Page
        </RouterLink>
        <template v-if="hasNextPage"> | </template>
      </template>

      <RouterLink
        v-if="hasNextPage"
        :to="{name: 'messages', query: {page: page + 1}}"
        rel="next"
      >
        Next Page
      </RouterLink>
    </article>

    <!-- Sidebar -->
    <aside class="w-1/5">
      <nav>
        <!-- Inbox  -->
        <a
          href="#"
          class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
          aria-current="page"
        >
          <!-- Heroicon name: inbox -->
          <svg
            class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <span class="truncate"> Inbox </span>
          <span
            class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full bg-white transition ease-in-out duration-150"
          >
            5
          </span>
        </a>

        <!-- Projects -->
        <a
          href="#"
          class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
        >
          <!-- Heroicon name: folder -->
          <svg
            class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span class="truncate"> Projects </span>
          <span
            class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full bg-gray-100 group-hover:bg-gray-200 group-focus:bg-gray-200 transition ease-in-out duration-150"
          >
            19
          </span>
        </a>
      </nav>
    </aside>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import store from '@/store'
// import MessageCard from '@/components/MessageCard'
// import MessageTable from '@/components/MessageTable'

function getPageMessages(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('message/fetchMessages', {
      page: currentPage,
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  metaInfo: {
    title: 'Messages',
  },
  components: {
    // MessageCard,
    // MessageTable,
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageMessages(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageMessages(routeTo, next)
  },
  mounted() {
    // console.log(this.$attrs)
  },
  computed: {
    hasNextPage() {
      return this.message.messagesTotal > this.page * this.message.perPage
    },
    ...mapState(['message', 'user']),
  },
}
</script>

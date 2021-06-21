<script>
import {defineComponent, ref} from '@vue/composition-api'
import NotificationsSidebar from '@/components/patterns/NotificationsSidebar'

export default defineComponent({
  setup() {
    const showNotifications = ref(false)

    return {
      showNotifications,
    }
  },
  components: {
    NotificationsSidebar,
  },
})
</script>

<template>
  <button
    @click="showNotifications = !showNotifications"
    class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
  >
    <span class="sr-only">View notifications</span>
    <svg
      class="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        v-if="showNotifications"
        fill="currentColor"
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
      />
      <path
        v-if="!showNotifications"
        fill="currentColor"
        d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z"
      />
    </svg>
    <Portal v-if="showNotifications" to="overlays">
      <NotificationsSidebar
        :show="showNotifications"
        @close="showNotifications = false"
      />
    </Portal>
  </button>
</template>

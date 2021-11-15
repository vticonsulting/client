<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('resources') }}</BasePageHeading>
    <section class="p-8">
      <div class="p-8">
        <span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-warning-100 text-warning-800"
        >{{ $t('badge') }}</span>
        <span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-danger-100 text-danger-800"
        >{{ $t('badge') }}</span>
        <span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-info-100 text-info-800"
        >{{ $t('badge') }}</span>
        <span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800"
        >{{ $t('badge') }}</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="relative">
          <div v-if="open" @click="open = false" class="fixed inset-0" />
          <button @click="open = !open" class="relative flex items-center focus:outline-none">
            <img
              :src="user.avatarUrl"
              :alt="`${user.fullName}'s avatar`"
              class="w-8 h-8 rounded-full"
            />
            <span class="ml-2 font-medium">{{ fullName }}</span>
            <svg
              class="w-5 h-5 ml-1 text-gray-700 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-75 transform ease-out-quad"
            leave-active-class="transition-all duration-100 transform ease-in-quad"
            enter-class="scale-75 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-class="scale-100 opacity-100"
            leave-to-class="scale-75 opacity-0"
          >
            <div
              v-if="open"
              class="absolute right-0 w-64 py-2 mt-2 origin-top-right bg-white border rounded-lg shadow-md"
            >
              <ul>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-primary-500 hover:text-white">Profile</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-primary-500 hover:text-white"
                  >Account settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-primary-500 hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Jeremy',
        lastName: 'Doublestein',
        avatarUrl: '/assets/img/users/jeremy.jpeg',
      },
      open: false,
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
}
</script>

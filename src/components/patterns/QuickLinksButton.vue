<template>
  <div class="relative ml-3">
    <div>
      <OButton
        @click="isOpen = !isOpen"
        class="ml-2 -mr-1"
        id="user-menu"
        icon-pack="fas"
        icon-right="angle-down"
        aria-haspopup="true"
        inverted
        variant="primary"
      >{{ $t('quick_links') }}</OButton>
    </div>

    <!-- Dropdown -->
    <!--
      v-enter // Added before element is inserted, removed one frame after element is inserted.
      v-enter-active // Added before element is inserted, removed when transition/animation finishes (delay, duration and easing)
      v-enter-to // Added one frame after element is inserted  (at the same time v-enter is removed), removed when transition/animation finishes

      v-leave // Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame
      v-leave-active Added immediately when leave transition is triggered, removed when the transition/animation finishes (delay, duration and easing)
      v-leave-to Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.

      enter-class="opacity-0 scale-70"
      enter-active-class="transition-all transition-fastest ease-out-quad"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition-all transition-faster ease-in-quad"
      leave-to-class="opacity-0 scale-70"

      .fade-enter-active,
      .fade-leave-active {
        transition: opacity .5s;
      }
      .fade-enter,
      .fade-leave-to {
          opacity: 0;
      }
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    -->
    <Transition
      enter-class="scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out transform scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in transform scale-95 opacity-0"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 z-20 w-56 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg z-1 ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <RouterLink
          v-if="false"
          :to="{ name: 'profile' }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >{{ $t('my_profile') }}</RouterLink>

        <form v-if="false" method="POST" action="#">
          <button
            type="submit"
            class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >{{ $t('logout') }}</button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

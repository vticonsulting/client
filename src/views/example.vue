<template>
  <main class="flex-1">
    <section class="p-8">
      <div class="flex items-center justify-center">
        <div class="mt-6">
          <button
            @click="open = true"
            class="px-4 py-2 font-semibold text-white border border-transparent rounded bg-danger-500 hover:bg-danger-600 focus:outline-none focus:shadow-outline"
          >
            Delete my account
          </button>

          <BaseModal :open="open" @close="open = false">
            <div
              class="w-full max-w-lg px-6 py-6 bg-white rounded-lg shadow-2xl"
            >
              <h2
                class="pb-4 text-2xl font-semibold leading-tight text-gray-900 border-b-2 border-gray-200"
              >
                Delete account
              </h2>
              <p class="mt-4 text-gray-700">
                Are you absolutely sure you want to cancel your subscription and
                delete your account? This action cannot be undone.
              </p>
              <div class="mt-6">
                <button
                  type="button"
                  @click="open = false"
                  class="px-4 py-2 font-semibold text-white border border-transparent rounded bg-danger-500 hover:bg-danger-600 focus:outline-none focus:shadow-outline"
                >
                  Delete my account
                </button>
                <button
                  @click="open = false"
                  class="px-4 py-2 ml-4 font-semibold text-gray-800 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </BaseModal>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

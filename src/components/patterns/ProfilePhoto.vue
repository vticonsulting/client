<template>
  <div class="flex">
    <div class="flex-grow mt-6 lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
      <p class="text-sm font-medium text-gray-700" aria-hidden="true">Photo</p>
      <div class="mt-1 lg:hidden">
        <div class="flex items-center">
          <div
            class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <img
              class="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80h"
              alt=""
            />
          </div>
          <div class="ml-5 rounded-md shadow-sm">
            <div
              class="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500"
            >
              <label
                for="user_photo"
                class="relative text-sm font-medium leading-4 text-gray-700 pointer-events-none"
              >
                <span>Change</span>
                <span class="sr-only"> user photo</span>
              </label>
              <input
                id="user_photo"
                name="user_photo"
                type="file"
                class="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative hidden overflow-hidden rounded-full lg:block">
        <img
          class="relative w-40 h-40 rounded-full"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80"
          alt=""
        />
        <label
          for="user-photo"
          class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
        >
          <span>Change</span>
          <span class="sr-only"> user photo</span>
          <input
            type="file"
            id="user-photo"
            name="user-photo"
            class="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

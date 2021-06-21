<template>
  <article>
    <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
    <div class="p-6 bg-white">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="sm:flex sm:space-x-5">
          <div class="flex-shrink-0">
            <img
              class="w-20 h-20 mx-auto rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
            <p class="text-sm font-medium text-gray-600">Welcome back,</p>
            <p class="text-xl font-bold text-gray-900 sm:text-2xl">
              Rebecca Nicholas
            </p>
            <p class="text-sm font-medium text-gray-600">Product Designer</p>
          </div>
        </div>
        <div class="flex justify-center mt-5 sm:mt-0">
          <a
            href="#"
            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            View profile
          </a>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 border-t border-gray-200 divide-y divide-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
    >
      <div class="px-6 py-5 space-x-1 text-sm font-medium text-center">
        <span class="text-gray-900">12</span>
        <span class="text-gray-600">Vacation days left</span>
      </div>

      <div class="px-6 py-5 space-x-1 text-sm font-medium text-center">
        <span class="text-gray-900">4</span>
        <span class="text-gray-600">Sick days left</span>
      </div>

      <div class="px-6 py-5 space-x-1 text-sm font-medium text-center">
        <span class="text-gray-900">2</span>
        <span class="text-gray-600">Personal days left</span>
      </div>
    </div>
  </article>
</template>

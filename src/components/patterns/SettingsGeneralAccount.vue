<template>
  <div class="mt-10 divide-y divide-gray-200">
    <div class="space-y-1">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Account</h3>
      <p class="max-w-2xl text-sm text-gray-500">
        Manage how information is displayed on your account.
      </p>
    </div>
    <div class="mt-6">
      <dl class="divide-y divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="text-sm font-medium text-gray-500">Language</dt>
          <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="flex-grow">English</span>
            <span class="flex-shrink-0 ml-4">
              <button
                type="button"
                class="font-medium bg-white rounded-md text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Update
              </button>
            </span>
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
          <dt class="text-sm font-medium text-gray-500">Date format</dt>
          <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="flex-grow">DD-MM-YYYY</span>
            <span class="flex items-start flex-shrink-0 ml-4 space-x-4">
              <button
                type="button"
                class="font-medium bg-white rounded-md text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Update
              </button>
              <span class="text-gray-300" aria-hidden="true">|</span>
              <button
                type="button"
                class="font-medium bg-white rounded-md text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Remove
              </button>
            </span>
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
          <dt
            id="timezone-option-label"
            class="text-sm font-medium text-gray-500"
          >
            Automatic timezone
          </dt>
          <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <!-- On: "bg-primary-600", Off: "bg-gray-200" -->
            <button
              type="button"
              aria-pressed="true"
              aria-labelledby="timezone-option-label"
              class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-auto"
            >
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span
                aria-hidden="true"
                class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
              ></span>
            </button>
          </dd>
        </div>
        <div
          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
        >
          <dt
            id="auto-update-option-label"
            class="text-sm font-medium text-gray-500"
          >
            Auto-update applicant data
          </dt>
          <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <!-- On: "bg-primary-600", Off: "bg-gray-200" -->
            <button
              type="button"
              aria-pressed="false"
              aria-labelledby="auto-update-option-label"
              class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-auto"
            >
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span
                aria-hidden="true"
                class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
              ></span>
            </button>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

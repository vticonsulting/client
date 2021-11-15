<template>
  <header class="bg-white shadow">
    <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        <slot>
          <!-- {{ $route.meta[0].title }} -->
        </slot>
      </h1>
    </div>
  </header>
</template>

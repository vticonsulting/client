<template>
  <div>
    <div class="flex flex-col w-64 pt-5 pb-4 border-r border-gray-200">
      <RouterLink
        :to="{name: 'messages'}"
        class="brand"
        data-testid="home-link"
      >
        <SalesLoftLogo class="px-6" />
      </RouterLink>

      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-1 h-0 overflow-y-auto">
        <div class="relative inline-block px-3 mt-6 text-left">
          <SidebarDropdownButton />
        </div>
        <SidebarSearch />
        <nav class="px-3 mt-6">
          <SidebarMenu />
        </nav>
      </div>
    </div>
  </div>
</template>

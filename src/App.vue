<script setup>
import { RouterView } from 'vue-router'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <!-- Navbar -->
  <div
    class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center py-4">
      <!-- Sidebar Toggle -->
      <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar-dark">
        <span class="sr-only">Toggle Navigation</span>
        <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <!-- End Sidebar Toggle -->

      <!-- Breadcrumbs -->
      <Breadcrumbs />
      <!-- End Breadcrumbs -->
    </div>
  </div>
  <!-- End Navbar -->

  <!-- Sidebar -->
  <Sidebar />
  <!-- End Sidebar -->

  <!-- Content -->
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <RouterView />
  </div>
  <!-- End Content -->
</template>

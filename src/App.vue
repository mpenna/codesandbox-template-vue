<script setup>
import { ref, watch, onMounted } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router'
// import CustomNavbar from './components/CustomNavbar.vue'

const route = useRoute()
const router = useRouter()

const applicationSidebarDark = ref(null)

router.beforeEach((to, from) => {
  // console.log('navigating to', to.name)

  if (window.HSOverlay) {
    // close sidebar
    HSOverlay.close(applicationSidebarDark.value)
  }
})
</script>

<template>
  <!-- Sidebar Toggle -->
  <div
    class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center py-4">
      <!-- Navigation Toggle -->
      <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar-dark">
        <span class="sr-only">Toggle Navigation</span>
        <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <!-- End Navigation Toggle -->

      <!-- Breadcrumb -->
      <ol class="ml-3 flex space-x-1 whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
          Tailwind CSS
          <svg class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16"
            height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" />
          </svg>
        </li>
        <div v-for="(matched, idx) in route.matched" :key="idx">
          <li v-if="idx != Object.keys(route.matched).length - 1"
            class="text-sm text-gray-800 truncate dark:text-gray-400" aria-current="page">
            <RouterLink :to="matched.path">{{ matched.meta.displayName }}</RouterLink>
            <span class="ml-1">/</span>
          </li>
          <li v-else class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
            {{ matched.meta.displayName }}
          </li>
        </div>
      </ol>
      <!-- End Breadcrumb -->
    </div>
  </div>
  <!-- End Sidebar Toggle -->

  <!-- Sidebar -->
  <div ref="applicationSidebarDark" id="application-sidebar-dark"
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
    <!-- Sidebar Header -->
    <div class="px-6">
      <RouterLink to="/" class="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
        TW CSS
      </RouterLink>
    </div>
    <!-- End Sidebar Header -->

    <!-- Sidebar Menu -->
    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul class="space-y-1.5">
        <TreeMenu :nodes="router.options.routes" />
      </ul>
    </nav>
    <!-- End Sidebar Menu -->
  </div>
  <!-- End Sidebar -->

  <!-- Content -->
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <RouterView />
  </div>
  <!-- End Content -->
</template>

<!-- <template>
  <CustomNavbar />
  <div class="container mx-auto">
    <RouterView />
  </div>
</template> -->


<!--
  sidebar classes
   
  a) open

  hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 open

  b) closed

  hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 hidden
 -->
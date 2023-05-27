<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const applicationSidebar = ref(null)

router.beforeEach((to, from) => {
  if (window.HSOverlay) {
    HSOverlay.close(applicationSidebar.value)
  }
})
</script>

<template>
  <!-- Sidebar -->
  <div ref="applicationSidebar" id="application-sidebar-dark"
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
</template>

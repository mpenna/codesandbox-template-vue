<template>
  <!-- classes customized via main.css -->

  <AppLink v-bind="$attrs">
    <slot />
  </AppLink>

  <!-- classes customized locally -->
  
  <!-- <AppLink v-bind="$attrs"
    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300"
    active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md"
    exact-active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md"
    inactive-class="flex items-center gap-x-3 py-2 px-2.5 bg-red-700 text-sm text-white rounded-md">
    <slot />
  </AppLink> -->
</template>
<template>
  <!-- class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300" -->
  <AppLink v-bind="$attrs"
    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300"
    active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md"
    exact-active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md">
    <slot />
  </AppLink>
  
  <!-- <AppLink v-bind="$attrs"
    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300"
    active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md"
    exact-active-class="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md">
    <slot />
  </AppLink>
 -->
  <!-- <AppLink v-bind="$attrs"
    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
    inactive-class="text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300">
    <slot />
  </AppLink> -->
</template>
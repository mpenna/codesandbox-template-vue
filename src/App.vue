<script setup>
import { RouterView } from 'vue-router'
import CustomNavbar from './components/CustomNavbar.vue'
</script>

<template>
  <CustomNavbar />
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

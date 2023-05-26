<script setup>
import { RouterLink, useLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  ...RouterLink.props,
  // activeClass: String,
  // activeExactClass: String,
  // inactiveClass: String,
})

const {
  // the resolved route object
  route,
  // the href to use in a link
  href,
  // boolean ref  indicating if the link is active
  isActive,
  // boolean ref  indicating if the link is exactly active
  isExactActive,
  // function to navigate to the link
  navigate
} = useLink(props)
</script>

<template>
  <router-link v-bind="$props" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
    <!-- <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"> -->
    <li :class="[isActive && activeClass, isExactActive && activeExactClass]">
      <!-- <a :href="href" @click="navigate">{{ route.fullPath }}</a> -->
      <a :href="href" @click="navigate">
        <slot />
      </a>
    </li>
  </router-link>
</template>
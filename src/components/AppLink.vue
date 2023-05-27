<script setup>
// import { computed, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  // allow our AppLink component to take all the same props that the router-link takes
  ...RouterLink.props,

  // allows for overriding of the `router-link-active`
  activeClass: {
    type: String,
    default: 'router-link-active',
  },

  // allows for overriding of the `router-link-exact-active`
  exactActiveClass: {
    type: String,
    default: 'router-link-exact-active',
  },

  // custom class for links that are not active
  inactiveClass: {
    type: String,
    default: 'router-link-inactive',
  },

  // default styling for the router link
  defaultClass: {
    type: String,
    default: 'router-link',
  },
})

// const { /* to, */ activeClass, exactActiveClass, inactiveClass } = toRefs(props)
</script>

<template>
  <!-- create a router-link tag and bind all the props from our component -->
  <router-link v-slot="{ isActive, isExactActive, href, navigate }" v-bind="$props" custom>
    <a v-bind="$attrs" :href="href"
      :class="[defaultClass, isActive && activeClass, isExactActive && exactActiveClass, (!isActive && !isExactActive) && inactiveClass]"
      @click="navigate">
      <slot />
    </a>
  </router-link>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  ...RouterLink.props,

  activeClass: {
    type: String,
    default: '',
  },

  inactiveClass: {
    type: String,
    default: '',
  },
})

const { to, activeClass, inactiveClass } = toRefs(props)
</script>

<template>
  <router-link v-slot="{ isActive, href, navigate }" v-bind="$props" custom>
    <a v-bind="$attrs" :href="href" :class="isActive ? activeClass : inactiveClass" @click="navigate">
      <slot />
    </a>
  </router-link>
</template>
<!-- 
<template>
  <router-link v-bind="$props" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
    <li :class="[isActive && activeClass, isExactActive && activeExactClass]">
      <a :href="href" @click="navigate">
        <slot />
      </a>
    </li>
  </router-link>
</template> -->

<!-- <template>
  <router-link v-bind="$props" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
    <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
      <a :href="href" @click="navigate">{{ route.fullPath }}
        <slot />
      </a>
    </li>
  </router-link>
</template> -->
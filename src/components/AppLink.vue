<script setup>
import { computed, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  // allow our AppLink component to take all the same props that the router-link takes
  ...RouterLink.props,

  defaultClass: {
    type: String,
    default: 'router-link',
  },

  activeClass: {
    type: String,
    default: 'router-link-active',
  },

  exactActiveClass: {
    type: String,
    default: 'router-link-exact-active',
  },

  inactiveClass: {
    type: String,
    default: '',
  },
})

// const { /* to, */ activeClass, exactActiveClass, inactiveClass } = toRefs(props)
</script>

<template>
  <!-- <router-link v-bind="$props">
                                  <slot />
                                </router-link> -->

  <!-- create a router-link tag and bind all the props from our component -->
  <router-link v-slot="{ isActive, isExactActive, href, navigate }" v-bind="$props" custom>
    <a v-bind="$attrs" :href="href"
      :class="[defaultClass, isActive && activeClass, isExactActive && exactActiveClass, (!isActive && !isExactActive) && inactiveClass]"
      @click="navigate">
      <slot />
    </a>
  </router-link>
  <!-- <router-link v-slot="{ isActive, isExactActive, href, navigate }" v-bind="$props" custom>
                                          <a v-bind="$attrs" :href="href" :class="isActive ? activeClass : (isExactActive ? exactActiveClass : inactiveClass)"
                                            @click="navigate">
                                            <slot />
                                          </a>
                                        </router-link> -->
</template>

<!-- 
<template>
  <router-link v-slot="{ isActive, href, navigate }" v-bind="$props" custom>
    <a v-bind="$attrs" :href="href" :class="isActive ? activeClass : inactiveClass" @click="navigate">
      <slot />
    </a>
  </router-link>
</template> -->

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
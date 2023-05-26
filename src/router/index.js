import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        displayName: 'Home'
      }
    },
    {
      path: '/colors',
      name: 'colors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ColorsView.vue'),
      meta: {
        displayName: 'Colors'
      }
    },
    {
      path: '/customization',
      name: 'customization',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CustomizationView.vue'),
      meta: {
        displayName: 'Customization'
      }
    },
    {
      path: '/typography',
      name: 'typography',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TypographyView.vue'),
      meta: {
        displayName: 'Typography'
      }
    },
    {
      path: '/spacessizes',
      name: 'spacessizes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SpacesSizesView.vue'),
      meta: {
        displayName: 'Spaces and Sizes'
      }
    },
    {
      path: '/flex',
      name: 'flex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Flex/IndexView.vue'),
      meta: {
        displayName: 'Flex'
      },
      children: [
        {
          path: '1',
          name: 'example-1',
          component: () => import('../views/Flex/Example1View.vue'),
          meta: {
            displayName: 'Example #1'
          }
        },
        {
          path: '2',
          name: 'example-2',
          component: () => import('../views/Flex/Example2View.vue'),
          meta: {
            displayName: 'Example #2'
          }
        },
        {
          path: '3',
          name: 'example-3',
          component: () => import('../views/Flex/Example3View.vue'),
          meta: {
            displayName: 'Example #3'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        displayName: 'About'
      }
    }
  ]
})

export default router

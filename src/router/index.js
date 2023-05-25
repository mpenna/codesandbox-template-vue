import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/colors',
      name: 'colors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ColorsView.vue'),
      meta: {
        chapter: 'Colors'
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
        chapter: 'Customization'
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
        chapter: 'Typography'
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
        chapter: 'Spaces and Sizes'
      }
    },
    // {
    //   path: '/flex',
    //   name: 'flex',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/FlexView.vue'),
    //   meta: {
    //     chapter: 'Flex'
    //   }
    // },
    {
      path: '/flex',
      name: 'flex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Flex/IndexView.vue'),
      children: [
        {
          path: '1',
          component: () => import('../views/Flex/Example1View.vue'),
        },
        {
          path: '2',
          component: () => import('../views/Flex/Example2View.vue'),
        },
        {
          path: '3',
          component: () => import('../views/Flex/Example3View.vue'),
        }
      ],
      meta: {
        chapter: 'Flex'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }
  ]
})

export default router

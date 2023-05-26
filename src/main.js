import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TreeMenu from './components/TreeMenu.vue'
import AppLink from './components/AppLink.vue'

import('preline')

import './assets/main.css'

const app = createApp(App)

app.component('TreeMenu', TreeMenu)
app.component('AppLink', AppLink)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'highlight.js/styles/atom-one-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import '@/assets/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount('#app')

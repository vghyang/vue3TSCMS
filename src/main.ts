import { createApp } from 'vue'

import router from '@/router/index'
import store from './store'
import App from './App.vue'

import { initState } from './store'

import 'normalize.css'
import { registIcons, registGlobal } from '@/global/index'
const app = createApp(App)
registGlobal(app)
registIcons(app)
initState()
app.use(router)
app.use(store)
app.mount('#app')

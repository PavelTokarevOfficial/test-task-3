import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './providers/router.ts'

import './styles/styles.scss'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
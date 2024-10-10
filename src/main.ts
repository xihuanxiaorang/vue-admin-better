import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import setupPlugins from './plugins'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
setupPlugins(app)
app.use(createPinia())

app.mount('#app')

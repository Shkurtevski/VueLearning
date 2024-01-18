import { createApp } from 'vue'
import Toast from 'vue-toastification'
import router from './router/index'
import 'vue-toastification/dist/index.css'

import './assets/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')

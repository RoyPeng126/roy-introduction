import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'   // 指到檔案
import './assets/app.css'                // 你的專案是 app.css

const app = createApp(App)

app.use(router)

const redirectPath = sessionStorage.getItem('redirectPath')
if (redirectPath) {
  sessionStorage.removeItem('redirectPath')
  router.replace(redirectPath)
}

router.isReady().then(() => app.mount('#app'))

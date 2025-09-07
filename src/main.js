import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'   // 指到檔案
import './assets/app.css'                // 你的專案是 app.css

createApp(App).use(router).mount('#app')
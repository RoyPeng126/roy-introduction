import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Portfolio from '@/views/Portfolio.vue'
import Resume from '@/views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/skills', component: Skills },
    { path: '/portfolio', component: Portfolio },
    { path: '/resume', component: Resume },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router

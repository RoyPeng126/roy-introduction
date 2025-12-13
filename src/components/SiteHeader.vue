<template>
  <header class="relative">
    <div class="container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between">
      <!-- 左側 Logo -->
      <div class="flex items-center justify-between ">
        <RouterLink class="flex items-center -mx-1" to="/">
          <div class="mx-1 text-gray-700">
            <h3 class="uppercase tracking-[0.15em] font-medium">Yu Cheng Peng</h3>
            <p class="text-xs italic">MIS Student in NCCU</p>
          </div>
        </RouterLink>

        <!-- 手機版選單按鈕 -->
        <button class="text-gray-600 lg:hidden" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- 導航選單 -->
      <div
        :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full']"
        class="absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 
               left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent 
               lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#192b4a]"
      >
        <nav class="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">
          <RouterLink to="/" @click="isOpen=false" class="font-medium text-white lg:text-[#192b4a] lg:hover:text-gray-400 lg:mx-4">
            Home
          </RouterLink>

          <RouterLink to="/about" @click="isOpen=false" class="font-medium text-white lg:text-[#192b4a] lg:hover:text-gray-400 lg:mx-4">
            About
          </RouterLink>

          <RouterLink to="/skills" @click="isOpen=false" class="font-medium text-white lg:text-[#192b4a] lg:hover:text-gray-400 lg:mx-4">
            Skills
          </RouterLink>

          <RouterLink to="/portfolio" @click="isOpen=false" class="font-medium text-white lg:text-[#192b4a] lg:hover:text-gray-400 lg:mx-4">
            Portfolio
          </RouterLink>

          <RouterLink to="/resume" @click="isOpen=false" class="font-medium text-white lg:text-[#192b4a] lg:hover:text-gray-400 lg:mx-4">
            Resume
          </RouterLink>

          <!-- 外部連結可以保留 a -->
          <a class="px-8 py-2.5 text-white lg:text-[#192b4a] lg:hover:bg-[#192b4a] lg:hover:text-white 
                   duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#192b4a] border-white"
             :href="cvHref" target="_blank">
            Downloading CV
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const cvHref = `${import.meta.env.BASE_URL}Resume.pdf`
</script>

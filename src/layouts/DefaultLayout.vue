<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader class="z-10" />
    <main class="flex-1 relative z-0">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
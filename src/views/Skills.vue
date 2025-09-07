<template>
  <section class="container mx-auto px-6 py-12 lg:py-16">
    <!-- Title -->
    <div class="max-w-3xl">
      <h1 class="font-serif text-4xl md:text-5xl text-[#0e1b40]">
        Skills & Tools
      </h1>
      <p class="mt-4 text-gray-600">
        Full-stack developer focusing on Java/Spring Boot, Node.js, frontend engineering, and data pipelines.
      </p>
    </div>

    <!-- Strength areas -->
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <div class="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
        <h3 class="text-lg font-semibold text-[#0e1b40]">Backend</h3>
        <p class="mt-2 text-gray-500">Java / Spring Boot, REST API, SQL</p>
      </div>
      <div class="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
        <h3 class="text-lg font-semibold text-[#0e1b40]">Frontend</h3>
        <p class="mt-2 text-gray-500">Vue 3, Vite, Tailwind CSS, SPA / Router</p>
      </div>
      <div class="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
        <h3 class="text-lg font-semibold text-[#0e1b40]">Data & DevOps</h3>
        <p class="mt-2 text-gray-500">Python, R, ETL, GitHub Actions</p>
      </div>
    </div>
    <!-- Learning timeline bars -->
    <div class="mt-12 grid gap-8 lg:grid-cols-2">
      <div class="p-6 rounded-2xl bg-white shadow">
        <h2 class="text-xl font-semibold text-[#0e1b40]">Learning Duration</h2>
        <ul class="mt-6 space-y-5">
          <li v-for="skill in skills" :key="skill.name">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 font-medium">{{ skill.name }}</span>
              <span class="text-gray-500">{{ skill.time }}</span>
            </div>
            <div class="h-3 mt-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="skill.color"
                :style="{ width: skill.level + '%' }"
              />
            </div>
          </li>
        </ul>
      </div>

      <!-- Badges / tools -->
      <div class="p-6 rounded-2xl bg-white shadow">
        <h2 class="text-xl font-semibold text-[#0e1b40]">Frameworks & Tools</h2>
        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tool in tools"
            :key="tool"
            class="px-3 py-1 rounded-full border border-[#192b4a]/30 text-[#192b4a] text-sm bg-[#192b4a]/5 hover:bg-[#192b4a]/10 transition"
          >
            {{ tool }}
          </span>
        </div>

        <h3 class="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Learning Next
        </h3>
        <ul class="mt-3 space-y-2 text-gray-600">
          <li class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
            System Design + High-scale APIs
          </li>
          <li class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
            Vue & React Architecture (SSR / Components / SEO)
          </li>
          <li class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-sky-500"></span>
             R & Python for Advanced Data Analysis
          </li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12 flex items-center justify-between gap-6 flex-col md:flex-row">
      <p class="text-gray-600">
        Want the full list of courses, certs, and side projects?
      </p>
      <RouterLink
        to="/portfolio"
        class="px-6 py-3 border-2 border-[#192b4a] text-[#192b4a] rounded-lg hover:bg-[#192b4a] hover:text-white transition font-semibold tracking-wide"
      >
        View Portfolio
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Java', time: '2 years', level: 90, color: 'bg-amber-600' },
  { name: 'Python', time: '6 months', level: 60, color: 'bg-sky-500' },
  { name: 'SQL', time: '6 months', level: 60, color: 'bg-indigo-500' },
  { name: 'JavaScript', time: '4 months', level: 40, color: 'bg-yellow-400' },
  { name: 'R', time: '1 month', level: 20, color: 'bg-violet-500' },
]

const tools = [
  'Spring Boot', 'MySQL', 'PostgreSQL', 'Redis',
  'Node.js', 'Express', 'REST / OpenAPI',
  'Vite', 'Vue Router', 'Pinia',
  'Tailwind CSS', 'Docker', 'GitHub Actions',
]
</script>

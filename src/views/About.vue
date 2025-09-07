<template>
  <!-- Hero -->
  <section class="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="font-serif text-4xl md:text-5xl text-[#0e1b40]">About Me</h1>
      <p class="mt-4 text-gray-600">
        Hi, my name is Roy. I am a student who learning programming langguage, here is my profile:<br>
        Name: 彭宇承<br>
        Birth: 2004/12/06<br>
        Interest: Music, Workout<br>
        School: National Chengchi University (NCCU)
        Department: Manage Information System (MIS)<br>
        Goals: To grow as a software engineer and contribute to impactful projects in tech and business.<br>

      </p>
    </div>

    <div class="max-w-md w-full mx-auto rounded-3xl overflow-hidden outline outline-4 outline-[#192b4a]/40">
      <img src="/ROY2.JPG" alt="Roy photo" class="w-full h-[28rem] object-cover">
    </div>
  </section>

  <!-- Skills -->
  <section class="container mx-auto px-6 pb-16">
    <h2 class="font-serif text-3xl md:text-4xl text-[#0e1b40]">Skills</h2>
    <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-5 border border-gray-200 rounded-xl">
        <h3 class="font-medium text-[#0e1b40]">Frontend</h3>
        <p class="mt-2 text-gray-600">Vue 3, Vite, Tailwind CSS, Pinia, Vue Router</p>
      </div>
      <div class="p-5 border border-gray-200 rounded-xl">
        <h3 class="font-medium text-[#0e1b40]">Data & Tools</h3>
        <p class="mt-2 text-gray-600">Python (pandas), Excel, Figma, Git/GitHub</p>
      </div>
      <div class="p-5 border border-gray-200 rounded-xl">
        <h3 class="font-medium text-[#0e1b40]">Others</h3>
        <p class="mt-2 text-gray-600">UI/UX, 可用性測試、簡報與協作</p>
      </div>
    </div>
  </section>

  <!-- Timeline / Experience -->
<section class="bg-[#0f2769]">
  <div class="container mx-auto px-6 py-16 text-white grid lg:grid-cols-2 gap-12 items-center">
    
    <!-- Timeline 左邊 -->
    <div>
      <h2 class="font-serif text-3xl md:text-4xl">Experience</h2>
      <ol class="mt-8 relative border-s border-white/20">
        <li class="mb-8 ms-6">
          <span class="absolute -start-2.5 mt-1 w-4 h-4 rounded-full bg-[#192b4a] border-2 border-white"></span>
          <h3 class="text-xl font-semibold">NCCU MIS — Student</h3>
          <time class="text-white/70 text-sm">2023 — Present</time>
          <p class="mt-2 text-white/90">
            Focused on frontend development, data analysis, and system design through coursework and projects.
          </p>
        </li>
        <li class="mb-8 ms-6">
          <span class="absolute -start-2.5 mt-1 w-4 h-4 rounded-full bg-[#192b4a] border-2 border-white"></span>
          <h3 class="text-xl font-semibold">NCCU Commerce Career Ambassador (CCA)</h3>
          <time class="text-white/70 text-sm">Apr 2024 — Jun 2025</time>
          <p class="mt-2 text-white/90">
            Promoted and represented the College of Commerce at National Chengchi University.
          </p>
        </li>
        <li class="mb-8 ms-6">
          <span class="absolute -start-2.5 mt-1 w-4 h-4 rounded-full bg-[#192b4a] border-2 border-white"></span>
          <h3 class="text-xl font-semibold">HCT Logistics — Intern</h3>
          <time class="text-white/70 text-sm">Jul 2025 — Aug 2025</time>
          <p class="mt-2 text-white/90">
            Gained hands-on experience in software development, project modification, and technical learning.
          </p>
        </li>
      </ol>
    </div>

    <!-- 圖片右邊 -->
    <div class="flex justify-center">
      <img 
        src="/MIS.jpg" 
        alt="Experience illustration"
        class="rounded-lg shadow-lg max-h-[500px] object-cover"
      />
    </div>

  </div>
</section>
</template>

<script setup>
// 此頁不用再放 header；header/footers 由 DefaultLayout 處理
</script>

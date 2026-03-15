<template>
  <!-- Hero -->
  <section class="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="font-serif text-4xl md:text-5xl text-[#0e1b40]">About Me</h1>
      <p class="mt-4 text-gray-600">
        Hi, my name is Roy. I am a student passionate about software development, AI, and data-driven technologies, here is my profile:<br>
        Name: 彭宇承<br>
        English Name: YU-CHENG (ROY) PENG<br>
        Birth: 2004/12/06<br>
        Interest: Music, Workout<br>
        School: National Chengchi University (NCCU)<br>
        Department: Manage Information Systems (MIS)<br>
        Goals: To leverage technology and data to build impactful digital products and innovative solutions in business and society.<br>
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
        <p class="mt-2 text-gray-600">Vue 3, Vite, Tailwind CSS, Vue Router</p>
      </div>
      <div class="p-5 border border-gray-200 rounded-xl">
        <h3 class="font-medium text-[#0e1b40]">Data & Tools</h3>
        <p class="mt-2 text-gray-600">Python (pandas), Excel, Figma, Git/GitHub</p>
      </div>
      <div class="p-5 border border-gray-200 rounded-xl">
        <h3 class="font-medium text-[#0e1b40]">Others</h3>
        <p class="mt-2 text-gray-600">UI/UX, Slide Designing</p>
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
          <time class="text-white/70 text-sm">Apr 2024 — June 2025</time>
          <p class="mt-2 text-white/90">
            Promoted and represented the College of Commerce at National Chengchi University.
          </p>
        </li>
        <li class="mb-8 ms-6">
          <span class="absolute -start-2.5 mt-1 w-4 h-4 rounded-full bg-[#192b4a] border-2 border-white"></span>
          <h3 class="text-xl font-semibold">HCT Logistics — IT Intern</h3>
          <time class="text-white/70 text-sm">July 2025 — Aug 2025</time>
          <p class="mt-2 text-white/90">
            Gained hands-on experience in software development, project modification, and technical learning.
          </p>
        </li>
                <li class="mb-8 ms-6">
          <span class="absolute -start-2.5 mt-1 w-4 h-4 rounded-full bg-[#192b4a] border-2 border-white"></span>
          <h3 class="text-xl font-semibold">Deloitte Taiwan — Cyber Intern</h3>
          <time class="text-white/70 text-sm">Feb 2026 — June 2026</time>
          <p class="mt-2 text-white/90">
            Analyzed security and governance risks in enterprise adoption of GenAI across multi-cloud environments, focusing on IAM, data privacy, model security, API integration, and compliance.
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

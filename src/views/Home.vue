<template>
  <section class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
      <div class="lg:w-1/2">
        <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#0e1b40] capitalize md:text-6xl ">Welcome to my website</h1>

        <p class="max-w-lg mt-4 text-gray-500">
        Click the header to learn more about me, or visit my LinkedIn and GitHub for additional details.<br>
        For a quick overview, check out this page.
        </p>
        
        <div class="mt-6 sm:flex sm:items-center">
          <a href="https://linkedin.com/in/roy-peng-593596324" class="bg-[#192b4a] hover:bg-[#192b4a]/80 duration-300 transition-colors border-2 border-[#192b4a] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white ">
            Linkedin
          </a>

          <a href="https://github.com/RoyPeng126" class="border-2 text-sm duration-300 transition-colors hover:bg-[#192b4a] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#192b4a] sm:mx-4 border-[#192b4a] px-6 block text-center py-3 uppercase">
            Github
          </a>
        </div>
      </div>

      <div class="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#192b4a]/40">
        <img class="object-cover w-full h-full rounded-t-full " src="/ROY.JPG"  alt="main page" />
      </div>
  </section>

  <section class="bg-[#0e1b40] mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto mt-12">
      <div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
        <img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"   src="https://github-readme-stats.vercel.app/api/top-langs/?username=RoyPeng126&layout=compact&bg_color=0e1b3f&title_color=ffffff&text_color=d6e4ff&icon_color=7aa2f7&hide_border=true"
  alt="GitHub Readme Stats">
        
        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3 class="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl">
            Building Practical Full-Stack Projects 
          </h3>

          <p class="mt-4 text-gray-200 ">
            NCCU MIS student focused on Java/Spring Boot, Node.js, and data pipelines.
          </p>
          
          <RouterLink class="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#192b4a] duration-300 transition-colors" to="/Skills">
            Learn More
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
<section class="w-full h-48"> <!-- 這裡限制高度，例如 24rem = 384px -->
  <img 
    class="w-full h-full object-cover"
    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3hheDd6cnptMXdwaGc0M3M5YjNsMzNnY2JwenRiaWc3b3I4NW5jMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lbcLMX9B6sTsGjUmS3/giphy.gif" 
    alt="funny gif" 
  />
</section>
    <section class="container px-6 py-12 mx-auto lg:py-16">
    <h3 class="font-serif text-3xl text-[#0e1b40] capitalize md:text-4xl lg:text-5xl">
      News & Updates
    </h3>
    
    <div class="mt-8 xl:-mx-6 xl:flex">
      <div class="xl:w-1/2 xl:mx-6">
        <img class="object-cover w-full h-96" src="/letsstock.png" alt="">

        <h2 class="mt-6 font-serif text-3xl font-medium text-gray-700">Let's Stock</h2>

        <p class="mt-2 text-gray-500">This project simulates an investment analysis platform, integrating Frontend (Vite + Bootstrap), Backend (Express), and Database (Postgres). It connects to the Alpha Vantage API, GNews, and Gemini AI to provide comprehensive features such as report queries, AI-driven analysis, and real-time stock price updates.</p>

        <p class="mt-4 italic text-gray-600">August, 2025</p>
      </div>

      <div class="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="/WEBSITE.png" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700 ">Introduction Website</h2>
  
            <p class="mt-2 text-gray-500">This is a website with Tailwind CSS and Vue.js to introduce myself.</p>
  
            <p class="mt-4 italic text-gray-600">September, 2025</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="/ai.png" alt="">

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700">AI Companion</h2>

            <p class="mt-2 text-gray-500">
              An AI-powered companion system integrating LLM-based conversation, voice interaction, and backend APIs to support daily reminders, emotional companionship, and elder care scenarios.
            </p>

            <p class="mt-4 italic text-gray-600">December, 2025</p>
          </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
        <img
            class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0"
            src="/ticket.png"
            alt="Second Hand Ticket Platform"
        />

        <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-gray-700">
            Second-Hand Ticket Platform
            </h2>

            <p class="mt-2 text-gray-500">
            A platform for reselling event tickets, connecting buyers and sellers securely,
            ensuring affordability and convenience.
            </p>

            <p class="mt-4 italic text-gray-600">
            June 2025
            </p>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

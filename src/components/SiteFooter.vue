<template>
  <footer class="bg-[#0e1b40]">
    <div class="container px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:flex lg:justify-between">
      <div>
        <a class="flex items-center -mx-2" href="#">
          <div class="mx-2 text-white">
            <h3 class="font-medium tracking-widest uppercase">Yu Cheng Peng</h3>
            <p class="mt-1 text-xs italic leading-3 tracking-wide capitalize">MIS Student in NCCU</p>
          </div>
        </a>

        <p class="max-w-lg mt-6 leading-relaxed text-white ">
         This website is built with Tailwind CSS and Vue.js, featuring a modern component-based architecture and fully responsive design.
        </p>
      </div>

      <div class="flex flex-col space-y-4">
        <a href="/Home" class="text-white hover:text-gray-300">Home</a>
        <a href="/About" class="text-white hover:text-gray-300">About</a>
        <a href="/Skills" class="text-white hover:text-gray-300">Skills</a>
        <a href="/Portfolio" class="text-white hover:text-gray-300">Portfolio</a>
        <a href="/Resume" class="text-white hover:text-gray-300">Resume</a>
      </div>
      
      <div>
        <p class="font-medium text-white capitalize">Connect</p>

        <div class="flex mt-6 -mx-4">
          <a class="mx-4 text-white hover:text-gray-300" href="https://github.com/RoyPeng126">
            <img src="/github-mark-white.svg" alt="GitHub" class="w-6 h-6" />
            </a>

            <a class="mx-4 text-white hover:text-gray-300" href="tel:+886920068789">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V20.92C22 21.47 21.55 21.92 21 21.92C10.61 21.92 2 13.31 2 2.92C2 2.37 2.45 1.92 3 1.92H7C7.27 1.92 7.52 2.07 7.65 2.3L10.15 6.8C10.27 7.02 10.26 7.29 10.13 7.5L8.13 10.5C9.66 13.54 12.37 16.25 15.41 17.78L18.41 15.78C18.62 15.65 18.89 15.64 19.11 15.76L23.61 18.26C23.84 18.39 23.99 18.64 23.99 18.91V16.92H22Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>


          <a class="mx-4 text-white hover:text-gray-300" href="https://www.linkedin.com/in/roy-peng-593596324">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          
          <a class="mx-4 text-white hover:text-gray-300" href="mailto:112306079@g.nccu.edu.tw">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <p class="w-full py-6 mx-auto text-white text-center bg-[#06112e]">
      &copy; 2025 Roy Website All rights reserved.
    </p>
  </footer>
</template>
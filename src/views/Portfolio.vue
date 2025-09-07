<template>
  <div class="container mx-auto px-6 py-12">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-gray-800 text-center">Portfolio</h2>
    <p class="mt-2 text-gray-600 text-center">
      This is a website with Tailwind CSS and Vue.js to introduce myself.
    </p>

    <!-- Project Cards -->
    <div class="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Project 1 -->
    <div class="flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4">
    <img
        src="/nightmarket.png"
        alt="Snack Hunter – Night Market Search"
        class="rounded-md mb-4 h-48 w-full object-cover"
    />
    <h3 class="text-xl font-semibold">Snack Hunter – Night Market Search</h3>
    <p class="mt-2 text-gray-600 text-sm flex-grow">
        A multi-tier project to search Taiwanese night-market foods:
        Java Spring Boot backend with keyword extraction & re-ranking,
        Python Flask API for search/fetch, plus an iOS SwiftUI app.
    </p>
    <div class="mt-3 flex gap-2 text-xs flex-wrap">
        <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Spring Boot</span>
        <span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded">Flask</span>
        <span class="px-2 py-1 bg-sky-100 text-sky-700 rounded">SwiftUI</span>
        <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Google CSE</span>
    </div>
    <a
        href="https://github.com/RoyPeng126/DS_Project"
        target="_blank"
        class="inline-block mt-4 text-emerald-600 hover:underline"
    >View Code</a>
    </div>

    <!-- Project 2 -->
    <div class="flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4">
        <img
        src="/letsstock.png"
        alt="Stock Analyzer"
        class="rounded-md mb-4 h-48 w-full object-cover"
        />
        <h3 class="text-xl font-semibold">Stock Analysis App</h3>
        <p class="mt-2 text-gray-600 text-sm flex-grow">
        A Node.js + Postgres project fetching financial data with Alpha Vantage
        API and visualizing it using ECharts.
        </p>
        <div class="mt-3 flex gap-2 text-xs flex-wrap">
        <span class="px-2 py-1 bg-sky-100 text-sky-700 rounded">Node.js</span>
        <span class="px-2 py-1 bg-pink-100 text-pink-700 rounded">Postgres</span>
        <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded">ECharts</span>
        </div>
        <a
        href="https://github.com/RoyPeng126/Lets-Stock"
        target="_blank"
        class="inline-block mt-4 text-emerald-600 hover:underline"
        >View Code</a>
    </div>

    <!-- Project 3 -->
    <div class="flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4">
        <img
        src="/WEBSITE.png"
        alt="Personal Website"
        class="rounded-md mb-4 h-48 w-full object-cover"
        />
        <h3 class="text-xl font-semibold">Personal Portfolio Website</h3>
        <p class="mt-2 text-gray-600 text-sm flex-grow">
        A responsive personal website built with Vue.js and Tailwind CSS to
        showcase my skills, projects, and experience.
        </p>
        <div class="mt-3 flex gap-2 text-xs flex-wrap">
        <span class="px-2 py-1 bg-green-100 text-green-700 rounded">Vue.js</span>
        <span class="px-2 py-1 bg-teal-100 text-teal-700 rounded">Tailwind CSS</span>
        </div>
        <a
        href="https://github.com/RoyPeng126/roy-introduction"
        target="_blank"
        class="inline-block mt-4 text-emerald-600 hover:underline"
        >View Code</a>
    </div>
    </div>
  </div>
</template>

<script setup>
// 這裡目前不需要任何邏輯
</script>

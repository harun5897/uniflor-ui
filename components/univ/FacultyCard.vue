<script setup lang="ts">
defineProps<{
  acronym: string
  name: string
  colorCode: string
  studyProgramCount: number | null
  studyProgram: string
  link: string
}>()
</script>

<template>
  <div
    class="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-105"
  >
    <div class="bg-[#6A5ACD] py-4 text-center">
      <p class="text-xs text-white font-kumbh-sans">Program Sarjana (S1)</p>
      <h2 class="text-2xl font-bold text-white font-lato">{{ acronym }}</h2>
    </div>
    <div class="flex flex-col items-center text-center p-6">
      <h3 class="text-lg font-bold font-lato mb-1">
        {{ name }}
      </h3>
      <p class="text-sm text-gray-600 font-kumbh-sans mb-4">
        {{ studyProgramCount }} Program Studi
      </p>
      <NuxtLink
        :to="link"
        class="border border-gray-400 text-gray-800 text-sm rounded-full px-5 py-2 hover:bg-gray-100 transition"
      >
        Kunjungi Website
      </NuxtLink>
    </div>
  </div>
</template>
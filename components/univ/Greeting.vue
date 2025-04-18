<script lang="ts" setup>
defineProps<{
  name: string,
  description: string,
  image: string,
}>()
</script>

<template>
  <div
    id="greeting"
    class="px-6 lg:px-[50px] bg-[#F0FAFF] py-14"
  >
    <div class="lg:flex">
      <img
        class="lg:max-w-[371px] lg:mr-8 lg:mb-0 mb-6"
        :src="getPublicUrl(image, 'assets')"
        alt="rector"
      >
      <div>
        <label
          for="title"
          class="text-3xl font-bold font-lato"
        >{{ name }}</label>
        <p class="my-4 font-kumbh-sans text-lg text-grey-600">"{{ description }}"</p>
        <button
          class="p-5 border border-primary-main leading-0 rounded-full text-primary-main hover:bg-primary-main hover:text-white cursor-pointer"
        >Lihat Semua
          Pimpinan</button>
      </div>
    </div>
  </div>
</template>
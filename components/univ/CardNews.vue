<script setup lang="ts">
defineProps<{
  category: string
  banner: string
  title: string | null
  date: string
}>()
</script>
<template>
  <div class="w-full h-full bg-white rounded-lg">
    <img
      :src="getPublicUrl(banner, 'assets')"
      class="h-[200px] md:h-[230px] lg:h-[200px] xl:h-[250px] w-full object-cover rounded-t-lg"
      alt="alt"
    />
    <div class="py-6 px-4">
      <div class="inline-block border border-grey-300 rounded-full py-1.5 px-3 mb-2">
        <h6 class="text-xs text-grey-800 font-kumbh-sans font-medium"> {{ category }}</h6>
      </div>
      <h3 class="text-xl font-lato font-bold mt-2 text-ellipsis overflow-hidden line-clamp-2">
        {{ title }}
      </h3>
      <h6 class="text-sm text-grey-600 font-kumbh-sans font-normal my-3">{{ date }}</h6>
      <NuxtLink
        to="/"
        class="text-base font-bold text-grey-800"
      >
        Selengkapnya
      </NuxtLink>
    </div>
  </div>
</template>

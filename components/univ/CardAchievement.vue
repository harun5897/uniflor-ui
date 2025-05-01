<script setup lang="ts">
defineProps<{
  image: string
  title: string | null
  date: string
}>()
</script>
<template>
  <div class="w-full h-full bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <NuxtLink to="/">
      <img
        :src="getPublicUrl(image, 'assets')"
        class="h-[200px] md:h-[230px] lg:h-[200px] xl:h-[250px] w-full object-cover rounded-t-lg"
        alt="alt"
      />
      <div class="py-6 px-4">
        <h3 class="text-xl font-lato font-bold mt-2 text-ellipsis overflow-hidden line-clamp-2">
          {{ title }}
        </h3>
        <h6 class="text-sm text-grey-600 font-kumbh-sans font-normal my-3">{{ date }}</h6>
      </div>
    </NuxtLink>
  </div>
</template>

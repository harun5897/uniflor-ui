<script setup lang="ts">
defineProps<{
  title: string
  tag: string
  labelButton: string
  items: Array<UnivNews>
}>()
</script>

<template>
  <div
    id="news-and-activity"
    class="px-6 lg:px-[50px] bg-[#F0FAFF]"
  >
    <div class="flex justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold font-lato">{{ title }}</h1>
        <h6 class="text-base font-kumbh-sans text-gray-600 font-normal">{{ tag }}</h6>
      </div>
      <div>
        <button class="p-5 border bg-primary-main leading-0 rounded-full text-white cursor-pointer">
          {{ labelButton }}
        </button>
      </div>
    </div>
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
      >
        <UnivCardNews
          :category="(item as any).univ_news_category?.[0]?.news_category?.name || 'N/A'"
          :banner="(item as any).banner"
          :title="item.title"
          :date="item.created_at"
        />
      </div>
    </div>
  </div>
</template>

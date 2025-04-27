<script setup lang="ts">
import { formatDate } from '~/uniflor-ui/shared/date-utils';

defineProps<{
    index: number,
    currentIndex: number,
    slideWidth: number,
    categories: Array<any>,
    date: string,
    title: string,
    description: string,
    slug: string
}>()
</script>

<template>
    <div
        :key="index"
        class="flex-shrink-0 "
        :style="{ width: `${slideWidth}px` }"
    >

        <div class="rounded-lg shadow-md flex flex-row">
            <div class="w-1/2 px-4 py-4 rounded-lg">
                <img
                    class="rounded-lg"
                    src="https://placehold.co/600x400"
                />
            </div>
            <div class="w-1/2 flex flex-col justify-center items-start pr-8">
                <div class="w-full flex flex-row justify-start">
                    <div
                        class="rounded-full border px-2 border-gray-500 font-kumbh-sans font-light text-gray-400"
                        v-for="category in categories"
                    >
                        {{ category.news_category.name }}
                    </div>
                </div>
                <p class="font-kumbh-sans text-gray-400 font-light">{{ formatDate(date) }}</p>
                <p class="font-lato font-bold text-2xl my-1 ">{{ title }}</p>
                <p class="font-kumbh-sans font-light text-gray-500">{{ description }}</p>
                <NuxtLink
                    :to="'/news/' + slug"
                    class="mt-4 flex flex-row justify-start gap-1 items-center font-lato cursor-pointer"
                >
                    Selengkapnya
                    <Icon name="material-symbols:arrow-right-alt-rounded" />
                </NuxtLink>
            </div>

        </div>
    </div>
</template>
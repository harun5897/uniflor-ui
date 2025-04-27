<script setup lang="ts">
import { formatDate } from '~/uniflor-ui/shared/date-utils';

const props = defineProps<{
    title: string,
    totalPages: number,
    selectedCategory: NewsCategory | null,
    labelButtonAllCategory: string,
    categories: Array<NewsCategory>,
    news: Array<UnivNews>
}>()

const pages = computed(() => {
    if (props.totalPages > 3) {
        return [1, 2, 3]
    }
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
})
</script>
<template>
    <section
        id="latest"
        class="relative w-full h-full overflow-hidden px-6 py-4"
    >
        <div class="w-full">
            <div class="font-lato font-semibold text-2xl my-2">
                {{ title }}
            </div>
        </div>
        <div class="w-full flex flex-row gap-2">
            <div
                class="font-lato w-min text-nowrap px-2 py-1 text-center font-semibold my-2 rounded-full"
                :class="selectedCategory == null ? 'bg-primary-light text-primary-main' : 'border-gray-300  border  text-gray-500'"
            >
                {{ labelButtonAllCategory }}
            </div>
            <div
                v-for="category in categories"
                class="font-lato w-min px-2 py-1 text-center font-semibold my-2 rounded-full border "
                :class="selectedCategory?.id == category.id ? 'bg-primary-main text-primary-dark' : 'border-gray-300 text-gray-500'"
            >
                {{ category.name ?? 'N/a' }}
            </div>
        </div>
        <div class="w-full flex flex-row flex-wrap justify-items-start">
            <template v-for="item in news">
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
                    <UnivCardNews
                        :categories="(item as any).univ_news_category"
                        :banner="item.banner ?? ''"
                        :title="item.title"
                        :date="formatDate(item.created_at)"
                    />
                </div>

            </template>

        </div>
        <div class="w-full flex flex-row justify-start items-center">
            <span
                v-for="item in pages"
                class="w-[30px] h-[30px] m-1 rounded-full cursor-pointer text-center bg-primary-main font-lato font-medium text-white flex flex-col justify-center items-center"
                @click="() => { }"
            >
                {{ item }}
            </span>
            <span
                :class="{ 'bg-primary-main cursor-pointer': pages.length > 3, 'bg-gray-300': pages.length <= 3 }"
                class="w-[30px] h-[30px] m-1 rounded-full  text-center font-lato font-medium text-white flex flex-col justify-center items-center"
            >
                <Icon name="material-symbols:arrow-right-alt-rounded" />
            </span>
        </div>
    </section>

</template>
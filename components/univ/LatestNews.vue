<script lang="ts" setup>

const props = defineProps<{
    title: string,
    items: Array<UnivNews>
}>()
const screenWidth = ref(200)
const screenHeight = ref(200)
const currentIndex = ref<number>(0);
const slideMainWidth = computed(() => {
    if (screenWidth.value > 1200) {
        return screenWidth.value - 50
    }
    return screenWidth.value - 50
});


const transformStyle = computed<string>(() => {
    return `translateX(-${screenWidth.value * currentIndex.value}px)`;
});

function prevSlide() {
    currentIndex.value =
        currentIndex.value === 0 ? props.items.length - 1 : currentIndex.value - 1;
};

function nextSlide() {
    currentIndex.value =
        currentIndex.value === props.items.length - 1 ? 0 : currentIndex.value + 1;
};
function onResize() {
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight
}
onMounted(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
        window.removeEventListener('resize', onResize)
    }
})
</script>
<template>
    <client-only>
        <section
            id="latest"
            class="relative w-full h-full overflow-hidden px-6 py-4"
        >
            <!-- TITLE -->
            <div class="font-lato font-semibold text-2xl">
                {{ title }}
            </div>
            <!-- CARAOUSEL -->
            <div
                class="flex transition-transform duration-500"
                :style="{ transform: transformStyle, gap: '50px' }"
            >
                <UnivItemCaraouselLatestNews
                    v-for="(slide, index) in items"
                    :key="index"
                    :index="index"
                    :current-index="currentIndex"
                    :event="slide"
                    :slide-width="slideMainWidth"
                    :categories="(slide as any).univ_news_category"
                    :date="slide.created_at"
                    :title="slide.title ?? ''"
                    :description="slide.description ?? ''"
                    :slug="slide.slug ?? '404'"
                ></UnivItemCaraouselLatestNews>
            </div>
            <!-- DOTS -->
            <div class="w-full flex flex-row justify-center gap-1 items-center my-2">
                <span
                    v-for="(item, index) in items"
                    @click="() => {
                        currentIndex = index
                    }"
                    class="w-[10px] h-[10px]  rounded-full"
                    :class="{
                        'bg-primary-main': index == currentIndex,
                        'bg-gray-300': index != currentIndex
                    }"
                >
                </span>
            </div>
        </section>
    </client-only>
</template>
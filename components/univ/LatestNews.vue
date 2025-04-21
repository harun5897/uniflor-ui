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
        return screenWidth.value - (screenWidth.value / 3)
    }
    return screenWidth.value - (screenWidth.value / 5)
});

const slideMainHeight = computed(() => {
    if (screenWidth.value > 1200) {
        return screenHeight.value - (screenHeight.value / 3)
    }
    if (screenWidth.value > 800) {
        return screenHeight.value - (screenHeight.value / 3)
    }
    if (screenWidth.value > 580) {
        return screenHeight.value - (screenHeight.value / 2 + 10)
    }
    return screenHeight.value - ((screenHeight.value / 3) * 2)
}
);

const gap: number = 16;
const transformStyle = computed<string>(() => {
    return `translateX(-${slideMainWidth.value * currentIndex.value}px)`;
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
            class="relative w-full h-full overflow-hidden"
        >
            <!-- TITLE -->
            <div>
                {{ title }}
            </div>
            <!-- CARAOUSEL -->
            <div
                class="flex transition-transform duration-500"
                :style="{ transform: transformStyle, gap: `${gap}px` }"
            >
                <ItemCaraouselLatestNews
                    v-for="(slide, index) in items"
                    :key="index"
                    :index="index"
                    :event="slide"
                    :slide-width="slideMainWidth"
                    :slide-height="slideMainHeight"
                ></ItemCaraouselLatestNews>
            </div>
            <!-- DOTS -->
            <div>
                <span
                    v-for="(item, index) in items"
                    @click="() => {
                        currentIndex = index
                    }"
                    class="w-[10px] h-[10px]  rounded-full"
                    :class="{ 'bg-primary-main': index == currentIndex }"
                >
                </span>
            </div>
        </section>
    </client-only>
</template>
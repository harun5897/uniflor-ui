<script setup lang="ts">
defineProps<{
    index: number,
    slideWidth: number,
    slideHeight: number,
}>()
</script>

<template>
    <div
        :key="index"
        class="flex-shrink-0"
        :style="{ width: `${slideWidth}px`, height: `${slideHeight}px` }"
        :class="{ 'ml-14': (index == 0) }"
    >
        <NuxtLink
            :to="'/'"
            class="w-full h-full rounded-lg shadow  flex items-center justify-center bg-[#F3E8FF] relative cursor-pointer"
        >
            <div class="flex-1 flex flex-col items-center justify-center h-full z-20">
                <NuxtImg
                    :src="''"
                    class="cover w-full h-full"
                />
            </div>
        </NuxtLink>
    </div>
</template>
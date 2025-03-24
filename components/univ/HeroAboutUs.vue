<script lang="ts" setup>
defineProps<{
    breadcrumbs: Array<string>,
    title: string,
    image: string
}>()
</script>
<template>
    <div
        id="section-univ-hero-about-us"
        class="w-screen h-full min-h-1/3 flex flex-row justify-between items-center"
    >
        <!-- Breadcrumbs and title -->
        <div>
            <span v-for="breadcrumb in breadcrumbs">
                {{ breadcrumb }}
            </span>
            <div>
                {{ title }}
            </div>
        </div>
        <!-- IMAGE -->
        <div>
        
        </div>
    </div>
</template>
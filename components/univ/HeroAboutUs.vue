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
        class="w-screen h-full min-h-1/3 flex flex-row justify-between items-center bg-primary-light px-8 py-10"
    >
        <!-- Breadcrumbs and title -->
        <div>
            <div class="flex flex-row justify-start items-center">
                <span
                    v-for="(breadcrumb, index) in breadcrumbs"
                    class="h-max flex flex-row items-center"
                >
                    {{ breadcrumb }}
                    <Icon
                        v-show="index < breadcrumbs.length - 1"
                        name="ic:round-keyboard-arrow-right"
                    />
                </span>
            </div>
            <div class="text-2xl font-lato font-semibold text-primary-main">
                {{ title }}
            </div>
        </div>
        <!-- IMAGE -->
        <div>

        </div>
    </div>
</template>
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
        class="w-screen h-full min-h-1/3 flex flex-row flex-wrap justify-between items-center bg-primary-lighter px-8 py-10"
    >
        <!-- Breadcrumbs and title -->
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
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
            <div class="text-3xl font-lato font-semibold text-primary-main">
                {{ title }}
            </div>
        </div>
        <!-- IMAGE -->
        <div class="w-full sm:w-2/3 md:w-2/3 lg:w-[500px] xl:w-[500px]  h-[250px] relative">
            <div
                class="image-mask"
                :style="`background-image:url('${getPublicUrl(image, 'assets')}');mask-image:url('${getPublicUrl('images/masking-image-hero.svg', 'assets')}');`"
            />
            <img
                :src="getPublicUrl('/images/mask-hero-left.svg', 'assets')"
                class="absolute left-0 bottom-0 w-[80px] h-[50px] ml-10"
            />
            <img
                :src="getPublicUrl('/images/mask-hero-right.svg', 'assets')"
                class="absolute right-0 top-0 w-[80px] h-[50px] mr-16"
            />
        </div>
    </div>
</template>
<style scoped>
.image-mask {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
}
</style>
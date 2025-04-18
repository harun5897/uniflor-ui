<script lang="ts" setup>
defineProps<{
    name: string,
    image: string
}>()
</script>
<template>
    <div class="w-1/3 px-2 h-full justify-center items-center shadow-sm">
        <div>
            <img
                :src="getPublicUrl('images/univ/facility/items/' + image, 'assets')"
                alt="Facility Image"
                class="w-full h-min-[100px] h-full object-cover"
            />
        </div>
        <p class="w-full font-lato text-center my-2">{{ name }}</p>
    </div>
</template>
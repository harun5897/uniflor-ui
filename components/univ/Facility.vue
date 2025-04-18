<script lang="ts" setup>
defineProps<{
    items: Array<{
        name: string,
        image: string
    }>
}>();
</script>
<template>
    <div class="w-full flex flex-row flex-wrap justify-start items-center px-4  mt-6">
        <UnivItemFacility
            v-for="item in items"
            :image="item.image"
            :name="item.name"
        />
    </div>
</template>
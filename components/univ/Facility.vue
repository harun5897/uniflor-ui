<script lang="ts" setup>
defineProps<{
    items: Array<{
        name: string,
        images: string
    }>
}>();
</script>
<template>
    <div class="w-full flex flex-row flex-wrap justify-between items-center">
        <UnivItemFacility
            v-for="item in items"
            :images="item.images"
            :name="item.name"
        />
    </div>
</template>
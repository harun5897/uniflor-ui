<script lang="ts" setup>
defineProps<{
    name: string,
    images: string
}>()
</script>
<template>
    <div class="w-1/3">
        <p>{{ name }}</p>
    </div>
</template>
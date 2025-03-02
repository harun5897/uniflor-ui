<script setup lang="ts">
const website = useWebsiteStore()
await callOnce(website.fetch)
</script>
<template>
    <div id="page-index">
        <h1 class="text-2xl font-medium">Hello Page Uniflor</h1>
        <p>{{ website.name }}</p>
        <p>{{ website.description }}</p>
        <button class="p-3 bg-blue-400 text-white rounded cursor-pointer mt-2" @click="website.updateState">Update State</button>
    </div>
</template>
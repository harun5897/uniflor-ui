<script setup lang="ts">
const website = useWebsiteStore()
await callOnce(website.fetch)
</script>
<template>
    <div id="page-index">
        <UnivCallToAction
            :content-props="{ title: 'hehe', subtitle: 'hoho', labelButtonPrimary: 'daftar', labelButtonSecondary: 'hehe' }"
        />
    </div>
</template>
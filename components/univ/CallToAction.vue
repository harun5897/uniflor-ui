<script lang="ts" setup>
defineProps<{
    contentProps: {
        title: string,
        subtitle: string,
        labelButtonPrimary: string,
        labelButtonSecondary: string
    }
}>()
defineEmits<{
    'action:register': [],
    'action:check-registration-info': []
}>()
</script>
<template>
    <div class="w-full px-6 py-2">
        <div class="flex flex-row flex-wrap justify-between w-full rounded-lg bg-primary-main px-4 py-4 items-center">
            <div>
                <h2 class="text-white text-2xl w-2/3 font-semibold mb-4 font-lato">{{ contentProps.title }}</h2>
                <p class="text-white font-normal text-sm font-kumbh-sans">{{ contentProps.subtitle }}
                </p>
            </div>
            <div class="flex flex-row gap-2">
                <button
                    @click="$emit('action:register')"
                    class="rounded-full h-min bg-orange-500 text-white px-4 py-1 font-lato"
                >{{ contentProps.labelButtonPrimary }}</button>
                <button
                    @click="$emit('action:check-registration-info')"
                    class="rounded-full h-min text-white border border-white px-4 py-1 font-lato"
                >{{ contentProps.labelButtonSecondary }}</button>
            </div>

        </div>
    </div>
</template>
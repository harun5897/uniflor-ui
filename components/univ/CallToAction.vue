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
        <div class="flex flex-row flex-wrap justify-between w-full rounded-lg bg-primary-main  px-4 py-4">
            <div>
                <p class="text-white font-semibold  font-lato text-2xl w-2/3 mb-4">{{ contentProps.title }}</p>
                <p class="text-white font-normal font-kumbh-sans text-sm">{{ contentProps.subtitle }}
                </p>
            </div>
            <div class="flex flex-row items-center gap-2 font-lato">
                <button
                    @click="$emit('action:register')"
                    class="rounded-full bg-orange-400 text-white px-4 h-min py-1"
                >{{ contentProps.labelButtonPrimary }}</button>
                <button
                    @click="$emit('action:check-registration-info')"
                    class="rounded-full text-white border border-white px-4 h-min py-1"
                >{{ contentProps.labelButtonSecondary }}</button>
            </div>

        </div>
    </div>
</template>
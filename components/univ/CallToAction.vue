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
        <div class="flex flex-row flex-wrap justify-between w-full rounded-lg bg-blue-500 px-4 py-4">
            <div>
                <p class="text-white font-semibold mb-4">{{ contentProps.title }}</p>
                <p class="text-white font-normal text-sm">{{ contentProps.subtitle }}
                </p>
            </div>
            <div class="flex flex-row gap-2">
                <button
                    @click="$emit('action:register')"
                    class="rounded-full bg-orange-400 text-white px-6 py-1"
                >{{ contentProps.labelButtonPrimary }}</button>
                <button
                    @click="$emit('action:check-registration-info')"
                    class="rounded-full text-white border border-white px-6 py-1"
                >{{ contentProps.labelButtonSecondary }}</button>
            </div>

        </div>
    </div>
</template>
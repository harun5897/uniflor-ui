<script lang="ts" setup>
const props = defineProps<{
    hideOnClickOutside?: boolean,
    z?: string
}>()
const showDialog = defineModel<boolean>('showDialog', { required: true })
const elementDialog = ref<HTMLElement | null>(null);
const elementSlot = ref<HTMLElement | null>(null);
function handleClickOutside(event: MouseEvent) {
    if (props.hideOnClickOutside) {
        if (elementSlot.value && !elementSlot.value.contains(event.target as Node)) {
            showDialog.value = false;
        }
    }
}

watch(showDialog, (show) => {
    const el = document.getElementById('main-element')
    if (show) {
        el?.classList.remove('overflow-y-scroll')
        el?.classList.add('overflow-y-hidden')
    } else {
        el?.classList.remove('overflow-y-hidden')
        el?.classList.add('overflow-y-scroll')
    }
})


onMounted(() => {
    elementDialog.value?.addEventListener('click', handleClickOutside);
    return () => {
        elementDialog.value?.removeEventListener('click', handleClickOutside);
    }
});
</script>


<template>

    <dialog
        ref="elementDialog"
        :class="[z ? z : ' z-50']"
        class="fixed bg-gray-700 bg-opacity-30 top-0"
        :open="showDialog"
    >
        <div class="h-screen w-[100vw]">
            <div class="h-full w-full flex flex-row justify-center items-center">
                <div ref="elementSlot">
                    <slot />
                </div>
            </div>
        </div>
    </dialog>


</template>
<style scoped>
dialog[open] {
    animation: fadein 0.3s ease-in forwards;
}

dialog[close] {
    animation: fadeout 0.3s ease-in forwards;
}

@keyframes fadein {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeout {
    0% {
        opacity: 0;
        transform: translateY(0);
    }

    100% {
        opacity: 1;
        transform: translateY(-20px);
    }
}
</style>
<script lang="ts" setup>
defineProps<{
    items: Array<{
        name: string,
        image: string
    }>
}>();

const showItem = ref(false)
const currentImage = ref<null | string>(null)
</script>
<template>
    <div class="w-full flex flex-row flex-wrap justify-start items-center px-4  mt-6">
        <UnivBaseDialog v-model:show-dialog="showItem">
            <div class="w-full h-full bg-white">
                <button
                    @click="() => {
                        showItem = false
                        currentImage = null
                    }"
                    class="absolute top-0 right-0 bg-white rounded-full px-1 py-1 h-[30px] w-[30px] m-4"
                >
                    <Icon
                        name="material-symbols:close-small-rounded"
                        size="20"
                    />
                </button>
                <img :src="currentImage ?? ''" />
            </div>
        </UnivBaseDialog>
        <UnivItemFacility
            v-for="item in items"
            :image="item.image"
            :name="item.name"
            @action:show-item="(url: string) => {
                showItem = true
                currentImage = url
            }"
        />
    </div>
</template>
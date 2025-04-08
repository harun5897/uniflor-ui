<script lang="ts" setup>
defineProps<{
    items: Array<{ name: string, label: string, extend_value: any }>,
    vision: UnivVision | null,
    history: Array<UnivHistory>,
    rector: Array<UnivRector>,
    subfield: Array<UnivSubfield>
}>()

const emit = defineEmits<{
    'change:item': [string]
}>()

const selected = ref(0)

function onSelectMenu(index: number, name: string) {
    selected.value = index
    emit('change:item', name)
}
</script>
<template>
    <div
        id="section-univ-hero-about-us"
        class="w-screen h-full min-h-1/3 flex flex-row flex-wrap justify-between items-start  px-8 py-10"
    >

        <div class="w-full sm:w-full md:w-full lg:w-[25%] xl:w-[25%] px-2 py-2">
            <div class="bg-white px-2 py-2 shadow-sm rounded-md">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="rounded-lg font-lato  px-2 py-2 mb-2 hover:bg-primary-lighter hover:text-primary-main cursor-pointer"
                    :class="{
                        'bg-primary-lighter text-primary-main': selected == index,
                        'bg-white text-grey-600': selected != index
                    }"
                    @click="() => onSelectMenu(index, item.name)"
                >
                    {{ item.label }}
                </div>
            </div>

        </div>
        <div class="w-full sm:w-full md:w-full lg:w-[75%] xl:w-[75%] px-4 py-2">
            <!-- HISTORY -->
            <div v-if="history != null && items[selected].name == 'history'">
                <p class="font-lato font-semibold text-3xl my-4">{{ items[selected].label }}</p>
                <div>
                    <div v-for="item in history">
                        <p class="font-lato font-semibold mb-2 text-lg">{{ item.title }}</p>
                        <p class="font-kumbh-sans font-normal">{{ item.content }}</p>
                    </div>
                </div>
            </div>
            <!-- VISION & MISSION -->
            <div v-if="vision != null && items[selected].name == 'vision-mission'">
                <p class="font-lato font-semibold text-3xl">{{ items[selected].label }}</p>
                <div>
                    <p class="font-semibold text-lg font-lato my-4">{{ vision.vision_label }}</p>
                    <div class="font-kumbh-sans">{{ vision.vision }}</div>
                    <p class="font-semibold text-lg font-lato my-4">{{ vision.mission_label }}</p>
                    <div class="font-kumbh-sans">{{ vision.mission }}</div>
                </div>
            </div>
            <!-- MANAGEMENT -->
            <div v-if="(rector != null || subfield != null) && items[selected].name == 'management'">
                <p class="font-lato font-semibold text-3xl">{{ items[selected].label }}</p>
                <p>Periode {{ items[selected].extend_value?.period ?? '' }}</p>

                <p class="font-semibold text-lg font-lato mt-8"> Rektor</p>
                <div
                    v-for="item in rector"
                    class="border-b-[1px] border-grey-300 py-2 flex flex-row flex-wrap justify-start items-center"
                >
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 py-2">
                        <img src="https://placehold.co/600x400" />
                    </div>
                    <div class="w-full sm:w-full md:w-1/2 lg:w-2/3 xl:w-2/3 pl-2">
                        <div class="px-4 bg-primary-main rounded-full w-min text-white">Rektor
                        </div>
                        <p class="font-medium font-lato text-lg mb-4"> {{ item.name }}</p>
                        <p class="font-kumbh-sans">{{ item.description }}</p>
                    </div>
                </div>
                <p class="font-semibold text-lg font-lato my-2">Sub bidang</p>
                <div class="w-full flex flex-row flex-wrap">
                    <div
                        v-for="item in subfield"
                        class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-start items-center mt-2"
                    >
                        <div class="w-full h-full bg-grey-200 p-3 rounded-lg mr-2">
                            <p class="text-primary-main text-lg font-lato mb-2 min-h-3">{{ item.name }}</p>
                            <p class="text-grey-700 font-lato text-sm">Kepala</p>
                            <p class="font-medium font-kumbh-sans text-md">{{ item.leader_name }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
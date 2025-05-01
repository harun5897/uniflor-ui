<script setup lang="ts">
interface FacultyItem {
  acronym: string
  name: string
  colorCode: string
  studyProgramCount: number | null
  studyProgram: string
  link: string
}

defineProps<{
  items: FacultyItem[]
}>()
</script>


<template>
  <div class="px-6 lg:px-0 py-10 bg-[#F9FBFD]">
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(item, index) in items"
        class="w-full lg:w-[45%] xl:w-[30.5%]"
      >
        <UnivFacultyCard
          :acronym="item.acronym"
          :name="item.name"
          :colorCode="item.colorCode"
          :studyProgramCount="(item as any).studyProgramCounts"
          :studyProgram="item.studyProgram"
          :link="item.link"
        />
      </div>
    </div>
  </div>
</template>

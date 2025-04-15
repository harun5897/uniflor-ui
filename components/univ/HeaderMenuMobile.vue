<script setup lang="ts">
defineProps<{
  itemsAboutUs: { label: string; path: string }[]
  itemsAcademicPrograms: { label: string; path: string }[]
  itemsInstitutionAndUpt: { label: string; path: string }[]
  itemsServices: { label: string; path: string }[]
  itemsInformation: { label: string; path: string }[]
}>();

defineEmits(['closeMenuMobile'])

const isHoveredAboutUs = defineModel('isHoveredAboutUs', { required: true })
const isHoveredAcademicPrograms = defineModel('isHoveredAcademicPrograms', { required: true })
const isHoveredInstitutionAndUpt = defineModel('isHoveredInstitutionAndUpt', { required: true })
const isHoveredServices = defineModel('isHoveredServices', { required: true })
const isHoveredInformation = defineModel('isHoveredInformation', { required: true })
</script>

<template>
  <div
    id="header-menu-mobile"
    class="lg:hidden absolute top-0 w-full h-screen z-50 bg-white py-4 px-6"
  >
    <div class="flex justify-end h-[32px] md:h-[47px] items-center">
      <IconsMenu
        class="cursor-pointer text-2xl"
        @click="$emit('closeMenuMobile')"
      />
    </div>
    <div>
      <ul class="text-base font-semibold">
        <li class="py-2 px-2">
          <NuxtLink to="/">Beranda</NuxtLink>
        </li>
        <li
          @click="isHoveredAboutUs = !isHoveredAboutUs"
          class="py-2 px-2"
          :class="[!isHoveredAboutUs ? '' : 'bg-gray-100 rounded-md']"
        >
          <NuxtLink
            to="/"
            class="flex justify-between items-center"
          >
            <div>Tentang Kami</div>
            <div class="w-4 h-4">
              <IconsArrowDown
                class="w-full h-full"
                :class="[isHoveredAboutUs ? 'rotate-180' : 'rotate-0']"
              />
            </div>
          </NuxtLink>
          <div v-if="isHoveredAboutUs">
            <UnivHeaderDropdownMobile :items="itemsAboutUs" />
          </div>
        </li>
        <li class="py-2 px-2">
          <NuxtLink to="/">Kuliah Di Uniflor</NuxtLink>
        </li>
        <li
          @click="isHoveredAcademicPrograms = !isHoveredAcademicPrograms"
          class="py-2 px-2"
          :class="[!isHoveredAcademicPrograms ? '' : 'bg-gray-100 rounded-md']"
        >
          <NuxtLink
            to="/"
            class="flex justify-between items-center"
          >
            <div>Program Akademik</div>
            <div class="w-4 h-4">
              <IconsArrowDown
                class="w-full h-full"
                :class="[isHoveredAcademicPrograms ? 'rotate-180' : 'rotate-0']"
              />
            </div>
          </NuxtLink>
          <div v-if="isHoveredAcademicPrograms">
            <UnivHeaderDropdownMobile :items="itemsAcademicPrograms" />
          </div>
        </li>
        <li
          @click="isHoveredInstitutionAndUpt = !isHoveredInstitutionAndUpt"
          class="py-2 px-2"
          :class="[!isHoveredInstitutionAndUpt ? '' : 'bg-gray-100 rounded-md']"
        >
          <NuxtLink
            to="/"
            class="flex justify-between items-center"
          >
            <div>Lembaga & UPT</div>
            <div class="w-4 h-4">
              <IconsArrowDown
                class="w-full h-full"
                :class="[isHoveredInstitutionAndUpt ? 'rotate-180' : 'rotate-0']"
              />
            </div>
          </NuxtLink>
          <div v-if="isHoveredInstitutionAndUpt">
            <UnivHeaderDropdownMobile :items="itemsInstitutionAndUpt" />
          </div>
        </li>
        <li
          @click="isHoveredServices = !isHoveredServices"
          class="py-2 px-2"
          :class="[!isHoveredServices ? '' : 'bg-gray-100 rounded-md']"
        >
          <NuxtLink
            to="/"
            class="flex justify-between items-center"
          >
            <div>Layanan</div>
            <div class="w-4 h-4">
              <IconsArrowDown
                class="w-full h-full"
                :class="[isHoveredServices ? 'rotate-180' : 'rotate-0']"
              />
            </div>
          </NuxtLink>
          <div v-if="isHoveredServices">
            <UnivHeaderDropdownMobile :items="itemsServices" />
          </div>
        </li>
        <li
          @click="isHoveredInformation = !isHoveredInformation"
          class="py-2 px-2"
          :class="[!isHoveredInformation ? '' : 'bg-gray-100 rounded-md']"
        >
          <NuxtLink
            to="/"
            class="flex justify-between items-center"
          >
            <div>Informasi</div>
            <div class="w-4 h-4">
              <IconsArrowDown
                class="w-full h-full"
                :class="[isHoveredInformation ? 'rotate-180' : 'rotate-0']"
              />
            </div>
          </NuxtLink>
          <div v-if="isHoveredInformation">
            <UnivHeaderDropdownMobile :items="itemsInformation" />
          </div>
        </li>
        <li class="py-2 px-2">
          <NuxtLink to="/">Fasilitas</NuxtLink>
        </li>
      </ul>
      <button class="bg-secondary-main text-base py-2 px-5 rounded-full cursor-pointer mt-5 w-full text-white">
        Daftar Sekarang
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpenMenuMobile = ref(false)
const isHoveredAboutUs = ref(false)
const isHoveredAcademicPrograms = ref(false)
const isHoveredInstitutionAndUpt = ref(false)
const isHoveredServices = ref(false)
const isHoveredInformation = ref(false)

const itemsAboutUs = [
  { label: 'Perjalanan Sejarah', path: '/about#about-history' },
  { label: 'Visi & Misi', path: '/about#vision-mission' },
  { label: 'Pimpinan & Managemen', path: '/about#management' }
]

const itemsAcademicPrograms = [
  { label: 'Fakultas Hukum Sosial & Humaniora', path: 'https://soshum-uniflor-dev.vercel.app' },
  { label: 'Fakultas Ekonomi & Bisnis', path: 'https://feb-uniflor-dev.vercel.app' },
  { label: 'Fakultas Keguruan & Ilmu Pendidikan', path: 'https://fkip-uniflor-dev.vercel.app' },
  { label: 'Fakultas Sains & Teknologi', path: 'https://saintek-uniflor-dev.vercel.app' }
]

const itemsInstitutionAndUpt = [
  { label: 'Badan Penjamin Mutu', path: '/#' },
  { label: 'LPPM', path: '/#' },
  { label: 'UPT Perpustakaan', path: '/#' },
  { label: 'UPT Pusat Komputer', path: '/#' },
  { label: 'UPT EDP', path: '/#' }
]

const itemsServices = [
  { label: 'Portal Akademik', path: '/#' },
  { label: 'E-Learning', path: '/#' },
  { label: 'E-Journal', path: '/#' }
]

const itemsInformation = [
  { label: 'Berita', path: '/news#latest' },
  { label: 'Kegiatan', path: '/news#activity' },
  { label: 'Prestasi', path: '/news#achievements' }
]

function toggleMenu() {
  isOpenMenuMobile.value = !isOpenMenuMobile.value
}
</script>

<template>
  <div
    id="header"
    class="w-full"
  >
    <!-- Top Bar -->
    <div class="flex items-center justify-between font-kumbh-sans py-4 px-6 lg:px-[50px]">
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            :src="getPublicUrl('/images/logo-uniflor.webp', 'assets')"
            width="100"
            class="w-[32px] h-[30px] md:w-[49px] md:h-[47px]"
            alt="logo-uniflor"
          />
        </NuxtLink>
        <div class="ml-1.5">
          <h1 class="text-[15px] md:text-2xl font-bold leading-none">Universitas Flores</h1>
          <h2 class="text-[5px] md:text-[7px] font-medium leading-none">
            Satukan Langkah Bulatkan Tekad, Menuju Uniflor Bermutu
          </h2>
        </div>
      </div>
      <div class="flex items-center">
        <img
          :src="getPublicUrl('/images/logo-banpt.webp', 'assets')"
          width="100"
          alt="logo-banpt"
          class="mx-1.5 md:mx-2.5 w-[41px] h-[30px] md:w-[60px] md:h-[44px]"
        />
        <img
          :src="getPublicUrl('/images/logo-kampus-merdeka.webp', 'assets')"
          width="100"
          alt="logo-kampus-merdeka"
          class="mx-1.5 md:mx-2.5 w-[47px] h-[25px] md:w-[68px] md:h-[36px]"
        />
        <div class="hidden lg:flex items-center border-grey-300 border-l-2 mx-2.5 pl-4 py-1.5">
          <IconsWorld />
          <span class="text-sm font-semibold leading-none mx-1">ID</span>
          <IconsArrowDown />
        </div>
        <IconsMenu
          class="lg:hidden cursor-pointer text-2xl"
          @click="toggleMenu"
        />
      </div>
    </div>
    <!-- Desktop Menu -->
    <div
      id="header-menu"
      class="lg:flex hidden justify-between items-center bg-primary-main py-2 px-6 md:px-[50px] font-kumbh-sans font-medium text-sm text-white"
    >
      <div class="flex">
        <NuxtLink
          to="/"
          class="mr-5"
        >Beranda</NuxtLink>
        <div
          @mouseenter="isHoveredAboutUs = true"
          @mouseleave="isHoveredAboutUs = false"
          class="mr-5 cursor-pointer"
        >
          Tentang Kami
          <div
            v-if="isHoveredAboutUs"
            class="absolute"
          >
            <UnivHeaderDropdown :items="itemsAboutUs" />
          </div>
        </div>
        <NuxtLink
          to="/"
          class="mr-5"
        >Kuliah Di Uniflor</NuxtLink>
        <div
          @mouseenter="isHoveredAcademicPrograms = true"
          @mouseleave="isHoveredAcademicPrograms = false"
          class="mr-5 cursor-pointer"
        >
          Program Akademik
          <div
            v-if="isHoveredAcademicPrograms"
            class="absolute"
          >
            <UnivHeaderDropdown :items="itemsAcademicPrograms" />
          </div>
        </div>
        <div
          @mouseenter="isHoveredInstitutionAndUpt = true"
          @mouseleave="isHoveredInstitutionAndUpt = false"
          class="mr-5 cursor-pointer"
        >
          Lembaga & UPT
          <div
            v-if="isHoveredInstitutionAndUpt"
            class="absolute"
          >
            <UnivHeaderDropdown :items="itemsInstitutionAndUpt" />
          </div>
        </div>
        <div
          @mouseenter="isHoveredServices = true"
          @mouseleave="isHoveredServices = false"
          class="mr-5 cursor-pointer"
        >
          Layanan
          <div
            v-if="isHoveredServices"
            class="absolute"
          >
            <UnivHeaderDropdown :items="itemsServices" />
          </div>
        </div>
        <div
          @mouseenter="isHoveredInformation = true"
          @mouseleave="isHoveredInformation = false"
          class="mr-5 cursor-pointer"
        >
          Informasi
          <div
            v-if="isHoveredInformation"
            class="absolute"
          >
            <UnivHeaderDropdown :items="itemsInformation" />
          </div>
        </div>
        <NuxtLink
          to="/"
          class="mr-5"
        >Fasilitas</NuxtLink>
      </div>
      <button class="bg-secondary-main text-base py-2 px-5 rounded-full cursor-pointer">Daftar Sekarang</button>
    </div>
    <!-- Mobile Menu -->
    <UnivHeaderMenuMobile
      v-if="isOpenMenuMobile"
      :items-about-us="itemsAboutUs"
      :items-academic-programs="itemsAcademicPrograms"
      :items-institution-and-upt="itemsInstitutionAndUpt"
      :items-services="itemsServices"
      :items-information="itemsInformation"
      :is-hovered-about-us="isHoveredAboutUs"
      :is-hovered-academic-programs="isHoveredAcademicPrograms"
      :is-hovered-institution-and-upt="isHoveredInstitutionAndUpt"
      :is-hovered-services="isHoveredServices"
      :is-hovered-information="isHoveredInformation"
      @close-menu-mobile="toggleMenu"
    />
  </div>
</template>

<template>
    <div
        id="header"
        class="w-full"
    >
        <div class="flex justify-between font-kumbh-sans items-center lg:px-[50px] px-6 py-4">
            <div class="flex items-center">
                <NuxtLink to="/">
                    <img
                        src="~/assets/images/logo-uniflor.jpg"
                        width="49"
                        height="47"
                        alt="logo-uniflor"
                    />
                </NuxtLink>
                <div class="hidden lg:block ml-1.5">
                    <h1 class="text-2xl font-bold">Universitas Flores</h1>
                    <h2 class="text-[7px] font-medium">Satukan Langkah Bulatkan Tekad, Menuju Uniflor Bermutu</h2>
                </div>
            </div>
            <div class="flex items-center">
                <img
                    src="~/assets/images/logo-banpt.png"
                    width="60"
                    height="44"
                    alt="logo-banpt"
                />
                <img
                    class="ml-5"
                    src="~/assets/images/logo-kampus-merdeka.png"
                    width="68"
                    height="36"
                    alt="logo-kampus-merdeka"
                />
                <div class="border-grey-300 border-l-2 hidden items-center lg:flex ml-5 pl-3.5 py-0.5">
                    <IconsWorld class="mr-1.5" />
                    <span class="text-sm font-semibold mr-1.5 mt-1">ID</span>
                    <IconsArrowDown class="mr-1.5 mt-1" />
                </div>
                <IconsMenu
                    class="text-2xl cursor-pointer lg:hidden ml-5"
                    @click="toggleMenu"
                />
            </div>
        </div>
        <div
            id="header-menu"
            class="bg-primary-main justify-between text-sm text-white font-kumbh-sans font-medium hidden items-center lg:flex md:px-[50px] px-6 py-2"
        >
            <div class="flex">
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Beranda</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Tentang Kami</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Kuliah Di Uniflor</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Program Akademik</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Lembaga & UPT</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Layanan</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Informasi</NuxtLink>
                <NuxtLink
                    to="/"
                    class="mr-5"
                >Fasilitas</NuxtLink>
            </div>
            <button class="bg-secondary-main rounded-full text-base cursor-pointer px-5 py-2">Daftar Sekarang</button>
        </div>

        <div
            v-if="isOpen"
            class="bg-black bg-opacity-50 h-screen w-full absolute left-0 lg:hidden top-0 z-50"
        >
            <div class="bg-white h-full p-5 shadow-lg w-full">
                <div class="flex justify-end">
                    <IconsMenu
                        class="cursor-pointer mb-4"
                        @click="toggleMenu"
                    />
                </div>
                <ul class="space-y-4">
                    <li>
                        <NuxtLink to="/">Beranda</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Tentang Kami</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Kuliah Di Uniflor</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Program Akademik</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Lembaga & UPT</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Layanan</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Informasi</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Fasilitas</NuxtLink>
                    </li>
                </ul>
                <button class="bg-secondary-main rounded-full text-base w-full cursor-pointer mt-5 px-5 py-2">Daftar
                    Sekarang</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div
        id="footer"
        class="bg-primary-lighter w-full py-8"
    >
        <div class="grid grid-cols-5 font-lato lg:px-[50px] px-6">
            <div>
                <h6 class="text-base font-bold">Tentang Kami</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <NuxtLink to="/">Sejarah</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Visi & Misi</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Pimpinan</NuxtLink>
                </div>
            </div>
            <div>
                <h6 class="text-base font-bold">Layanan</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <NuxtLink to="/">Portal Akademik</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">E-Learning</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">E-Journal</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Portal Alumni</NuxtLink>
                </div>
            </div>
            <div>
                <h6 class="text-base font-bold">Lembaga & UPT</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <NuxtLink to="/">Badan Penjamin Mutu</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">LPPM</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Perpustakaan</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Pusat Komputer</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">EDP</NuxtLink>
                </div>
            </div>
            <div>
                <h6 class="text-base font-bold">Informasi</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <NuxtLink to="/">Berita</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Kegiatan</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Agenda</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Prestasi</NuxtLink>
                </div>
            </div>
            <div>
                <h6 class="text-base font-bold">Sosial Media</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <NuxtLink to="/">Facebook</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Instagram</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Youtube</NuxtLink>
                </div>
                <div class="text-grey-600 text-sm font-normal mt-2.5">
                    <NuxtLink to="/">Twitter</NuxtLink>
                </div>
            </div>
        </div>
        <div class="lg:px-[50px] my-6 px-6">
            <hr class="border-[#00A2DB1A]">
        </div>
        <div class="flex font-lato lg:px-[50px] px-6">
            <div class="flex border-[#00A2DB1A] border-r-1 items-start pr-7">
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
            <div class="border-[#00A2DB1A] border-r-1 px-7">
                <h6 class="text-base font-bold">Alamat</h6>
                <div class="flex text-grey-600 text-sm font-normal mt-3.5">
                    <IconsLocation /> Sam Ratulangi No.XX, Kab Ende, Flores, Nusa Tenggara Timur,
                    Indonesia
                </div>
            </div>
            <div class="pl-7">
                <h6 class="text-base font-bold">Kontak</h6>
                <div class="text-grey-600 text-sm font-normal mt-3.5">
                    <div class="flex">
                        <div class="flex mr-2">
                            <IconsTelephone /> (+62) 81338322945
                        </div>
                        <div class="flex">
                            <IconsEmail /> universitasflores@uniflor.ac.id
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white text-center text-gray-600 text-sm font-kumbh-sans py-3.5">
        © 1984 - 2025. Universitas Flores - Yayasan Perguruan Tinggi Flores.
    </div>
</template>
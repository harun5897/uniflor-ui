<template>
    <div id="header" class="mb-5">
        <div class="flex items-center">
            <NuxtLink to="/">
                <img src="~/assets/images/logo-uniflor.jpg" alt="logo-uniflor" width="80" class="mr-5">
            </NuxtLink>
            <h1 class="text-xl font-medium">My Header</h1>
            <NuxtLink to="/about" class="text-xl font-medium ml-2 hover:text-blue-400">
                | About
            </NuxtLink>
            <NuxtLink to="/contact" class="text-xl font-medium ml-2 hover:text-blue-400">
                | Contact
            </NuxtLink>
        </div>
        <hr>
    </div>
</template>
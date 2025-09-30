<!-- TODO: Link with back-end -->
<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col bg-white-0 w-full">
        <!-- Upper side of Navbar -->
        <div class="flex items-center justify-between w-full responsive-spacing">
            <div class="pt-4 flex items-center gap-2.5">
                <a
                    v-for="i in 4"
                    :key="i"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        size="20"
                        name="ic:baseline-facebook"
                        class="bg-primary-500 hover:bg-secondary-500"
                    />
                </a>
            </div>
            <div class="flex items-center justify-end">
                <div class="flex items-center justify-end gap-2">
                    <span class="text-xs text-primary-500 font-semibold ">Contact Us:</span>
                    <a
                        href="tel:+905338840941"
                        class="text-xs hover:underline"
                    >
                        +905338840941
                    </a>
                </div>
                <Divider
                    layout="vertical"
                />
                <a
                    href="mailto:euromidpress@info"
                    class="text-xs hover:underline"
                >
                    euromidpress@info
                </a>
            </div>
        </div>

        <Divider type="solid" />
        <!-- Bottom side of Navbar -->
        <div class="flex items-center justify-between responsive-spacing pb-3">
            <NuxtLink to="/">
                <NuxtImg
                    src="/images/logo.png"
                    width="155"
                    fit="contain"
                    loading="eager"
                />
            </NuxtLink>
            <div class="nav-items flex items-center justify-end gap-24  rounded-4xl bg-primary-500">
                <div class="flex items-center gap-6 px-8 py-3">
                    <NuxtLink
                        to="/"
                        class="text-white-0 text-lg hover:text-secondary-500"
                        active-class="!text-secondary-500 font-semibold underline underline-offset-4"
                    >
                        Home
                    </NuxtLink>
                    <NuxtLink
                        to="/about"
                        class="text-white-0 text-lg hover:text-secondary-500"
                        active-class="text-secondary-500 font-semibold underline underline-offset-4"
                    >
                        About Us
                    </NuxtLink>
                    <NuxtLink
                        to="/services"
                        class="text-white-0 text-lg hover:text-secondary-500"
                        active-class="text-secondary-500 font-semibold underline underline-offset-4"
                    >
                        Services
                    </NuxtLink>
                    <NuxtLink
                        to="/contact"
                        class="text-white-0 text-lg hover:text-secondary-500"
                        active-class="text-secondary-500 font-semibold underline underline-offset-4"
                    >
                        Contact
                    </NuxtLink>
                </div>
                <div class="searchbar flex items-center bg-white-0 rounded-4xl px-2 py-2 mr-2">
                    <Icon
                        size="20"
                        name="mingcute:search-line"
                        class="bg-primary-500 mr-2"
                    />
                    <input type="text" placeholder="Search..." class=" outline-none text-md px-2">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.p-divider.p-divider-vertical:before {
    border: 1px solid var(--color-secondary-500) ;
}</style>

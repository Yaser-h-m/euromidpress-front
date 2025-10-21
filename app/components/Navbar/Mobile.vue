<!-- !TODO: Link with back-end -->

<script setup lang="ts">
const isOpen = ref(false)
const {  isMobileOrTablet } = useDeviceType()

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div v-if="isMobileOrTablet" v-show="!isOpen" class="px-3.5 py-2 bg-primary-500 !flex w-full items-center justify-between mobile-tablet-only sticky">
        <NuxtLink to="/">
            <img
                src="/img/logo-white.png"
                alt="Euromidpress Logo"
                width="130"
                height="52"
            >
        </NuxtLink>
        <div class="flex items-center justify-end gap-4 w-fit">
            <Icon
                size="20"
                name="mingcute:search-line"
                class="text-secondary-500 hover:cursor-pointer"
            />

            <Icon
                v-show="!isOpen"
                size="22"
                name="solar:hamburger-menu-linear"
                class="text-white-0 hover:cursor-pointer"
                @click="toggleMenu"
            />
        </div>
    </div>
    <div v-show="isOpen" class="absolute inset-0 z-50 w-screen h-screen bg-white-0 overflow-hidden">
        <div class="flex items-center justify-between w-full px-3.5 pt-4 pb-0 bg-white-0">
            <NuxtLink to="/" @click="toggleMenu">
                <img
                    src="/img/logo.png"
                    alt="Euromidpress Logo"
                    width="130"
                    height="52"
                >
            </NuxtLink>
            <Icon
                size="25"
                name="material-symbols:close-rounded"
                class="text-white-600 hover:cursor-pointer"
                @click="toggleMenu"
            />
        </div>
        <Divider />
        <div class="px-8 flex flex-col gap-3">
            <NuxtLink
                to="/"
                class="py-3 text-lg text-white-600"
                active-class="text-primary-500"
                @click="toggleMenu"
            >
                Home
            </NuxtLink>
            <NuxtLink
                to="/about"
                class="py-3 text-lg text-white-600"
                active-class="text-primary-500"
                @click="toggleMenu"
            >
                About
            </NuxtLink>

            <Accordion>
                <AccordionPanel value="0" :pt="{ root: { class: '!border-transparent' } }">
                    <AccordionHeader :pt="{ root: { class: '!font-normal !px-0 !border-0 !text-lg !text-white-600' } }">
                        Products & Services
                    </AccordionHeader>
                    <AccordionContent :pt="{ content: { class: '!pb-0' } }">
                        <div class="flex flex-col gap-2">
                            <NuxtLink
                                to="/proceedings"
                                class="py-2 px-2 text-lg text-white-600"
                                active-class="text-primary-500"
                                @click="toggleMenu"
                            >
                                Proceedings
                            </NuxtLink>
                            <NuxtLink
                                to="/books"
                                class="py-2 px-2 text-lg text-white-600"
                                active-class="text-primary-500"
                                @click="toggleMenu"
                            >
                                Books
                            </NuxtLink>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            <NuxtLink
                to="/"
                class="py-3 text-lg text-white-600"
                active-class="text-primary-500"
                @click="toggleMenu"
            >
                Policies & Guidelines
            </NuxtLink>
            <NuxtLink
                to="/about"
                class="py-3 text-lg text-white-600"
                active-class="text-primary-500"
                @click="toggleMenu"
            >
                Contact
            </NuxtLink>
            <Divider />
            <p class="text-white-600">Follow Us:</p>
            <div class="flex items-center justify-start gap-2">
                <div class="flex items-center gap-2.5">
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
                            class="bg-secondary-500"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

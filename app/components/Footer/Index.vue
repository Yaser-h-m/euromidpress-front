// !TODO: Link this with back-end
<script lang="ts" setup>
const { isMobileOrTablet } = useDeviceType()
</script>
<template>
    <div class="bg-primary-500  border-b-4 border-secondary-500">
        <FooterSubscribe class="px-[100px]" />
        <Divider :pt="{root:'!py-10'}" />
        <div
            class="flex items-start justify-between flex-wrap px-[100px] mb-9"
        >
            <div>
                <p class="text-2xl font-semibold text-white-0 mb-4">EuroMid Press</p>
                <p class="text-xs text-white-0 max-w-[400px] mb-8">EuroMid Press - part of the EuroMid Academy of Business & Technology - is a professional open access publisher of scientific, technical, and academic proceedings, journals, and books. We are committed to advancing global research by providing high-quality publishing services, efficient editorial processes, and personalized support for authors and institutions</p>
                <div class="text-sm flex items-center justify-start gap-6">
                    <p class="text-white-0 mb-3">Follow Us:</p>
                    <div class="flex items-center justify-start gap-4">
                        <a v-for="i in 5" :key="i" href="#">
                            <Icon
                                size="20"
                                name="ic:baseline-phone"
                                class="bg-secondary-500 hover:bg-white-0"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Desktop Version -->
            <template v-if="!isMobileOrTablet">
                <div>
                    <p class="text-xl font-semibold text-white-0 mb-4">Quick Links</p>
                    <div class="flex flex-col gap-2">
                        <NuxtLink
                            v-for="i in 5"
                            :key="i"
                            to="/"
                            class="text-sm text-white-0 hover:text-yellow-500"
                        >
                            Link example
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <p class="text-xl font-semibold text-white-0 mb-4">Our Categories</p>
                    <div class="flex flex-col gap-2">
                        <NuxtLink
                            v-for="i in 5"
                            :key="i"
                            to="/"
                            class="text-sm text-white-0 hover:text-yellow-500"
                        >
                            Link example
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <p class="text-sm font-semibold text-white-0 mb-4 max-w-[250px]">For inquiries or submissions, please contact us at...</p>
                    <div class="flex flex-col gap-2">
                        <a
                            v-for="i in 3"
                            :key="i"
                            href="/"
                            class="text-sm text-white-0 hover:text-yellow-500 flex items-center justify-start gap-2"
                        >
                            <Icon
                                size="16"
                                name="ic:baseline-phone"
                                class="bg-secondary-500"
                            />
                            <span class="max-w-[220px]">Example of contact info</span>
                        </a>
                    </div>
                </div>
            </template>

            <!-- Mobile/Tablet Version -->
            <template v-else>
                <div class="w-full">
                    <Accordion>
                        <AccordionPanel value="0" :pt="{ root: { class: '!border-transparent !bg-primary-500 !text-white-0' } }">
                            <AccordionHeader :pt="{ root: ({ state }: any) => ({ class: ['!font-semibold !px-0 !border-0 !bg-transparent !text-md', state.active ? '!text-secondary-500' : '!text-white-0'] }), toggleicon: ({ state }: any) => ({ class: state.active ? '!text-secondary-500' : '!text-white-0' }) }">
                                Quick Links
                            </AccordionHeader>
                            <AccordionContent :pt="{ content: { class: '!pl-4 !bg-transparent' } }">
                                <div class="flex flex-col gap-2">
                                    <NuxtLink
                                        v-for="i in 5"
                                        :key="i"
                                        to="/"
                                        class="text-sm text-white-0 hover:text-yellow-500"
                                    >
                                        Link example
                                    </NuxtLink>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel value="1" :pt="{ root: { class: '!border-transparent !bg-primary-500 !text-white-0' } }">
                            <AccordionHeader :pt="{ root: ({ state }: any) => ({ class: ['!font-semibold !px-0 !border-0 !bg-transparent !text-md', state.active ? '!text-secondary-500' : '!text-white-0'] }), toggleicon: ({ state }: any) => ({ class: state.active ? '!text-secondary-500' : '!text-white-0' }) }">
                                Our Categories
                            </AccordionHeader>
                            <AccordionContent :pt="{ content: { class: '!pl-4 !bg-transparent' } }">
                                <div class="flex flex-col gap-2">
                                    <NuxtLink
                                        v-for="i in 5"
                                        :key="i"
                                        to="/"
                                        class="text-sm text-white-0 hover:text-yellow-500"
                                    >
                                        Link example
                                    </NuxtLink>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    <div class="mt-6">
                        <p class="text-sm font-semibold text-white-0 mb-4 max-w-[250px]">For inquiries or submissions, please contact us at</p>
                        <div class="flex flex-col gap-2">
                            <a
                                v-for="i in 3"
                                :key="i"
                                href="/"
                                class="text-sm text-white-0 hover:text-yellow-500 flex items-center justify-start gap-2"
                            >
                                <Icon
                                    size="16"
                                    name="ic:baseline-phone"
                                    class="bg-secondary-500"
                                />
                                <span class="max-w-[220px]">Example of contact info</span>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <FooterCopyright class="px-[100px]" />
    </div>
</template>

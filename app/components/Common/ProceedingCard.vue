<script setup lang="ts">
const props = defineProps<{
    category: string
    title: string
    issnOnline?: string
    issnPrint?: string
    link: string
    imageSrc: string
    imageAlt: string
    customClass?: string
}>()
</script>
<template>
    <div :class="['p-6 bg-[#f9f9f9] rounded-2xl shadow-[4px_4px_4px_0px_#00000005] w-[350px]', props.customClass]">
        <div class="flex items-center justify-start gap-4 mb-4">
            <img
                :src="props.imageSrc"
                :alt="props.imageAlt"
                width="115"
                height="160"
            >

            <div class="flex flex-col gap-3">
                <p class="text-md font-semibold text-primary-500">{{ props.category }}</p>
                <div class="flex flex-col justify-center items-center gap-1">
                    <p class="font-semibold text-white-600 text-sm">ISSN (Online)</p>
                    <p class="font-semibold text-primary-500 text-sm">{{ props.issnOnline }}</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-1">
                    <p class="font-semibold text-white-600 text-sm">ISSN (Print)</p>
                    <p class="font-semibold text-primary-500 text-sm">{{ props.issnPrint }}</p>
                </div>
            </div>
        </div>
        <p class="text-lg font-semibold text-primary-500 mb-4">{{ props.title }}</p>
        <NuxtLink
            :to="props.link"
            class="flex items-center justify-start gap-0.5 text-sm text-secondary-500  font-semibold hover:text-primary-500"
        >
            <p>More Details</p>
            <Icon name="material-symbols:arrow-forward-ios" class="ml-2 text-secondary-500  hover:text-primary-500" />
        </NuxtLink>
    </div>
</template>

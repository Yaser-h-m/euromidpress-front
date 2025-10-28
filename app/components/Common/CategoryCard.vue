<script lang="ts" setup>
defineProps<{
    title: string,
    link: string,
    proceedingsTitle: string,
    proceedingsLink: string,
    booksTitle: string,
    booksLink: string,
    fluid?: boolean
}>()
</script>
<template>
    <div>
        <div class="mb-4" :class="fluid?'w-full' : 'w-fit'">
            <a
                :href="link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between gap-4"
            >
                <h3 class="font-semibold text-primary-500 hover:text-secondary-500">{{ title }}</h3>
                <Icon
                    name="fluent:open-32-filled"
                    size="15"
                    class="text-white-600"
                />
            </a>
        </div>
        <div class="flex items-start justify-start gap-2 mb-2">
            <p class="text-sm font-semibold text-white-600 whitespace-nowrap">Proceedings: </p>
            <NuxtLink :to="proceedingsLink" class="text-sm text-white-600 underline hover:text-primary-500 break-words">
                {{ proceedingsTitle }}
            </NuxtLink>
        </div>
        <div class="flex items-start justify-start gap-2">
            <p class="text-sm font-semibold text-white-600 whitespace-nowrap">Books: </p>
            <NuxtLink :to="booksLink" class="text-sm text-white-600 underline hover:text-primary-500 break-words">
                {{ booksTitle }}
            </NuxtLink>
        </div>
    </div>
</template>

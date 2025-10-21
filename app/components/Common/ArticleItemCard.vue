<script setup lang="ts">
import type { Article } from '~/types/Article'

defineProps<{
    article: Article
}>()
</script>


<template>
    <NuxtLink class="flex flex-col gap-4 bg-card pt-8 pr-6 pb-4 pl-6 rounded-lg hover:bg-card/40 cursor-pointer" :to="`/articles/${article.slug}`">
        <h2 class="text-primary-500 text-lg font-bold">{{ article.title }}</h2>
        <p class="text-sm text-white-600 line-clamp-2">{{ article.abstract }}</p>
        <div class="!font-bold text-xs !text-primary-500">
            {{ dateFormat(article.published_at) }}
        </div>
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <img
                    :src="article.contributors?.[0]?.image"
                    width="30"
                    height="30"
                    class="rounded-full"
                >
                <p class="text-xs">
                    {{ article.contributors?.[0]?.name }}
                </p>
            </div>
            <CommonButton
                is-text-only
                label="Read full article"
                variant="secondary-btn"
                custom-class="!text-secondary-500 hover:!text-primary-500"
            />
        </div>
    </NuxtLink>
</template>

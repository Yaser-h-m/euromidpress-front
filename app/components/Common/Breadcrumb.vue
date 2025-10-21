<script setup lang="ts">
import type { BreadcrumbItem } from '~/types/BreadcrumbItem'

defineProps<{
    breadcrumbItems: BreadcrumbItem[]
}>()
</script>
<template>
    <div class="flex items-center gap-2 w-max justify-center">
        <template v-for="(item, index) in breadcrumbItems" :key="item.label">
            <div v-if="index !== breadcrumbItems.length - 1" class="flex items-center gap-2">
                <NuxtLink :to="item.link ?? ''" class="text-primary-500 hover:text-secondary-500">
                    <p class="text-md">{{ item.label }}</p>
                </NuxtLink>
                <Icon name="line-md:arrow-right" />
            </div>
            <span v-else class="flex items-center gap-2">
                <p class="text-md text-secondary-500">{{ item.label }}</p>
                <Icon v-if="index !== breadcrumbItems.length - 1" name="line-md:arrow-right" />
            </span>
        </template>
    </div>
</template>

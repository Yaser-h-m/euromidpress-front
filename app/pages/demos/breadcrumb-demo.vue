<script setup lang="ts">
import type { BreadcrumbItem } from '~/types/BreadcrumbItem'

const breadcrumbs: BreadcrumbItem[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Articles',
        link: '/articles'
    },
    {
        label: 'Article 1'
    }
]
</script>
<template>
    <div class="flex flex-col gap-2 p-8">
        <CommonBreadcrumb :breadcrumb-items="breadcrumbs" />
    </div>
</template>

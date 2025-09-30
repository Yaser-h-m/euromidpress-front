<script setup lang="ts">
import type { LinkVariants } from '~/types/LinkVariants'


const props = defineProps<{
    linkAddress?: string
    variant?: LinkVariants
}>()

</script>
<template>
    <NuxtLink :to="props.linkAddress" :class="props.variant" />
</template>

<style>
.primary-link{
color: var(--color-primary-600);
}
.secondary-link{

}
</style>

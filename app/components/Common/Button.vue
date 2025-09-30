<script setup lang="ts">
import type { ButtonVariants } from '~/types/ButtonVariants'

const props = defineProps<{
    label?: string
    variant?: ButtonVariants
    icon?: string
    iconClass?: string
    customClass?: string
}>()

</script>
<template>
    <button :class="['text-sm px-4 py-2', props.customClass]">
        <span>
            {{ label }}
        </span>
        <Icon v-if="props.icon" :name="props.icon" :class="props.iconClass" />
    </button>
</template>
<style>
.primary-btn{
    background-color: var(--color-primary-600);
    color: var(--color-white-0) ;
}
</style>
//!TODO: Work on progress

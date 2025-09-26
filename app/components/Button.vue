<script setup lang="ts">
import type { ButtonVariants } from '~/types/ButtonVariants';

defineProps({
    label: {
        type: String,

    },
    variant: {
        type: String as PropType<ButtonVariants>
    }
})
</script>
<template>
    <button class="">{{label}}</button>
</template>
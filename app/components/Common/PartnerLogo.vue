<script setup lang="ts">
const props = defineProps<{
    logoSrc: string
    logoAlt: string

}>()
</script>
<template>
    <div class="md:p-8 p-6 rounded-lg bg-[#f9f9f9] shadow-[4px_4px_4px_0px_#00000005] w-fit ">
        <img
            :src="props.logoSrc"
            :alt="props.logoAlt"
            class="object-contain md:max-w-[150px] max-w-[118px]"
        >
    </div>
</template>

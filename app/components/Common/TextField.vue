<script setup lang="ts">
const model = defineModel<string>('model')
defineProps<{
    id: string
    label: string
}>()
</script>
<template>
    <FloatLabel variant="on">
        <InputText
            :id="id"
            v-model="model"
            :name="id"
            class="w-full h-[36px] border !bg-white-100 !border-white-300 ring-0 !focus-visible:ring-0 rounded-lg !focus-visible:ring-primary-500 !text-black"
        />
        <label :for="id" class="!text-primary-500 !bg-white-100">{{ label }}</label>
    </FloatLabel>
</template>

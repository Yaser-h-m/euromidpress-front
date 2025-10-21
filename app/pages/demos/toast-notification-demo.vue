<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
</script>

<template>
    <div class="flex flex-col gap-6 p-8 h-screen">
        <h1 class="text-2xl font-bold text-primary-500">Toast Notification Demo</h1>

        <div class="flex flex-wrap gap-4">
            <CommonButton
                label="Success"
                variant="secondary-btn"
                @click="toast.success('Operation completed successfully!')"
            />
            <CommonButton
                label="Error"
                variant="primary-btn"
                @click="toast.error('Something went wrong!')"
            />
            <CommonButton
                label="Warning"
                variant="secondary-btn"
                @click="toast.warning('Warning message!')"
            />
            <CommonButton
                label="Info"
                variant="primary-btn"
                @click="toast.info('Information message!')"
            />
        </div>
    </div>
</template>

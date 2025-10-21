<!-- Global Error Page for Nuxt 4 -->
<script setup lang="ts">
import Default from './layouts/default.vue'

interface Props {
    error: {
        statusCode: number
        statusMessage?: string
        message?: string
    }
}

const props = defineProps<Props>()

const is404 = computed(() => props.error.statusCode === 404)
const is500 = computed(() => props.error.statusCode === 500)

const errorTitle = computed(() => {
    if (is404.value) return 'Page Not Found'
    if (is500.value) return 'Server Error'
    return 'An Error Occurred'
})

const errorDescription = computed(() => {
    if (is404.value) return 'The page you tried to access isn’t available. It might have been updated or removed.'
    if (is500.value) return 'Something went wrong on our end. We\'re working to fix it as quickly as possible.'
    return props.error.message || 'An unexpected error occurred'
})

watch(props.error, (errNewVal) => {
    console.error(errNewVal)
})
</script>

<template>
    <Default>
        <div class="md:min-h-[85vh] min-h-[75vh] h-full flex items-center justify-center">
            <div class="text-center w-full bg-white max-w-full m-12 flex flex-col justify-center items-center p-2.5 rounded-2xl md:h-[85vh] h-[65vh]">
                <div class="max-w-lg ">
                    <!-- Error Code -->
                    <img :src="`img/error/${error.statusCode}.svg`" alt="Error" class="w-full mx-auto mb-8">
                    <div class="mb-8">
                        <h1
                            class="text-3xl md:text-8xl font-bold text-primary-500"
                        >
                            {{ errorTitle }}
                        </h1>
                    </div>

                    <!-- Error Title -->
                    <div class="mb-6">
                        <p class="text-md md:text-lg text-white-600 leading-relaxed">
                            {{ errorDescription }}
                        </p>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <NuxtLink to="/" class="flex items-center gap-2 text-secondary-500 hover:text-primary-500">
                            <span class="text-sm">Back To Home</span>
                            <Icon name="line-md:chevron-right" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </Default>
</template>

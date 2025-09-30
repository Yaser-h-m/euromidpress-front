<!-- Global Error Page for Nuxt 4 -->
<script setup lang="ts">
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
    if (is404.value) return 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
    if (is500.value) return 'Something went wrong on our end. We\'re working to fix it as quickly as possible.'
    return props.error.message || 'An unexpected error occurred'
})

const goHome = () => {
    navigateTo('/')
}

const goBack = () => {
    history.back()
}
</script>

<template>
    <div class="min-h-screen bg-white-0 flex items-center justify-center px-4">
        <div class="max-w-md w-full text-center">
            <!-- Error Code -->
            <div class="mb-8">
                <h1
                    class="text-8xl font-bold text-primary-500"
                >
                    {{ error.statusCode }}
                </h1>
            </div>

            <!-- Error Title -->
            <div class="mb-6">
                <h2 class="text-2xl font-semibold text-primary-500 mb-4">
                    {{ errorTitle }}
                </h2>
                <p class="text-md text-white-400 leading-relaxed">
                    {{ errorDescription }}
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    class="px-6 py-3 bg-primary-500 hover:bg-primary-600
                 text-white-0 rounded-lg transition-colors duration-200
                 font-medium text-sm hover:cursor-pointer"
                    @click="goHome"
                >
                    Go Home
                </button>
                <button
                    class="px-6 py-3 border-2 border-secondary-500 text-secondary-500
                 hover:bg-secondary-500 hover:text-white-0 rounded-lg
                 transition-colors duration-200 font-medium text-sm hover:cursor-pointer"
                    @click="goBack"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
</template>

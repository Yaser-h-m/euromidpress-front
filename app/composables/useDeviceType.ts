export const useDeviceType = () => {
    const isDesktop = ref(true)
    const isMobileOrTablet = ref(false)

    const checkDevice = () => {
        if (import.meta.client) {
            const width = window.innerWidth
            isDesktop.value = width > 1000
            isMobileOrTablet.value = width <= 1000
        }
    }

    onMounted(() => {
        checkDevice()
        window.addEventListener('resize', checkDevice)
    })

    onUnmounted(() => {
        if (import.meta.client) {
            window.removeEventListener('resize', checkDevice)
        }
    })

    return {
        isDesktop,
        isMobileOrTablet
    }
}

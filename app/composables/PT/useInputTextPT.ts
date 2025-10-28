export const useInputTextPT = () => {
    const PT = computed(() => ({
        root() {
            return {
                class: [
                    '!h-[36px]',
                    'focus:!border-primary-500'
                ]
            }
        }
    }))
    return { PT }
}

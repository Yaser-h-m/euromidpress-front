import type { InputTextPassThroughMethodOptions } from 'primevue/inputtext'

export const useInputTextPT = () => {
    const PT = computed(() => ({
        root({ context }: InputTextPassThroughMethodOptions) {
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

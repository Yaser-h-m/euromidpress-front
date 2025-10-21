<script setup lang="ts">
import { useValidateEmail } from '~/composables/useEmailValidation'
import { useInputTextPT } from '~/composables/PT/useInputTextPT'

const email = ref('')
const errorMessage = ref('')

const handleSubscribe = () => {
    errorMessage.value = useValidateEmail(email.value)

    if (!errorMessage.value) {
        // !TODO: Link this with back-end
        // eslint-disable-next-line no-console
        console.log('Subscribed with email:', email.value)
        // Reset form after successful submission
        // email.value = ''
    }
}

const { PT } = useInputTextPT()
</script>
<template>
    <div class="flex flex-wrap items-center justify-center md:justify-between gap-2 pt-10  bg-primary-500">
        <p class="text-white-0 font-semibold max-w-[440px] text-wrap text-center md:text-start text-lg md:text-xl">
            Get the latest EuroMid Press articles, books, and conference updates
        </p>
        <div class="flex flex-col items-start gap-2">
            <div class="flex items-center justify-end gap-2 flex-wrap w-full md:w-fit">
                <div class="flex flex-col gap-1 w-full md:w-fit">
                    <InputText
                        v-model="email"
                        :pt="PT"
                        type="email"
                        placeholder="Enter your email address"
                        class="w-full md:w-[375px]"
                        @focusout="handleSubscribe"
                    />
                </div>
                <CommonButton
                    variant="secondary-btn"
                    label="Subscribe"
                    class="w-full md:w-fit text-center"
                    @click="handleSubscribe"
                />
            </div>
            <Message
                v-if="errorMessage"
                severity="error"
                size="small"
                variant="simple"
            >
                {{ errorMessage }}
            </Message>
        </div>
    </div>
</template>

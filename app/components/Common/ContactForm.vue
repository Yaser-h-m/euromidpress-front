<script setup lang="ts">
import TextField from './TextField.vue'


const form = reactive({
    name: '',
    email: '',
    message: ''
})
const isLoading = ref(false)
const handleSubmit = async () => {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    isLoading.value = false
}
</script>
<template>
    <div>
        <p class="font-semibold text-xl md:text-2xl text-primary-500 text-center">
            Have a question? Send us a message using the form below
        </p>
        <form class="mt-8 flex flex-col gap-4" @submit.prevent="handleSubmit">
            <TextField id="name" v-model="form.name" label="Name" />
            <TextField id="email" v-model="form.email" label="Email" />
            <FloatLabel variant="on">
                <Textarea
                    id="message"
                    v-model="form.message"
                    class="w-full border !border-white-300 ring-0 !focus-visible:ring-0 rounded-lg !focus-visible:ring-primary-500 !bg-white-100 focus:!border-white-300 !text-primary-500"
                    rows="5"
                    cols="30"
                    style="resize: none"
                />
                <label for="message" class="!text-primary-500 !bg-white-100">Your Message</label>
            </FloatLabel>
            <CommonButton :is-loading="isLoading" label="Submit" variant="secondary-btn" />
        </form>
    </div>
</template>

<style scoped>
input:focus {
    outline: none;
}
input {
  padding: 12px;
}
</style>

<script setup lang="ts">

const contactInfo = [
    {
        icon: 'material-symbols:phone-in-talk',
        title: 'Call Us',
        description: '+03232344324',
        link: 'tel:+03232344324'
    },
    {
        icon: 'material-symbols:mail',
        title: 'Email',
        description: 'contact@euromidpress.com',
        link: 'mailto:contact@euromidpress.com'
    },
    {
        icon: 'material-symbols:location-on',
        title: 'Address',
        description: 'Şişli, Istanbul, Türkiye',
        link: 'mailto:contact@euromidpress.com'
    }
]

const socialMedia = [
    {
        icon: 'ph:instagram-logo-fill',
        link: ''
    },
    {
        icon: 'mingcute:social-x-line',
        link: ''
    },
    {
        icon: 'ic:baseline-facebook',
        link: ''
    },
    {
        icon: 'mdi:linkedin',
        link: ''
    },
    {
        icon: 'entypo-social:youtube-with-circle',
        link: ''
    }
]
</script>
<template>
    <div class="flex flex-col md:flex-row container md:mx-auto gap-4 px-4 md:px-0 mb-4">
        <div class="w-full md:w-1/2">
            <h1 class="text-4xl font-bold text-primary-500 mb-4">
                Contact EuroMid Press
            </h1>
            <p class="text-lg mb-4">
                For more information about our company or any questions regarding our publications and services, please contact us via email at <a href="mailto:contact@euromidpress.com" class="text-primary-500"> contact@euromidpress.com</a>. We aim to respond to all inquiries within two working days.
                You can also reach us at our physical office address below:
            </p>
            <hr class="border-primary-500/20 mb-4">
            <div class="flex flex-wrap gap-4 mb-4">
                <a
                    v-for="info in contactInfo"
                    :key="info.title"
                    :href="info.link"
                    class="flex items-center gap-3"
                >
                    <Icon :name="info.icon" class="text-secondary-500" size="32" />
                    <div>
                        <p class="text-xl text-primary-500 font-semibold">
                            {{ info.title }}
                        </p>
                        <p>
                            {{ info.description }}
                        </p>
                    </div>
                </a>
            </div>
            <div>
                <p>
                    Follow Us On:
                </p>
                <div class="flex items-center gap-3">
                    <a
                        v-for="social in socialMedia"
                        :key="social.icon"
                        :href="social.link"
                        class="flex items-center gap-3"
                    >
                        <Icon :name="social.icon" class="text-secondary-500" size="24" />
                    </a>
                </div>
            </div>
        </div>
        <CommonContactForm />
    </div>
</template>

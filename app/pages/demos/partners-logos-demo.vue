<script setup lang="ts">
const logos = [
    { src: '/img/partners-logos/clarivate.png', alt: 'Clarivate' },
    { src: '/img/partners-logos/crossref.png', alt: 'Crossref' },
    { src: '/img/partners-logos/doaj.png', alt: 'DOAJ' },
    { src: '/img/partners-logos/scopus.png', alt: 'Scopus' },
    { src: '/img/partners-logos/society-for-scholarly.png', alt: 'Society for Scholarly' }
]
</script>

<template>
    <div class="flex flex-wrap gap-6 p-8 justify-center items-center">
        <CommonPartnerLogo
            v-for="logo in logos"
            :key="logo.src"
            :logo-src="logo.src"
            :logo-alt="logo.alt"
        />
    </div>
</template>

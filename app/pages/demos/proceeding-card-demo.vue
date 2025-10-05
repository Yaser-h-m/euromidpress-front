<script setup lang="ts">
const proceedings = [
    {
        category: 'Science',
        title: 'International Journal of Modern Science',
        issnOnline: '1234-5678',
        issnPrint: '8765-4321',
        link: 'https://example.com/science',
        imageSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=115&h=160',
        imageAlt: 'Science Journal Cover'
    },
    {
        category: 'Technology',
        title: 'Tech Innovations Review',
        issnOnline: '2345-6789',
        issnPrint: '9876-5432',
        link: 'https://example.com/tech',
        imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=115&h=160',
        imageAlt: 'Technology Journal Cover'
    },
    {
        category: 'Medicine',
        title: 'Medical Advances Journal',
        issnOnline: '3456-7890',
        issnPrint: '0987-6543',
        link: 'https://example.com/medicine',
        imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=115&h=160',
        imageAlt: 'Medicine Journal Cover'
    },
    {
        category: 'Engineering',
        title: 'Engineering Today',
        issnOnline: '4567-8901',
        issnPrint: '1098-7654',
        link: 'https://example.com/engineering',
        imageSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=115&h=160',
        imageAlt: 'Engineering Journal Cover'
    }
]
</script>

<template>
    <div class="flex flex-wrap gap-8 p-8 justify-center items-stretch">
        <CommonProceedingCard
            v-for="item in proceedings"
            :key="item.title"
            :category="item.category"
            :title="item.title"
            :issn-online="item.issnOnline"
            :issn-print="item.issnPrint"
            :link="item.link"
            :image-src="item.imageSrc"
            :image-alt="item.imageAlt"
            custom-class="mb-2"
        />
    </div>
</template>

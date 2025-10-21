<script setup lang="ts">
import type { Article } from '~/types/Article'

const articles: Article[] = [
    {
        id: 1,
        title: 'Atlantis Press Acquired by Springer Nature',
        abstract: 'It was announced earlier today that Atlantis Press has been acquired by Springer Nature It was announced earlier today that Atlantis Press has been acquired by Springer Nature...',
        type: 'book' as const,
        is_published: true,
        is_open_access: true,
        created_at: new Date('2025-01-01'),
        updated_at: new Date('2025-01-01'),
        deleted_at: new Date('2025-01-01'),
        slug: 'atlantis-press-acquired-by-springer-nature',
        volume_id: 1,
        published_at: new Date('2025-01-01'),
        contributors: [
            {
                id: 1,
                name: 'John Doe',
                image: 'https://avatar.iran.liara.run/username?username=ce'
            }
        ]
    },
    {
        id: 2,
        title: 'The Future of Academic Publishing in the Digital Age',
        abstract: 'Exploring how digital transformation is reshaping academic publishing, from open access initiatives to AI-powered peer review systems and the impact on scholarly communication.',
        type: 'journal' as const,
        is_published: true,
        is_open_access: false,
        created_at: new Date('2025-01-15'),
        updated_at: new Date('2025-01-15'),
        deleted_at: undefined,
        slug: 'future-academic-publishing-digital-age',
        volume_id: 2,
        published_at: new Date('2025-01-15'),
        contributors: [
            {
                id: 2,
                name: 'Dr. Sarah Johnson',
                image: 'https://avatar.iran.liara.run/username?username=sj'
            },
            {
                id: 3,
                name: 'Prof. Michael Chen',
                image: 'https://avatar.iran.liara.run/username?username=mc'
            }
        ]
    },
    {
        id: 3,
        title: 'Machine Learning Applications in Scientific Research',
        abstract: 'A comprehensive review of machine learning techniques applied to various scientific disciplines, including case studies from physics, biology, and chemistry research.',
        type: 'proceeding' as const,
        is_published: true,
        is_open_access: true,
        created_at: new Date('2025-01-20'),
        updated_at: new Date('2025-01-20'),
        deleted_at: undefined,
        slug: 'machine-learning-applications-scientific-research',
        volume_id: 3,
        published_at: new Date('2025-01-20'),
        contributors: [
            {
                id: 4,
                name: 'Dr. Elena Rodriguez',
                image: 'https://avatar.iran.liara.run/username?username=er'
            }
        ]
    },
    {
        id: 4,
        title: 'Climate Change and Its Impact on Global Ecosystems',
        abstract: 'An interdisciplinary study examining the effects of climate change on biodiversity, ecosystem services, and conservation strategies across different biomes worldwide.',
        type: 'book' as const,
        is_published: false,
        is_open_access: true,
        created_at: new Date('2025-01-25'),
        updated_at: new Date('2025-01-25'),
        deleted_at: undefined,
        slug: 'climate-change-impact-global-ecosystems',
        volume_id: 4,
        published_at: new Date('2025-01-25'),
        contributors: [
            {
                id: 5,
                name: 'Dr. James Wilson',
                image: 'https://avatar.iran.liara.run/username?username=jw'
            },
            {
                id: 6,
                name: 'Dr. Maria Garcia',
                image: 'https://avatar.iran.liara.run/username?username=mg'
            },
            {
                id: 7,
                name: 'Prof. David Kim',
                image: 'https://avatar.iran.liara.run/username?username=dk'
            }
        ]
    },
    {
        id: 5,
        title: 'Quantum Computing: Breaking New Ground in Cryptography',
        abstract: 'Recent advances in quantum computing and their implications for cryptographic systems, including post-quantum cryptography solutions and security considerations.',
        type: 'journal' as const,
        is_published: true,
        is_open_access: false,
        created_at: new Date('2025-01-30'),
        updated_at: new Date('2025-01-30'),
        deleted_at: undefined,
        slug: 'quantum-computing-cryptography-advances',
        volume_id: 5,
        published_at: new Date('2025-01-30'),
        contributors: [
            {
                id: 8,
                name: 'Dr. Alex Thompson',
                image: 'https://avatar.iran.liara.run/username?username=at'
            }
        ]
    },
    {
        id: 6,
        title: 'Sustainable Development Goals: Progress and Challenges',
        abstract: 'A comprehensive analysis of the United Nations Sustainable Development Goals, examining progress made, remaining challenges, and innovative approaches to achieving global sustainability targets.',
        type: 'proceeding' as const,
        is_published: true,
        is_open_access: true,
        created_at: new Date('2025-02-05'),
        updated_at: new Date('2025-02-05'),
        deleted_at: undefined,
        slug: 'sustainable-development-goals-progress-challenges',
        volume_id: 6,
        published_at: new Date('2025-02-05'),
        contributors: [
            {
                id: 9,
                name: 'Dr. Lisa Anderson',
                image: 'https://avatar.iran.liara.run/username?username=la'
            },
            {
                id: 10,
                name: 'Prof. Robert Taylor',
                image: 'https://avatar.iran.liara.run/username?username=rt'
            }
        ]
    }
]
</script>
<template>
    <div class="grid grid-cols-3 gap-4 p-8">
        <CommonArticleItemCard v-for="item in articles" :key="item.id" :article="item" />
    </div>
</template>

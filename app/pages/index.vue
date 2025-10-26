<!-- TODO:Link with back-end -->
<script setup lang="ts">
const logos = [
    { src: '/img/partners-logos/clarivate.png', alt: 'Clarivate' },
    { src: '/img/partners-logos/crossref.png', alt: 'Crossref' },
    { src: '/img/partners-logos/doaj.png', alt: 'DOAJ' },
    { src: '/img/partners-logos/scopus.png', alt: 'Scopus' },
    { src: '/img/partners-logos/society-for-scholarly.png', alt: 'Society for Scholarly' }
]
const proceedings = ref([
    {
        category: 'Computer Science',
        title: 'International Conference on Artificial Intelligence',
        issnOnline: '2789-1234',
        issnPrint: '2789-5678',
        link: '/proceedings/ai-conference',
        imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'AI Conference Cover'
    },
    {
        category: 'Engineering',
        title: 'Advances in Mechanical Engineering Research',
        issnOnline: '2789-2345',
        issnPrint: '2789-6789',
        link: '/proceedings/mechanical-engineering',
        imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Engineering Conference Cover'
    },
    {
        category: 'Medical Sciences',
        title: 'Global Health and Medicine Conference',
        issnOnline: '2789-3456',
        issnPrint: '2789-7890',
        link: '/proceedings/health-medicine',
        imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Health Conference Cover'
    },
    {
        category: 'Business',
        title: 'International Business Innovation Summit',
        issnOnline: '2789-4567',
        issnPrint: '2789-8901',
        link: '/proceedings/business-innovation',
        imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Business Summit Cover'
    },
    {
        category: 'Business',
        title: 'International Business Innovation Summit',
        issnOnline: '2789-4567',
        issnPrint: '2789-8901',
        link: '/proceedings/business-innovation',
        imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Business Summit Cover'
    },
    {
        category: 'Business',
        title: 'International Business Innovation Summit',
        issnOnline: '2789-4567',
        issnPrint: '2789-8901',
        link: '/proceedings/business-innovation',
        imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Business Summit Cover'
    },
    {
        category: 'Business',
        title: 'International Business Innovation Summit',
        issnOnline: '2789-4567',
        issnPrint: '2789-8901',
        link: '/proceedings/business-innovation',
        imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Business Summit Cover'
    },
    {
        category: 'Business',
        title: 'International Business Innovation Summit',
        issnOnline: '2789-4567',
        issnPrint: '2789-8901',
        link: '/proceedings/business-innovation',
        imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Business Summit Cover'
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '1200px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '899px',
        numVisible: 1,
        numScroll: 1
    }
])
</script>
<template>
    <div class="pt-6 bg-white-100">
        <!-- Hero Section -->
        <div
            class="bg-[url(/img/home-cover.png)] bg-cover w-full h-[380px]"
        >
            <div class="h-full flex flex-col items-start justify-center ml-24 px-10 bg-primary-500/70 w-fit">
                <h1 class="text-white-0 text-4xl font-semibold mb-4">EuroMid Press</h1>
                <p class="max-w-[450px] break-words overflow-hidden text-lg text-white-0">Founded in 2020 in Istanbul, Turkey, as part of EuroMid Academy of Business & Technology - is an open access academic publisher dedicated to advancing research across diverse fields.</p>
            </div>
        </div>
        <!-- Partners Section -->
        <div class="my-20 text-center px-[100px]">
            <h2 class="text-2xl text-primary-600 font-semibold mb-10 mx-auto">EuroMid Press works with the following organizations and platforms</h2>
            <div class="flex flex-wrap gap-6 p-8 justify-between items-center">
                <CommonPartnerLogo
                    v-for="logo in logos"
                    :key="logo.src"
                    :logo-src="logo.src"
                    :logo-alt="logo.alt"
                />
            </div>
        </div>
        <!-- Publications Section -->
        <div class="px-[100px]">
            <h2 class="text-4xl font-semibold text-primary-500 mb-3">Publications</h2>
            <p class="text-lg text-white-600 max-w-[1080px] mb-8">Discover our wide range of academic and professional publications, including conference proceedings and books. Each title is carefully reviewed, openly accessible, and indexed to maximize visibility and impact within the global research community.</p>
            <Tabs value="0" :pt="{root:'!bg-transparent'}">
                <TabList :pt="{root:'!bg-transparent mb-8',activeBar:'!bg-primary-500'}">
                    <Tab value="0" :pt="{root: ({ context }: any) => ({ class: context.active ? '!text-primary-500' : '!text-white-300'})}">
                        <div class="flex items-center justify-start gap-2">
                            <span>Proceedings</span>
                            <Icon name="material-symbols:checkbook-rounded" size="24" />
                        </div>
                    </Tab>
                    <Tab value="1" :pt="{root: ({ context }: any) => ({ class: context.active ? '!text-primary-500' : '!text-white-300' })}">
                        <div class="flex items-center justify-start gap-2">
                            <span>Books</span>
                            <Icon name="material-symbols:book-2" size="24" />
                        </div>
                    </Tab>
                </TabList>
                <TabPanels :pt="{root:'!bg-transparent'}">
                    <TabPanel value="0">
                        <div class="flex items-center justify-start gap-24 w-full overflow-x-hidden lg:flex-nowrap flex-wrap">
                            <div class="max-w-[400px]">
                                <p class="text-3xl font-semibold text-primary-500 mb-2">Proceedings</p>
                                <p class=" break-words text-lg mb-6">Proceedings of conferences or workshops published as volumes in a series. All our proceedings are open access and indexed to ensure maximum visibility.</p>
                                <NuxtLink
                                    :to="'/'"
                                    class="flex items-center justify-start gap-0.5 text-sm text-secondary-500  font-semibold hover:text-primary-500"
                                >
                                    <p>View All</p>
                                    <Icon name="material-symbols:arrow-forward-ios" class="ml-2" />
                                </NuxtLink>
                            </div>
                            <div class="w-[725px]">
                                <Carousel
                                    :value="proceedings"
                                    :num-visible="2"
                                    :responsive-options="responsiveOptions"
                                    :circular="true"
                                    :autoplay-interval="3000"
                                    :show-navigators="false"
                                    :pt="{
                                        indicatorButton: ({ context }: any) => ({
                                            class: context.highlighted ? '!w-2 !bg-primary-500' : '!bg-white-300 !w-2'
                                        })
                                    }"
                                >
                                    <template #item="slotProps">
                                        <CommonProceedingCard
                                            :category="slotProps.data.category"
                                            :title="slotProps.data.title"
                                            :issn-online="slotProps.data.issnOnline"
                                            :issn-print="slotProps.data.issnPrint"
                                            :link="slotProps.data.link"
                                            :image-src="slotProps.data.imageSrc"
                                            :image-alt="slotProps.data.imageAlt"
                                        />
                                    </template>
                                </Carousel>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<template>
    <div class="flex flex-row gap-9 p-8 start mx-auto items-stretch bg-white-0 md:shadow-lg w-full md:w-fit md:rounded-2xl m-3">
        <div class="flex-col gap-8 hidden md:flex">
            <img
                src="/img/books-on-shelve.png"
                alt="books on shelve"
                class="block object-contain"
                width="220"
            >
            <NuxtLink to="/" class="flex items-center gap-2 mt-2">
                <span class="underline text-secondary-500 font-semibold hover:text-primary-500 flex items-center gap-2">
                    View All Categories
                    <Icon name="material-symbols:arrow-right-alt" size="15" />
                </span>
            </NuxtLink>
        </div>
        <Divider layout="vertical" class="self-stretch  !hidden md:!flex" :pt="{root:'!mx-0'}" />
        <div class="flex flex-col gap-7">
            <CommonCategoryCard
                v-for="i in 3"
                :key="'left-' + i"
                title="Computer Science & Artificial Intelligence"
                link="https://www.google.com/"
                proceedings-title="Advances in Computer Science Research"
                proceedings-link="#"
                books-title="AI Books Collection"
                books-link="#"
                :fluid="true"
                class="w-full md:w-[400px]"
            />
        </div>
        <Divider layout="vertical" class="!hidden xl:!flex self-stretch" :pt="{root:'!mx-0'}" />
        <div class="hidden xl:flex flex-col gap-7">
            <CommonCategoryCard
                v-for="i in 3"
                :key="'right-' + i"
                title="Computer Science & Artificial Intelligence"
                link="https://www.google.com/"
                proceedings-title="Advances in Computer Science Research  (Research)"
                proceedings-link="#"
                books-title="AI Books Collection"
                books-link="#"
                :fluid="true"
                class="w-full md:w-[400px]"
            />
        </div>
    </div>
</template>

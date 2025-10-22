<template>
    <div class="flex flex-wrap gap-14 p-8 justify-center items-start bg-white-0 shadow-lg rounded-2xl m-3">
        <CommonCategoryCard
            v-for="i in 6"
            :key="i"
            title="Computer Science & Artificial Intelligence"
            link="https://www.google.com/"
            proceedings-title="Advances in Computer Science Research (ACSR)"
            proceedings-link="#"
            books-title="AI Books Collection"
            books-link="#"
            :fluid="true"
            class="w-[400px]"
        />
    </div>
</template>

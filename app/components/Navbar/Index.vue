<!-- TODO: Link with back-end -->
<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col gap-3">
        <div class="pt-4 flex items-start gap-2.5 ">
            <a
                v-for="i in 4"
                :key="i"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon
                    size="20"
                    name="ic:baseline-facebook"
                    class="bg-primary-500 hover:bg-secondary-500"
                />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const handleClick = () => {
    alert('Button clicked!')
}
</script>
<template>
    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-col gap-2">
            <h2>Primary Buttons</h2>
            <CommonButton label="Primary" variant="primary-btn" @click="handleClick" />
            <CommonButton
                label="Primary with Icon"
                variant="primary-btn"
                icon="mingcute:search-line"
                @click="handleClick"
            />
            <CommonButton
                label="Primary Loading"
                variant="primary-btn"
                :is-loading="true"
                @click="handleClick"
            />
            <CommonButton
                label="Primary Disabled"
                variant="primary-btn"
                :is-disabled="true"
                @click="handleClick"
            />
            <CommonButton
                label="Primary Rounded"
                variant="primary-btn"
                :is-rounded="true"
                @click="handleClick"
            />
        </div>
        <div class="flex flex-col gap-2">
            <h2>Secondary Buttons</h2>
            <CommonButton label="Secondary" variant="secondary-btn" @click="handleClick" />
            <CommonButton
                label="Secondary with Icon"
                variant="secondary-btn"
                icon="mingcute:search-line"
                @click="handleClick"
            />
            <CommonButton
                label="Secondary Loading"
                variant="secondary-btn"
                :is-loading="true"
                @click="handleClick"
            />
            <CommonButton
                label="Secondary Disabled"
                variant="secondary-btn"
                :is-disabled="true"
                @click="handleClick"
            />
            <CommonButton
                label="Secondary Rounded"
                variant="secondary-btn"
                :is-rounded="true"
                @click="handleClick"
            />
        </div>
        <div class="flex flex-col gap-2">
            <h2>Text Only Buttons</h2>
            <CommonButton
                label="Text Only"
                variant="primary-btn"
                :is-text-only="true"
                @click="handleClick"
            />
            <CommonButton
                label="Text Only with Icon"
                variant="primary-btn"
                :is-text-only="true"
                icon="mingcute:search-line"
                @click="handleClick"
            />
            <CommonButton
                label="Text Only Loading"
                variant="primary-btn"
                :is-text-only="true"
                :is-loading="true"
                @click="handleClick"
            />
        </div>
    </div>
</template>

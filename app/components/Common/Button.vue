<script setup lang="ts">

const props = defineProps<{
    label?: string
    icon?: string
    iconClass?: string
    customClass?: string
    isRounded?: boolean
    isTextOnly?: boolean
    variant?: 'primary-btn' | 'secondary-btn'
    isLoading?: boolean
    isDisabled?: boolean
    isFullWidth?: boolean
}>()

</script>
<template>
    <button
        v-bind="$attrs"
        :disabled="props.isDisabled || props.isLoading"
        :class="[
            'text-sm px-4 py-2 flex items-center rounded-lg hover:cursor-pointer w-fit',
            props.customClass,
            {
                '!rounded-4xl': props.isRounded,
                '!bg-transparent !text-primary-500': props.isTextOnly,
                'primary-btn': props.variant === 'primary-btn',
                'secondary-btn': props.variant === 'secondary-btn',
                '!w-full !justify-center': props.isFullWidth,
            }
        ]"
    >
        <span>
            {{ label }}
        </span>
        <Icon
            v-if="props.icon"
            :name="props.icon"
            class="ml-2.5"
            :class="[
                props.iconClass,
                {
                    'text-white-0': !props.isTextOnly,
                    'text-primary-500': props.isTextOnly
                }
            ]"
        />
        <Icon
            v-if="props.isLoading"
            name="line-md:loading-twotone-loop"
            class="ml-2.5"
            :class="[
                {
                    'text-white-0': !props.isTextOnly,
                    'text-primary-500': props.isTextOnly
                }
            ]"
        />
    </button>
</template>
<style>
.primary-btn {
    background-color: var(--color-primary-500);
    color: var(--color-white-0);
}
.primary-btn:hover {
    background-color: var(--color-primary-700);
}
.primary-btn:disabled {
    background-color: var(--color-primary-300);
}
.secondary-btn {
    background-color: var(--color-secondary-500);
    color: var(--color-white-0);
}
.secondary-btn:hover {
    background-color: var(--color-secondary-600);
}
.secondary-btn:disabled {
    background-color: var(--color-secondary-300);
}
</style>

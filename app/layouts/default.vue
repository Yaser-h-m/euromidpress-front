<template>
    <div class="layout">
        <slot />
    </div>
</template>
<style>
.layout {
    max-width: 1440px;
    margin: 0 auto;
    padding-inline: 100px;

    @media (max-width: 1000px) {
        max-width: 835px;
        padding-inline: 32px;
    }

    @media (max-width: 700px) {
        max-width: 100%;
        padding-inline: 16px;
    }
}
</style>

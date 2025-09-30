<!-- TODO: Link with back-end -->
<script setup lang="ts">

</script>

<template>
  <div class="pt-4">
    <a
      v-for="i in 5"
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
</template>

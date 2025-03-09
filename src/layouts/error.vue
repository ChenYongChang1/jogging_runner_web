<template>
  <div class="container tw-flex tw-flex-col tw-w-[100vw] tw-min-h-[100vh]">
    <Header />
    <div class="tw-flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Layout/header.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container tw-flex tw-flex-col tw-w-[100vw] tw-min-h-[100vh]">
    <div class="tw-absolute tw-z-[1] tw-w-[100vw]">
      <Header />
    </div>
    <div class="tw-flex-1">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Layout/header.vue";
import Footer from "../components/Layout/footer.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container tw-flex tw-flex-col tw-w-[100vw] tw-min-h-[100vh]">
    <Header />
    <div class="tw-flex-1">
      <slot></slot>
    </div>
    <Footer v-if="!is404Page" />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Layout/header.vue";
import Footer from "../components/Layout/footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const is404Page = computed(() => route.path.includes("/404"));
</script>

<style lang="scss" scoped></style>

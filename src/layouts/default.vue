<template>
  <div class="container tw-flex tw-flex-col tw-w-[100vw] tw-min-h-[100vh]">
    <div
      class="tw-fixed tw-z-[1] tw-w-[100vw]"
      :class="{ 'tw-bg-[white]': scrollTop > 0 }"
    >
      <Header v-model:scrollTop="scrollTop" />
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
const scrollTop = ref(0);
onMounted(() => {
  window &&
    window.addEventListener("scroll", (e) => {
      // console.log(e.target);
      scrollTop.value = window.scrollY || document.documentElement.scrollTop;
    });
});
</script>

<style lang="scss" scoped></style>

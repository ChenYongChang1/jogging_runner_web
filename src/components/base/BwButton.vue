<template>
  <div
    class="bw-button tw-px-[16px] tw-h-[42px] tw-rounded-[14px] tw-border-[1px] tw-border-linecolor tw-border-solid tw-text-basecolor"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "BwButton" });
</script>

<style lang="scss" scoped>
.bw-button {
  @apply tw-leading-[40px] tw-cursor-pointer;
  &:hover {
    @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
  }
}
</style>

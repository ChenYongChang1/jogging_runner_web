<template>
  <div
    class="bw-button tw-px-[16px] tw-h-[42px] tw-rounded-[14px] tw-flex-shrink-0"
    :class="[`btn-${type}`, { active }]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "BwButton" });
defineProps({
  type: {
    type: String,
    default: "default",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.bw-button {
  @apply tw-leading-[40px] tw-cursor-pointer;
  &.btn-default {
    @apply tw-border-[1px] tw-border-linecolor tw-border-solid tw-text-basecolor;
    &:hover {
      @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
    }
    &.active {
      @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
    }
  }
  &.btn-border {
    @apply tw-border-themecolor tw-border-[1px] tw-border-solid tw-text-themecolor;
    &:hover {
      @apply tw-bg-themecolor/5;
    }
  }
}
</style>

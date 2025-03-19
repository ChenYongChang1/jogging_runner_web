<template>
  <div
    class="bw-button tw-flex-nowrap tw-px-[16px] tw-rounded-[14px] tw-flex-shrink-0"
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
  &.disabled {
    cursor: not-allowed;
  }
  &.btn-default {
    @apply tw-border-[1px] tw-border-linecolor tw-border-solid tw-text-basecolor;
    &:not(.disabled):hover {
      @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
    }
    &:not(.disabled).active {
      @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
    }
  }
  &.btn-border {
    @apply tw-border-themecolor tw-border-[1px] tw-border-solid tw-text-themecolor;
    &:not(.disabled):hover {
      @apply tw-bg-themecolor tw-border-themecolor tw-text-[white];
    }
  }
}
</style>

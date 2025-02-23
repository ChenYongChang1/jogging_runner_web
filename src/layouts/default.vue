<template>
  <div class="container tw-flex tw-flex-col tw-w-full tw-min-h-[100vh]">
    <div
      class="tw-w-full tw-h-[90px] tw-flex tw-justify-between tw-items-center tw-border-b-linecolor tw-border-b-[1px] tw-border-solid tw-px-[36px]"
    >
      <img src="@/assets/images/logo-zh.png" class="tw-w-[208px] tw-object-contain" alt="" />
      <div class="tw-flex">
        123
      </div>
    </div>
    <div class="tw-flex-1">
      <slot></slot>
    </div>
    <div class="runner-footer tw-h-[100px] tw-w-full tw-bg-[black]"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

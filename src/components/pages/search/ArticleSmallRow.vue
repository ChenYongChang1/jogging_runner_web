<template>
  <div>
    <nuxt-link
      class="tw-block tw-w-full tw-text-[20px] tw-font-[500] tw-leading-[32px] tw-text-text666 tw-mb-[12px] hover:tw-text-themecolor"
      :to="`/post/test.html`"
    >
      心血管疾病預防：飲食、運動及徵兆全解析
    </nuxt-link>
    <div class="look-nums tw-flex">
      <img
        src="@/assets/icon/look.svg"
        class="tw-w-[18px] tw-mr-[8px]"
        alt=""
      />
      <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
        >25.2万人看过</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "ArticleSmallRow" });
</script>

<style lang="scss" scoped></style>

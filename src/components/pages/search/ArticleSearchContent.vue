<template>
  <div class="tw-w-[330px]">
    <div
      class="search-title tw-text-[36px] tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
    >
      搜索
    </div>
    <div class="tw-h-[64px] tw-w-full tw-mb-[68px]">
      <el-input class="tw-h-[68px] tw-w-full"></el-input>
    </div>
    <div
      class="tw-text-[36px] tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
    >
      最新文章
    </div>
    <div class="article-list bw-mb-[64px]">
      <article-small-row class="tw-mb-[28px]"></article-small-row>
      <article-small-row class="tw-mb-[28px]"></article-small-row>
      <article-small-row class="tw-mb-[28px]"></article-small-row>
      <article-small-row class="tw-mb-[28px]"></article-small-row>
      <article-small-row class="tw-mb-[28px]"></article-small-row>
    </div>
  </div>
  <div
    class="tw-text-[36px] tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
  >
    文章分类
  </div>
  <div class="article-list">
    <div class="article-rows tw-mb-[26px]">
      <div class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor">入门技巧</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
    </div>
    <div class="article-rows tw-mb-[26px]">
      <div class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor">入门技巧</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
      <div class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]">基础知识</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "ArticleSearchContent" });
import ArticleSmallRow from "./ArticleSmallRow.vue";
</script>

<style lang="scss" scoped></style>

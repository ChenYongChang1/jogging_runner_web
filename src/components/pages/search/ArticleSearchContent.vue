<template>
  <div class="ss:tw-w-full xl:tw-w-[330px]">
    <div
      class="search-title dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] xl:tw-mb-[28px] ss:tw-mb-[1.125rem]"
    >
      搜索
    </div>
    <div class="tw-h-[64px] tw-w-full xl:tw-mb-[68px] ss:tw-mb-[2.75rem]">
      <bw-input
        v-model="searchWorld"
        class="tw-h-[68px] tw-w-full"
        @keydown.enter="search"
      >
        <template #append>
          <BwButton :active="true" @click="search">
            <el-icon><Search /></el-icon> 搜索
          </BwButton>
        </template>
      </bw-input>
    </div>
    <div
      class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
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
    class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
  >
    文章分类
  </div>
  <div class="article-list max-lg:tw-mb-[2.75rem]">
    <div class="article-rows tw-mb-[26px]">
      <div
        class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor"
      >
        入门技巧
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
    </div>
    <div class="article-rows tw-mb-[26px]">
      <div
        class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor"
      >
        入门技巧
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
      <div
        class="article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
      >
        基础知识
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "ArticleSearchContent" });
import ArticleSmallRow from "./ArticleSmallRow.vue";
import { Search } from "@element-plus/icons-vue";

const searchWorld = defineModel("searchWorld", {
  type: String,
});

const search = () => {
  searchPush(searchWorld.value);
};
</script>

<style lang="scss" scoped></style>

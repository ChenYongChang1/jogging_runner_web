<template>
  <div class="dd-container">
    <div class="search-box lg:tw-flex xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]">
      <div class="search-content">
        <bw-article-card class="card-row-item"></bw-article-card>
        <bw-article-card class="card-row-item"></bw-article-card>
      </div>
      <div class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px]">
        <article-search-content></article-search-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleSearchContent from "~/components/pages/search/ArticleSearchContent.vue";
</script>

<style lang="scss" scoped>
.search-content {
  @apply lg:tw-w-[65.4%] lg:tw-border-r-[1px] lg:tw-border-linecolor lg:tw-border-solid lg:tw-pr-[30px];
  @apply ss:tw-mb-[2.75rem];
}
.card-row-item + .card-row-item {
  margin-top: 44px;
}
</style>

<template>
  <div class="dd-container">
    <div class="search-box tw-flex tw-pt-[56px]">
      <div
        class="search-content tw-w-[65.4%] tw-border-r-[1px] tw-border-linecolor tw-border-solid tw-pr-[30px]"
      >
        <bw-article-card class="card-row-item"></bw-article-card>
        <bw-article-card class="card-row-item"></bw-article-card>
      </div>
      <div class="tw-w-[33.9%] tw-pl-[52px]">
        <article-search-content></article-search-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleSearchContent from '~/components/pages/search/ArticleSearchContent.vue';
</script>

<style lang="scss" scoped>
.card-row-item + .card-row-item {
  margin-top: 44px;
}
</style>

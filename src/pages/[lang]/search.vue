<template>
  <div class="tw-w-[84.7vw] tw-mx-auto">
    <div class="search-box tw-flex tw-pt-[56px]">
      <div
        class="search-content tw-w-[63.8vw] tw-border-r-[1px] tw-border-linecolor tw-border-solid tw-pr-[30px]"
      >
        <bw-article-card class="card-row-item"></bw-article-card>
        <bw-article-card class="card-row-item"></bw-article-card>
      </div>
      <article-search-content></article-search-content>
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

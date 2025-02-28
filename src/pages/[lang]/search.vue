<template>
  <div class="dd-container">
    <div
      class="search-box lg:tw-flex xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]"
    >
      <div class="search-content">
        <!-- <search-empty></search-empty> -->
        <bw-article-card class="card-row-item"></bw-article-card>
        <bw-article-card class="card-row-item"></bw-article-card>
      </div>
      <div class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px]">
        <article-search-content v-model:searchWorld="searchWorld"></article-search-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleSearchContent from "~/components/pages/search/ArticleSearchContent.vue";
import SearchEmpty from "~/components/pages/search/SearchEmpty.vue";

const route = useRoute();
const searchWorld: Ref<string> = ref(route.query.kw?.toString() || "");
// 监听查询参数变化
watch(
  () => route.query.kw,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      searchWorld.value = newVal?.toString() || "";
    }
  }
);
</script>

<style lang="scss" scoped>
.search-content {
  @apply lg:tw-w-[65.4%] lg:tw-border-r-[1px] lg:tw-border-linecolor lg:tw-border-solid lg:tw-pr-[30px];
  @apply max-lg:tw-mb-[2.75rem];
}
.card-row-item + .card-row-item {
  margin-top: 44px;
}
</style>

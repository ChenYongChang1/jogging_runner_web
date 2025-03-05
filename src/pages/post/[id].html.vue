<template>
  <div class="dd-container">
    <bw-breadcrumb :items="[
      {
        title: articleInfo.categoryName,
        path: `/tag/${encodeURIComponent(articleInfo.alias)}`
      },
      {
        title: articleInfo.title
      }
    ]" />
    <h1>{{ articleInfo.title }}</h1>
    <div v-html="articleInfo.content"></div>
  </div>
</template>

<script lang="ts" setup>
import { getArticleInfo } from "~/composables/api/home";

const route = useRoute();
const id = route.params.id;
const articleInfo = ref({});
// const categoryTitle = ref('入门与技巧');
// const alias = ref('getting-started-skills');
const getArticleInfoById = async () => {
  articleInfo.value = await getArticleInfo(id as string);
};
useAsyncData("getArticleInfoById", getArticleInfoById);

console.log(articleInfo);
</script>

<style lang="scss" scoped></style>

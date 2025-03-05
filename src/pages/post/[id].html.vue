<template>
  <div class="dd-container">
    <bw-breadcrumb :items="[
      {
        title: categoryTitle,
        path: `/tag/${encodeURIComponent(category)}`
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
const categoryTitle = ref('入门与技巧');
const category = ref('getting-started-skills');
const getArticleInfoById = async () => {
  articleInfo.value = await getArticleInfo(id as string);
};
getArticleInfoById();
console.log(articleInfo);
</script>

<style lang="scss" scoped></style>

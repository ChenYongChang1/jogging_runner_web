<template>
  <div class="dd-container">
    <div class="xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]">
      <bw-breadcrumb
        :items="[
          {
            title: articleInfo.categoryName,
            path: getRouteLink(`/tag/${encodeURIComponent(articleInfo.alias)}`),
          },
          {
            title: articleInfo.title,
          },
        ]"
      />
      <h1>{{ articleInfo.title }}</h1>
      <div v-html="articleInfo.content"></div>
    </div>
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
</script>

<style lang="scss" scoped></style>

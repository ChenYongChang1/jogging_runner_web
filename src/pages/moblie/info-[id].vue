<template>
  <div class="tw-px-[1rem] tw-py-[0.5rem]">
    <!-- <img
      v-if="articleInfo.cover"
      class="tw-w-full tw-object-contain tw-mb-[1.25rem]"
      :src="articleInfo.cover"
      loading="lazy"
      :alt="articleInfo.title"
    />
    <h1 class="tw-text-basecolor tw-font-[500] tw-text-[1.25rem] tw-mb-[1rem]">
      {{ articleInfo.title }}
    </h1> -->
    <!-- <div v-html="contentHtml"></div> -->
    <bw-article-content :content="contentHtml"></bw-article-content>
  </div>
</template>

<script lang="ts" setup>
import { getArticleInfo } from "~/composables/api/home";
import { genreContent } from "~/composables/goods/useGoods";
import BwArticleContent from "@/components/article/BwArticleContent.vue";
const route = useRoute();
const id = route.params.id;
const articleInfo = ref({});

const getArticleInfoById = async () => {
  articleInfo.value = await getArticleInfo(id as string);
};

const contentHtml = computed(() =>
  genreContent(articleInfo.value?.content || "", articleInfo.value.relGoods)
);

await getArticleInfoById();
</script>

<style lang="scss" scoped></style>

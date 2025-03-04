<template>
  <div class="dd-container">
    <h1>{{ articleInfo.title }}</h1>
    <div v-html="articleInfo.content"></div>
  </div>
</template>

<script lang="ts" setup>
import { getArticleInfo } from "~/composables/api/home";
import BwGoodsRow from "~/composables/goods/BwGoodsRow.vue";

const route = useRoute();
const id = route.params.id;
const articleInfo = ref({});
const getArticleInfoById = async () => {
  articleInfo.value = await getArticleInfo(id as string);
};
getArticleInfoById();
console.log(articleInfo);
</script>

<style lang="scss" scoped></style>

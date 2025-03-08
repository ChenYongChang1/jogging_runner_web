<template>
  <div class="ss:tw-w-full xl:tw-w-[330px]">
    <div
      class="search-title dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] xl:tw-mb-[28px] ss:tw-mb-[1.125rem]"
    >
      {{ $t("common.搜索") }}
    </div>
    <div class="tw-h-[64px] tw-w-full xl:tw-mb-[68px] ss:tw-mb-[2.75rem]">
      <bw-input
        v-model="searchWorld"
        class="tw-h-[68px] tw-w-full"
        @keydown.enter="search"
      >
        <template #append>
          <BwButton :active="true" @click="search">
            <div class="tw-flex">
              <img
                class="tw-w-[16px] tw-mr-[4px]"
                src="@/assets/icon/Search.svg"
                alt=""
              />
             <span> {{ $t("index.搜索") }}</span>
            </div></BwButton
          >
        </template>
      </bw-input>
    </div>
    <div
      class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
    >
      {{ $t("common.最新文章") }}
    </div>
    <div class="article-list bw-mb-[64px]">
      <article-small-row
        v-for="item in lastsList"
        :key="`lasts-${item.id}`"
        class="tw-mb-[28px]"
        :article="item"
      ></article-small-row>
    </div>
  </div>
  <div
    class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"
  >
    {{ $t("common.文章分类") }}
  </div>
  <div class="article-list max-lg:tw-mb-[2.75rem]">
    <div
      v-for="item in categoriesList"
      :key="`categoriesList-${item.id}`"
      class="article-rows tw-mb-[26px]"
    >
      <div
        class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor"
      >
        {{ item.name }}
      </div>
      <nuxt-link
        v-for="citem in item.childs || []"
        class="article-type tw-block tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]"
        :to="getRouteLink(`/tag/${citem.id}`)"
      >
        {{ citem.name }}
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({ name: "ArticleSearchContent" });
import ArticleSmallRow from "./ArticleSmallRow.vue";
const props = defineProps({
  categoriesList: {
    type: Array,
    default: () => [],
  },
  lastsList: {
    type: Array,
    default: () => [],
  },
});
const searchWorld = defineModel("searchWorld", {
  type: String,
});

const search = () => {
  searchPush(searchWorld.value);
};
</script>

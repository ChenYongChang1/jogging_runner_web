<template>
  <div class="dd-container lg:tw-flex dd-content-padding">
    <div class="detail-content xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]">
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
      <h1
        class="dd-fs-36 tw-font-[600] tw-leading-[55px] max-md:tw-leading-[36px] max-md:tw-mb-[22px] tw-mb-[25px]"
      >
        {{ articleInfo.title }}
      </h1>
      <BwArticleContent
        :content="articleInfo.content?.replace(/##insert_goods##/g, '')"
      ></BwArticleContent>
      <!-- 更多阅读 -->
      <div class="more-read tw-mt-[64px] max-md:tw-mt-[44px]">
        <div
          class="more-read-title dd-fs-36 tw-font-[600] max-md:tw-mb-[22px] tw-mb-[35px]"
        >
          {{ $t("post.更多阅读") }}
        </div>
        <div class="dd-container-list">
          <BwCountNumReset :list="articleInfo.recommends">
            <template #default="{ computedList }">
              <bw-list-main
                ref="homeBwListRef"
                :tableList="computedList"
              ></bw-list-main>
            </template>
          </BwCountNumReset>
        </div>
      </div>
    </div>
    <div
      class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px] xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]"
    >
      <article-search-content
        :categoriesList="categoriesList"
        :lastsList="lastsList"
      ></article-search-content>
    </div>
  </div>
  <client-only>
    <app-download
      v-show="showDownload"
      :article-info="articleInfo"
    ></app-download>
  </client-only>
</template>
<script lang="ts" setup>
const { $i18n: i18n } = useNuxtApp();
const $t = i18n.t;

setPageLayout("default");
import { getArticleInfo, excuteStatistics } from "~/composables/api/home";
import AppDownload from "~/components/pages/info/AppDownload.vue";
import BwArticleContent from "@/components/article/BwArticleContent.vue";
import { genrePageLink } from "~/utils/seo";

interface TableListItem {
  id: string;
  cover: string;
  isVideo: number;
  visitNum?: number;
  title?: string;
  desc?: string;
}
interface ArticleInfo {
  id?: string;
  title?: string;
  content?: string;
  categoryName?: string;
  alias?: string;
  categories?: any[];
  lasts?: any[];
  recommends?: TableListItem[];
}
const route = useRoute();
const id = route.params.id;
const articleInfo = ref<ArticleInfo>({});
const showDownload = ref(false);
const categoriesList = ref<any[]>([]);
const lastsList = ref<any[]>([]);

const getArticleInfoById = async () => {
  articleInfo.value = await getArticleInfo(id as string);
  categoriesList.value = articleInfo.value.categories || [];
  lastsList.value = articleInfo.value.lasts || [];
};
await getArticleInfoById();
onMounted(() => {
  nextTick(() => {
    showDownload.value = true;
    excuteStatistics(id);
  });
});
useHead({
  title: $t("post.{slot1}-超慢跑", { slot1: articleInfo.value.title }),
  meta: [
    {
      name: "description",
      content: $t("post.{slot1},超慢跑", { slot1: articleInfo.value.title }),
    },
    {
      name: "keywords",
      content: articleInfo.value.title,
    },
  ],

  link: genrePageLink(),
});
</script>
<style lang="scss" scoped>
.detail-content {
  @apply lg:tw-w-[65.4%] lg:tw-border-r-[1px] lg:tw-border-linecolor lg:tw-border-solid lg:tw-pr-[30px];
  @apply max-lg:tw-mb-[2.75rem];
}
</style>

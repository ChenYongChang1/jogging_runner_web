<template>
  <div class="dd-content-padding">
    <div class="dd-container">
      <div class="search-box lg:tw-flex">
        <BwCountNumReset :list="tableList">
          <template #default="{ computedList }">
            <div
              class="search-content xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]"
            >
              <search-empty v-if="!computedList.length"></search-empty>
              <bw-article-card
                v-for="item in computedList"
                :key="`article-${item.id}`"
                :article="item"
                class="card-row-item"
              ></bw-article-card>
              <div
                class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]"
              >
                <BwPagination
                  v-model:current-page="currentPage"
                  :page-count="pageCount"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </template>
        </BwCountNumReset>

        <div
          class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px] xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]"
        >
          <article-search-content
            v-model:searchWorld="searchWorld"
            :categoriesList="categoriesList"
            :lastsList="lastsList"
          ></article-search-content>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $i18n: i18n } = useNuxtApp();
const $t = i18n.t;

setPageLayout("default");
import ArticleSearchContent from "~/components/pages/search/ArticleSearchContent.vue";
import SearchEmpty from "~/components/pages/search/SearchEmpty.vue";
import { getCategory, getSearchInfo } from "~/composables/api/home";
import { genrePageLink } from "~/utils/seo";

const route = useRoute();
const router = useRouter();
const searchWorld: Ref<string> = ref(route.query.kw?.toString() || "");
const currentPage: Ref<number> = ref(Number(route.query.png?.toString() || 1));
const pageCount: Ref<number> = ref(0);
const tableList = ref([]);
const categoriesList = ref([]);
const lastsList = ref([]);
// console.log(searchWorld, currentPage);

const handleCurrentChange = () => {
  navigateTo({
    query: {
      kw: encodeURIComponent(searchWorld.value),
      png: currentPage.value,
    },
  });
};

const getSearchList = async () => {
  const result = await getSearchInfo({
    page: currentPage.value || 1,
    keyword: searchWorld.value || "",
  });

  const { totalPage, page, list, lasts, categories } = result;
  currentPage.value = page || 1;
  pageCount.value = totalPage;
  tableList.value = list;
  lastsList.value = lasts;
  categoriesList.value = categories;
};

const search = getWatchQueryFunc(["kw", "png"], getSearchList);

await search();

// 监听查询参数变化
// const res = ref("-");
// useAsyncData("d", async () => (res.value = await getCategory()));
// watch(
//   () => route.query.kw,
//   (newVal, oldVal) => {
//     if (newVal !== oldVal) {
//       searchWorld.value = newVal?.toString() || "";
//     }
//   }
// );
useHead({
  title: $t("search.{slot1}搜索结果-超慢跑", { slot1: searchWorld.value }),
  meta: [
    {
      name: "description",
      content: $t("search.{slot1}搜索结果,超慢跑", {
        slot1: searchWorld.value,
      }),
    },
    {
      name: "keywords",
      content: searchWorld.value,
    },
  ],

  link: genrePageLink(),
});
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

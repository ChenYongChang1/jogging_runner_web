<template>
  <div class="dd-container dd-content-padding">
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
          :categoriesList="categoriesList"
          :lastsList="lastsList"
        ></article-search-content>
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
const alias: Ref<string> = ref(route.params.keyword?.toString() || "");
const categoryTitle: Ref<string | null | undefined> = ref("");
const currentPage: Ref<number> = ref(
  Number(route.params.page?.toString() || 1)
);
const pageCount: Ref<number> = ref(0);
const tableList = ref([]);
const categoriesList = ref([]);
const lastsList = ref([]);
// console.log(alias, currentPage);

const handleCurrentChange = () => {
  navigateTo(
    getRouteLink(`/tag/${encodeURIComponent(alias.value)}/${currentPage.value}`)
  );
  // navigateTo({
  //   query: {
  //     kw: encodeURIComponent(alias.value),
  //     png: currentPage.value,
  //   },
  // });
};

const getSearchList = async () => {
  const result = await getSearchInfo({
    page: currentPage.value || 1,
    alias: alias.value || "",
  });
  const {
    totalPage,
    page,
    list,
    lasts,
    categories,
    categoryName = "",
  } = result;
  currentPage.value = page || 1;
  pageCount.value = totalPage;
  tableList.value = list;
  lastsList.value = lasts;
  categoriesList.value = categories;
  categoryTitle.value = categoryName; // TODO 接口需要返回分类名称
};

await getSearchList();

// 监听查询参数变化
// const res = ref("-");
// useAsyncData("d", async () => (res.value = await getCategory()));
// watch(
//   () => route.query.kw,
//   (newVal, oldVal) => {
//     if (newVal !== oldVal) {
//       alias.value = newVal?.toString() || "";
//     }
//   }
// );
useHead({
  title: $t("tag.{slot1}-超慢跑", { slot1: categoryTitle.value }),
  meta: [
    {
      name: "description",
      content: $t("tag.{slot1},超慢跑", { slot1: categoryTitle.value }),
    },
    {
      name: "keywords",
      content: categoryTitle.value,
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

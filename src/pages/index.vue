<template>
  <div class="home-page">
    <banner-card>
      <template #tabs>
        <div class="tw-h-[100px] max-lg:tw-hidden"></div>
      </template>
      <template #inner>
        <div
          class="home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-mx-auto tw-translate-y-[-75px] max-lg:tw-translate-y-0"
        >
          <div
            class="tabar-item"
            v-for="(item, index) in tabarList"
            :key="index"
            :style="{
              backgroundImage: `url(${item?.backGroup})`,
            }"
          >
            <div
              class="tabar-item-text tw-font-[700] tw-mb-[20px] max-md:tw-font-[500] max-sm:tw-mb-[16px] max-md:tw-leading-[24px] tw-leading-[47.6px] tw-text-[#333]"
            >
              {{ item.name }}
            </div>
            <div
              class="tabar-item-right tw-flex tw-justify-between tw-items-center"
            >
              <nuxt-link :to="getRouteLink(`/tag/${item.alias}`)">
                <bw-button
                  :style="{
                    background: item.buttonColor,
                    borderColor: item.buttonColor,
                  }"
                  class="look-more"
                  :active="true"
                  >{{ $t("home.点击查看") }}</bw-button
                >
              </nuxt-link>
              <img
                :src="item.icon"
                class="tw-w-[85px] max-lg:tw-w-[50px]"
                loading="lazy"
                :alt="$t('index.超慢跑')"
              />
            </div>
          </div>
        </div>
      </template>
    </banner-card>
    <!-- pc端search -->
    <div
      class="search-input lg:tw-h-[68px] max-lg:tw-h-[54px] tw-mb-[68px] max-lg:tw-mb-[28px] dd-container tw-mx-auto"
    >
      <BwSearch
        class="tw-h-[68px] tw-w-full"
        v-model:searchWorld="searchValue"
        key="index"
        @search="handleSearch"
      />
    </div>
    <!-- pc端list -->
    <bw-list
      ref="homeBwListRef"
      :searchValue="searchValue"
      class="dd-container tw-mx-auto"
    ></bw-list>
  </div>
</template>
<script setup>
const { $i18n: i18n } = useNuxtApp();
const $t = i18n.t;

setPageLayout("default");
import BwButton from "~/components/base/BwButton.vue";
import BwInput from "~/components/base/BwInput.vue";
import BwList from "~/components/base/BwList.vue";
import BannerCard from "~/components/pages/banner/BannerCard.vue";
import { getCategory } from "~/composables/api/home";
import { genrePageLink } from "~/utils/seo";

const tabarList = ref([]);
const searchValue = ref("");
const homeBwListRef = ref();

const handleSearch = () => {
  // 触发搜索
  // homeBwListRef.value?.getList();
  searchPush(searchValue.value);
};
const getCategoryList = async () => {
  const res = await getCategory();
  tabarList.value = res.value?.data || [];
  // return tabarList.value;
};
await getCategoryList();
// watchEffect(() => {
//   if (categoryData.value) {
//     tabarList.value = categoryData.value;
//   }
// });
const getDataList = async () => {
  // await nextTick()
  // if (homeBwListRef.value) {
  //   return await homeBwListRef.value.getList()
  // }
}; // useAsyncData("getCategoryList", getCategoryList);
// useAsyncData('getDataList', getDataList)
// 跳转
// const handleView = (alias) => {
//   // navigateTo(`/article/${alias}`);
//   const href = getRouteLink(`/tag/${alias}`);
//   navigateTo(href);
// };
// 判断设备类型
const deviceType = computed(() =>
  typeof window !== "undefined" ? (window.innerWidth > 640 ? "pc" : "h5") : "pc"
);
const visible = ref(false);
// 鼠标悬停时显示
const showPopover = () => {
  if (deviceType.value === "pc") {
    visible.value = true;
  }
};
const hidePopover = () => {
  visible.value = false;
};
// 点击时切换显示状态
const togglePopover = () => {
  if (deviceType.value === "pc") {
    visible.value = true;
  } else {
    window.location.href = "/jogging/share.html";
  }
};

useHead({
  title: $t("index.超慢跑-超慢跑节拍器,超慢跑节拍器180,慢跑"),
  meta: [
    {
      name: "description",
      content: $t("index.超慢跑动回归零负担快乐"),
    },
    {
      name: "keywords",
      content: $t("index.超慢跑超慢跑节拍器超慢跑节拍器180慢跑"),
    },
  ],

  link: genrePageLink(),
});
</script>
<style lang="scss" scoped>
// .look-more {
//   @apply tw-px-[14px] max-lg:tw-px-[20px] tw-h-[46px] tw-rounded-[30px] tw-leading-[44px] max-md:tw-px-[14px] tw-text-center;
//   @apply max-md:tw-h-[30px!important] max-md:tw-leading-[28px!important] max-xsm:tw-h-[27px];
//   @apply ss:tw-text-[14px] max-md:tw-text-[16px] max-lg:tw-text-[20px];
// }
.tabar-item {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  @apply ss:tw-px-[9px] ss:tw-py-[18px];
  @apply tw-relative md:tw-px-[18px] md:tw-pb-[26px] md:tw-pt-[32px];
  .tabar-item-text {
    @apply xl:tw-text-[34px] lg:tw-text-[28px] md:tw-text-[26px] sm:tw-text-[24px] ss:tw-text-[20px];
  }
  .look-more {
    @apply ss:tw-px-[3vw] ss:tw-py-[0px] ss:tw-text-[14px];
    @apply md:tw-px-[37px] md:tw-py-[3px] md:tw-text-[16px];
    @apply lg:tw-text-[16px] lg:tw-px-[16px];
    @apply xl:tw-px-[37px] tw-rounded-[30px] xl:tw-text-[20px] tw-py-[3px];
  }
}
.home-tabar {
  background: url("@/assets/images/home-bg.png") repeat-x center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: brightness(1.1) contrast(0.95);
    z-index: 0;
  }

  .home-tabar-pc {
    position: relative;
  }
}
</style>

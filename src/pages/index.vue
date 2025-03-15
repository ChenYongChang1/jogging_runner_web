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
            class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] max-md:tw-pt-[23px] max-md:tw-pl-[10px] max-md:tw-pr-[6px] max-md:tw-pb-[4px] tw-pl-[16px] tw-pr-[10px]"
            v-for="(item, index) in tabarList"
            :key="index"
            :style="{
              backgroundImage: `url(${item?.backGroup})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="tabar-item-text dd-fs-34 tw-font-[700] tw-mb-[3px] max-md:tw-font-[500] max-md:tw-mb-[6px] max-md:tw-leading-[20px] tw-leading-[47.6px] tw-text-[#333]"
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
                  class="tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[78px] max-md:tw-px-[14px] max-md:tw-h-[30px!important] max-md:tw-leading-[28px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[14px] tw-text-center"
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
      <BwInput
        class="tw-h-[100%]"
        v-model="searchValue"
        :placeholder="$t('common.请输入您需要搜索的信息')"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <BwButton
            @click="handleSearch"
            class="max-lg:tw-h-[40px] lg:tw-h-[46px] tw-flex tw-items-center"
            :active="true"
          >
            <div class="tw-flex tw-items-center">
              <img
                class="tw-w-[26px] tw-mr-[8px] max-md:tw-mr-[0]"
                src="@/assets/icon/search-pc.svg"
                loading="lazy"
                :alt="$t('index.超慢跑')"
              />
              <span class="max-md:tw-hidden tw-text-[20px] tw-font-[500]">{{
                $t("index.搜索")
              }}</span>
            </div>
          </BwButton>
        </template>
      </BwInput>
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
    window.location.href = "https://chaomanpao.com/jogging/share.html";
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

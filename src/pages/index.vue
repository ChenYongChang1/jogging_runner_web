<template>
  <div class="home-page">
    <div class="home-tabar tw-w-[100%] tw-bg-[#F8FFF8]">
      <!-- pc端 手机logo -->
      <div
        class="home-tabar-pc tw-flex tw-pt-[24px] tw-justify-between tw-items-center dd-container tw-mx-auto"
      >
        <div
          class="home-tabar-left tw-w-[54%] max-lg:tw-mr-0 max-lg:tw-text-center max-lg:tw-w-[100%]"
        >
          <p
            class="home-tabar-title tw-text-[#333333] dd-fs-84 tw-font-[400] tw-pb-[15px] dd-runner-font"
          >
            {{ $t("index.超慢跑超健康") }}
          </p>
          <p class="home-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[400] dd-runner-font">
            {{ $t("index.随时随地健康健美") }}
          </p>
          <div class="download-app tw-pt-[25px]">
            <el-popover
              popper-class="download-app-popover"
              trigger="manual"
              v-model:visible="visible"
              @mouseenter="showPopover"
              @mouseleave="hidePopover"
              @click="togglePopover"
              placement="left-start"
            >
              <template #reference>
                <BwButton
                  class="download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center"
                  :active="true"
                  @mouseenter="showPopover"
                  @mouseleave="hidePopover"
                  @click="togglePopover"
                >
                  <span class="tw-text-[18px]">{{ $t("index.下载APP") }}</span>
                  <el-icon class="tw-ml-[10px] tw-font-[500]"
                    ><img
                      src="@/assets/icon/Download.svg"
                      class="tw-w-[18px]"
                      loading="lazy"
                      :alt="$t('index.超慢跑')" /></el-icon
                ></BwButton>
              </template>
              <div
                class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"
              >
                <img
                  src="@/assets/images/erweima.png"
                  class="tw-w-[125px] tw-mb-[5px]"
                  loading="lazy"
                  :alt="$t('index.超慢跑')"
                />
                <div
                  class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"
                >
                  {{ $t("index.扫码下载超慢跑") }}
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        <img
          src="@/assets/images/home.png"
          loading="lazy"
          class="tw-w-[36.1%] max-lg:tw-hidden"
          :alt="$t('index.超慢跑')"
        />
      </div>
    </div>
    <!-- tabar -->
    <div
      class="home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-translate-y-[-75px] max-lg:tw-translate-y-0 tw-mx-auto"
    >
      <div
        class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] tw-pl-[16px] tw-pr-[10px]"
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
          class="tabar-item-text dd-fs-34 tw-font-[700] tw-leading-[47.6px] tw-text-[#333]"
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
              class="tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[98px] max-md:tw-h-[30px!important] max-md:tw-leading-[28px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[8px] tw-text-center"
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

    <!-- pc端search -->
    <div
      class="search-input lg:tw-h-[68px] max-lg:tw-h-[54px] tw-mt-[-11px] tw-mb-[68px] max-lg:tw-mb-[28px] dd-container tw-mx-auto max-lg:tw-mt-[28px]"
    >
      <BwInput
        class="tw-h-[100%]"
        v-model="searchValue"
        :placeholder="$t('index.请输入搜索内容')"
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
                class="tw-w-[16px] tw-mr-[4px] max-md:tw-mr-[0]"
                src="@/assets/icon/Search.svg"
                loading="lazy"
                :alt="$t('index.超慢跑')"
              />
              <span class="max-md:tw-hidden">{{ $t("index.搜索") }}</span>
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

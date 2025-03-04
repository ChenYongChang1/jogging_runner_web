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
            class="home-tabar-title tw-text-[#333333] dd-fs-84 tw-font-[400] tw-pb-[15px]"
          >
            超慢跑超健康
          </p>
          <p class="home-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[400]">
            随时随地健康健美
          </p>
          <div class="download-app tw-pt-[25px]">
            <BwButton
              class="download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center"
              :active="true"
              >下载APP<el-icon class="tw-ml-[5px] tw-font-[500]"
                ><Download /></el-icon
            ></BwButton>
          </div>
        </div>
        <img
          src="@/assets/images/home.png"
          class="tw-w-[36.1%] max-lg:tw-hidden"
        />
      </div>
    </div>
    <!-- tabar -->
    <div
      class="home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-translate-y-[-75px] max-lg:tw-translate-y-0 tw-mx-auto"
    >
    {{ res }}
      <div
        class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pl-[16px] tw-pr-[10px]"
        v-for="(item, index) in tabarList"
        :key="index"
        :style="tabarListStyles[index]"
      >
        <img :src="item.backGroup" class="tw-absolute tw-h-[42px] tw-top-[5px] tw-left-[10px]">
        <div
          class="tabar-item-text dd-fs-34 tw-font-[700] tw-leading-[47.6px] tw-text-[#333]"
        >
          {{ item.name }}
        </div>
        <div
          class="tabar-item-right tw-flex tw-justify-between tw-items-center"
        >
          <bw-button
            :style="{ background: item.buttonColor }"
            class="tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[98px] max-md:tw-h-[30px!important] max-md:tw-leading-[30px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[8px] tw-text-center"
            :active="true"
            >点击查看</bw-button
          >
          <img :src="item.icom" class="tw-w-[85px] max-lg:tw-w-[50px]" />
        </div>
      </div>
    </div>

    <!-- pc端search -->
    <div
      class="search-input tw-mt-[-11px] dd-container tw-mx-auto max-lg:tw-mt-[28px]"
    >
      <BwInput v-model="searchValue" placeholder="请输入搜索内容">
        <template #append>
          <BwButton @click="handleSearch" :active="true">
            <el-icon><Search /></el-icon> 搜索
          </BwButton>
        </template>
      </BwInput>
    </div>
    <!-- pc端list -->
    <bw-list
      ref="homeBwListRef"
      :getListApi="getSearchInfo"
      :searchValue="searchValue"
      class="dd-container tw-mx-auto"
    ></bw-list>
  </div>
</template>

<script setup>
import BwButton from "~/components/base/BwButton.vue";
import BwInput from "~/components/base/BwInput.vue";
import BwList from "~/components/base/BwList.vue";
import { Download, Search } from "@element-plus/icons-vue";
import tabarOne from "@/assets/images/tabar-1.png";
import tabarTwo from "@/assets/images/tabar-2.png";
import tabarThree from "@/assets/images/tabar-3.png";
import tabarFour from "@/assets/images/tabar-4.png";
import { onMounted } from "vue";
import { getCategory, getSearchInfo } from "~/composables/api/home";

const tabarListStyles = ref([
  "background: linear-gradient(180deg, #E9F9FF 0%, #F4FFFD 100%)",
  "background: linear-gradient(180deg, #FFF7DE 0%, #FFFCF4 100%)",
  "background: linear-gradient(180deg, #E9ECFF 0%, #F4F5FF 100%)",
  "background: linear-gradient(180deg, #E3FFE5 0%, #F3FFF9 100%);margin-right: 0",
]);
const tabarList = ref([]);
const searchValue = ref("");
const homeBwListRef = ref();

const handleSearch = () => {
  // 触发搜索
  homeBwListRef.value?.getList();
};
const getCategoryList = async () => {
  const res = await getCategory();
  console.log(res, '0000000')
  return res;
};
useAsyncData('getCategoryList', getCategoryList);
const res = ref("-");
useAsyncData("d", async () => (res.value = await getCategory()));

// useAsyncData("getList", homeBwListRef.value?.getList);

// onMounted(async () => {
//   homeBwListRef.value?.getList();

//   // tabarList.value = await getCategory()?.value;
//   console.log(tabarList, '------');
// });
</script>

<style lang="scss" scoped></style>

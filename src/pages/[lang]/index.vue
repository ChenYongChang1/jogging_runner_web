<template>
  <div class="home-page">
    <div class="home-tabar tw-w-[100%] tw-bg-[#F8FFF8]">
      <!-- pc端 手机logo -->
      <div
        class="home-tabar-pc tw-hidden sm:tw-flex tw-pt-[24px] tw-justify-center tw-items-center dd-container tw-mx-auto"
      >
        <div class="home-tabar-left tw-w-[48%] tw-mr-[15.9%]">
          <p
            class="home-tabar-title tw-text-[#333333] tw-text-[50px] tw-font-[700] tw-pb-[15px]"
          >
            超慢跑超健康
          </p>
          <p
            class="home-tabar-title tw-text-[#333333] tw-text-[50px] tw-font-[700]"
          >
            随时随地健康健美
          </p>
          <div class="download-app tw-pt-[25px]">
            <BwButton
              class="download-app-btn tw-w-[120px] tw-flex tw-items-center tw-justify-center"
              :active="true"
              >下载APP<el-icon class="tw-ml-[5px] tw-font-[500]"
                ><Download /></el-icon
            ></BwButton>
          </div>
        </div>
        <img src="@/assets/images/home.png" class="tw-w-[36.1%]" />
      </div>
    </div>
    <!-- pc端tabar -->
    <div
      class="home-tabar-list-pc tw-hidden sm:tw-flex tw-justify-around tw-items-center dd-container tw-transform tw-translate-y-[-75px] tw-mx-auto"
    >
      <div
        class="tabar-item tw-w-[22.8%] tw-rounded-[3px] tw-pt-[32px] tw-pl-[16px] tw-mr-[15px]"
        v-for="(item, index) in tabarList"
        :key="index"
        :style="item.style"
      >
        <div
          class="tabar-item-text tw-text-[34px] tw-font-[700] tw-leading-[47.6px] tw-text-[#333]"
        >
          {{ "入门与技巧" }}
        </div>
        <div class="tabar-item-right tw-flex tw-justify-start tw-items-center">
          <bw-button class="tw-w-[100px] tw-mr-[36px]" :active="true"
            >点击查看</bw-button
          >
          <img :src="item.img" class="tw-w-[85px]" />
        </div>
      </div>
    </div>
    <!-- pc端search -->
    <div class="search-input tw-mt-[-11px] dd-container tw-mx-auto">
      <BwInput
        v-model="searchValue"
        placeholder="请输入搜索内容"
        @keydown.enter="handleSearch"
      >
        <template #append>
          <BwButton @click="handleSearch" :active="true">
            <el-icon><Search /></el-icon> 搜索
          </BwButton>
        </template>
      </BwInput>
    </div>
    <!-- pc端list -->
    <bw-list :tableList="tableList" class="dd-container tw-mx-auto"></bw-list>
  </div>
</template>

<script lang="ts" setup>
import BwButton from "~/components/base/BwButton.vue";
import BwInput from "~/components/base/BwInput.vue";
import BwList from "~/components/base/BwList.vue";
import { Download, Search } from "@element-plus/icons-vue";
import tabarOne from "@/assets/images/tabar-1.png";
import tabarTwo from "@/assets/images/tabar-2.png";
import tabarThree from "@/assets/images/tabar-3.png";
import tabarFour from "@/assets/images/tabar-4.png";
const tabarList = ref([
  {
    title: "入门与技巧",
    img: tabarOne,
    style: "background: linear-gradient(180deg, #E9F9FF 0%, #F4FFFD 100%)",
  },
  {
    title: "超慢跑装备",
    img: tabarTwo,
    style: "background: linear-gradient(180deg, #FFF7DE 0%, #FFFCF4 100%)",
  },
  {
    title: "健康与安全",
    img: tabarThree,
    style: "background: linear-gradient(180deg, #E9ECFF 0%, #F4F5FF 100%)",
  },
  {
    title: "运动与营养",
    img: tabarFour,
    style:
      "background: linear-gradient(180deg, #E3FFE5 0%, #F3FFF9 100%);margin-right: 0",
  },
]);
const searchValue = ref("");
const tableList = ref([
  {
    title: "超慢跑超健康",
    url: tabarOne,
    type: "image",
  },
  {
    title: "超慢跑超健康",
    url: tabarTwo,
    type: "image",
  },
  {
    title: "超慢跑超健康",
    url: tabarTwo,
    type: "image",
  },
  {
    title: "超慢跑超健康",
    url: tabarTwo,
    type: "image",
  },
]);
const handleSearch = () => {
  searchPush(searchValue.value);
};
</script>

<style lang="scss" scoped></style>

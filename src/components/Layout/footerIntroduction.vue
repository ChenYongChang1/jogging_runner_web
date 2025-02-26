<template>
    <div class="download-type tw-mx-[24px] tw-rounded-[26px] tw-bg-[#EDFFEE]">
      <!-- pc 端下载方式 -->
      <div
        class="download-type-pc tw-hidden sm:tw-flex tw-pl-[80px] tw-pt-[45px] tw-pr-[182px]"
      >
        <img src="~assets/images/download-type-pc.png" class="tw-w-[45.9%] tw-mr-[17%]" />
        <div class="right-content tw-w-[35%] tw-pt-[145px]">
          <div class="download-text tw-flex tw-items-center tw-pb-[20px]">
            <div
              class="tw-pb-[10px] tw-rounded-[6px] tw-w-[10px] tw-h-[10px] tw-bg-[green]"
            ></div>
            <div class="tw-font-[500]">下载APP</div>
          </div>
          <div
            class="right-content-header tw-text-[#4A4A4A] tw-text-[48px] tw-font-[600] tw-leading-[56px] tw-text-left tw-pb-[17px]"
          >
            下载超慢跑节拍器
          </div>
          <div class="download-type-imgs tw-pt-[50px] tw-flex tw-flex-wrap">
            <img
              src="~assets/images/download-type-pc.png"
              @click="handleClickType('app-store')"
              class="tw-h-[40px] tw-w-1/2 tw-p-4 tw-pb-[10px]"
            />
            <img
              src="~assets/images/download-type-pc.png"
              @click="handleClickType('google-play')"
              class="tw-h-[40px] tw-w-1/2 tw-p-4 tw-pb-[10px]"
            />
            <img
              src="~assets/images/download-type-pc.png"
              @click="handleClickType('android')"
              class="tw-h-[40px] tw-w-full tw-p-4 tw-pb-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
const handleClickType = (type: string) => {
  if (type === "app-store") {
    // 点击iphone download
  } else if (type === "google-play") {
    // window.open('');
  } else if (type === "android") {
    // window.open('');
  }
};
</script>
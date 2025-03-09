<template>
  <div class="max-md:tw-px-[1rem]">
    <div class="download-type tw-rounded-[26px] tw-bg-[#EDFFEE]">
      <!-- pc 端下载方式 -->
      <div
        class="download-type-pc tw-flex tw-items-start tw-justify-around md:tw-items-center md:tw-flex-row-reverse tw-flex-col tw-pl-[4.78%] tw-pt-[45px] tw-pr-[4.2%] max-md:tw-px-[4.2%]"
      >
        <!--  tw-pt-[145px] -->
        <div class="left-content">
          <div class="download-text tw-flex tw-items-center tw-pb-[20px]">
            <div
              class="tw-mr-[8px] tw-rounded-[2px] tw-w-[8px] tw-h-[8px] tw-bg-[green]"
            ></div>
            <div class="tw-text-[18px] tw-font-[500]">
              {{ $t("common.下载APP") }}
            </div>
          </div>
          <div
            class="left-content-header tw-text-[#4A4A4A] dd-fs-48 tw-font-[600] tw-leading-[56px] tw-text-left tw-pb-[17px]"
          >
            {{ $t("common.下载超慢跑节拍器") }}
          </div>
          <div
            class="download-type-imgs tw-w-full md:tw-w-[386px] tw-pt-[50px] tw-flex tw-flex-wrap"
          >
            <div
              class="download-type-imgs-item tw-w-full md:tw-w-1/2 tw-mb-[10px] md:tw-pr-[8px]"
            >
              <img
                src="~assets/images/apple-download.png"
                @click="handleClickType('app-store')"
                class="tw-w-full tw-h-auto"
              />
            </div>
            <div
              class="download-type-imgs-item tw-w-full md:tw-w-1/2 tw-mb-[10px]"
            >
              <img
                src="~assets/images/google-download.png"
                @click="handleClickType('google-play')"
                class="tw-w-full tw-h-auto"
              />
            </div>
            <div
              class="download-type-imgs-item tw-w-full md:tw-w-1/2 tw-mb-[10px]"
            >
              <img
                src="~assets/images/anzhuo-download.png"
                @click="handleClickType('android')"
                class="tw-w-full tw-h-auto"
              />
            </div>
          </div>
        </div>
        <div class="right-content">
          <img src="~assets/images/footer-phone.png" class="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
type DownloadType = "app-store" | "google-play" | "android";

const handleClickType = (type: DownloadType) => {
  const isMdOrLarger = window.innerWidth >= 768;
  // 如果是 md或者md以上，打开图片；否则跳转链接
  const downloadLinks = {
    // TODO 需要提供下载链接
    "app-store": "",
    "google-play": "",
    android: "",
  };

  if (isMdOrLarger && type === "app-store") {
    // 在桌面端点击 App Store 图标时显示二维码弹窗
    // TODO: 实现 el-popover 显示
  } else {
    // 直接跳转到对应的下载链接
    const link = downloadLinks[type];
    if (link) {
      window.open(link);
    }
  }
};
</script>
<style lang="scss" scoped>
.download-type-imgs {
  position: relative;
  img {
    width: 189px;
  }
}
</style>

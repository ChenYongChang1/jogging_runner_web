<template>
  <div class="download-type tw-mx-[1.67%] tw-rounded-[26px] tw-bg-[#EDFFEE]">
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
            class="download-type-imgs-item tw-w-full md:tw-w-1/2 tw-mb-[10px]"
            v-for="(item, index) in downloadImgs"
            :key="index"
            :class="item.type === 'app-store' ? 'md:tw-pr-[8px]' : ''"
          >
            <el-popover
              popper-class="download-app-popover"
              trigger="manual"
              v-model:visible="item.visible"
              placement="bottom-start"
            >
              <template #reference>
                <img
                  :src="item.img"
                  alt="超慢跑"
                  @click="handleClickType(item.type, index)"
                  class="tw-w-full tw-h-auto tw-cursor-pointer"
                />
              </template>
              <div
                class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"
              >
                <img
                  :src="item.popoverImg"
                  class="tw-w-[125px] tw-mb-[5px]"
                  loading="lazy"
                  alt="超慢跑"
                />
              </div>
            </el-popover>
          </div>
        </div>
      </div>
      <div
        class="right-content tw-flex tw-jusify-center tw-mr-[20px] max-md:tw-mr-0 tw-items-baseline max-md:tw-transform max-md:tw-translate-x-[-4.2%] tw-relative"
      >
        <img src="~assets/images/footer-1.png" alt="全新3.0超慢跑超健康" class="" />
        <img
          src="~assets/images/footer-2.png"
          alt="全新3.0超慢跑超健康"
          class="tw-absolute tw-left-[58px] tw-h-[100%] tw-top-0"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import appleDownload from "@/assets/images/apple-download.png";
import googleDownload from "@/assets/images/google-download.png";
import anzhuoDownload from "@/assets/images/anzhuo-download.png";
import apple from "@/assets/images/apple.png";
import google from "@/assets/images/google.png";
import anzhuo from "@/assets/images/anzhuo.png";

type DownloadType = string;

const downloadImgs = ref([
  {
    type: "app-store",
    img: appleDownload,
    popoverImg: apple,
    visible: false,
  },
  {
    type: "google-play",
    img: googleDownload,
    popoverImg: google,
    visible: false,
  },
  {
    type: "android",
    img: anzhuoDownload,
    popoverImg: anzhuo,
    visible: false,
  },
]);

// 屏幕尺寸变关闭popover
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      downloadImgs.value.forEach((item: any) => {
        item.visible = false;
      });
    }
  };
  window.addEventListener('resize', handleResize);
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});

const handleClickType = (type: DownloadType, index: number) => {
  const isMdOrLarger = typeof window !== 'undefined' && window.innerWidth >= 640;
  
  // 如果是 md或者md以上，打开图片；否则跳转链接
  const downloadLinks = {
    "app-store":
      "https://apps.apple.com/app/apple-store/id6502583295?pt=126570476&ct=webtoapp&mt=8",
    "google-play":
      "https://play.google.com/store/apps/details?id=joggingtracker.joglog.metronome",
    "android": "https://chaomanpao.com/jogging/share.html",
  };
  if (isMdOrLarger) {
    // 在桌面端点击 App Store 图标时显示二维码弹窗
    downloadImgs.value[index].visible = true;
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

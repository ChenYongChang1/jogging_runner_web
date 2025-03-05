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
            class="tw-pb-[10px] tw-rounded-[6px] tw-w-[10px] tw-h-[10px] tw-bg-[green]"
          ></div>
          <div class="tw-text-[18px] tw-font-[500]">
            {{ $t('common.下载APP') }}
          </div>
        </div>
        <div
          class="left-content-header tw-text-[#4A4A4A] dd-fs-48 tw-font-[600] tw-leading-[56px] tw-text-left tw-pb-[17px]"
        >
          {{ $t('common.下载超慢跑节拍器') }}
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
      <div
        class="right-content tw-flex tw-jusify-center tw-mr-[20px] max-md:tw-mr-0 tw-items-baseline max-md:tw-transform max-md:tw-translate-x-[-4.2%] tw-relative"
      >
        <img src="~assets/images/footer-1.png" class="" />
        <img
          src="~assets/images/footer-2.png"
          class="tw-absolute tw-left-[58px] tw-h-[100%] tw-top-0"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const handleClickType = (type: string) => {
  if (type === 'app-store') {
    // 点击iphone download
  } else if (type === 'google-play') {
    // window.open('');
  } else if (type === 'android') {
    // window.open('');
  }
}
</script>
<style lang="scss" scoped>
.download-type-imgs {
  position: relative;
  img {
    width: 189px;
  }
}
</style>

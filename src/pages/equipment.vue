<template>
  <div class="equipment">
    <div class="equipment-content tw-transform">
      <div class="equipment-introduce-pc tw-relative dd-content-padding">
        <div
          class="header-text tw-top-[347px] sm:tw-top-[225px] tw-absolute tw-left-[9.2%] max-sm:tw-left-[50%] max-sm:tw-min-w-[339px] max-sm:tw-translate-x-[-50%]"
        >
          <div
            class="header-text-one tw-text-[#fff] dd-fs-84 tw-font-[400] tw-leading-[94px] tw-mb-[18px] dd-runner-font"
          >
            {{ $t("equipment.Roomfit超慢跑") }}
          </div>
          <div
            class="context-text-two tw-text-[#fff] dd-fs-42 tw-font-[500] tw-leading-[50px]"
          >
            {{ $t("equipment.为超慢跑而生的运动品牌") }}
          </div>
        </div>
      </div>
      <div
        class="equipment-content-pc dd-container tw-w-full tw-bg-[#fff] tw-mt-[80px] max-md:tw-mt-[44px]"
      >
        <div
          class="title tw-w-full tw-flex max-sm:tw-justify-center tw-justify-left tw-items-center tw-mb-[48px] max-md:tw-mb-[32px]"
        >
          <div
            class="tw-text-[#4a4a4a] dd-fs-46 tw-font-[600] tw-leading-[50px] tw-mr-[10px]"
          >
            {{ $t("equipment.扫码查看详情") }}
          </div>
          <div class="erweima-image tw-p-[11px] max-sm:tw-p-[9px]">
            <img
              src="@/assets/images/up-down.png"
              loading="lazy"
              :alt="$t('equipment.超慢跑')"
              class="tw-w-[42px] tw-h-[42px]"
            />
          </div>
        </div>
        <div
          class="equipment-main tw-mb-[-44px] tw-w-full tw-flex tw-items-center tw-justify-between sm:tw-flex-row tw-flex-col"
        >
          <div
            class="equipment-main-item tw-mb-[44px] tw-w-[342px] max-sm:tw-w-[252px]"
          >
            <div
              class="title dd-fs-36-32 tw-leading-[56px] tw-tracking-[-2%] tw-mb-[33px] max-sm:tw-mb-[27px] tw-text-basecolor"
            >
              {{ $t("equipment.微信小店") }}
            </div>
            <div class="erweima-image tw-p-[11px] max-sm:tw-p-[9px]">
              <img
                src="@/assets/images/weixin.png"
                loading="lazy"
                class="tw-w-[100%] img-shadow"
                :alt="$t('equipment.超慢跑')"
              />
            </div>
          </div>
          <div
            class="equipment-main-item tw-mb-[44px] tw-w-[342px] max-sm:tw-w-[252px]"
          >
            <div
              class="title dd-fs-36-32 tw-leading-[56px] tw-tracking-[-2%] tw-mb-[33px] max-sm:tw-mb-[27px] tw-text-basecolor"
            >
              {{ $t("equipment.抖音小店") }}
            </div>
            <div class="erweima-image tw-p-[11px] max-sm:tw-p-[9px]">
              <img
                src="@/assets/images/douyin.png"
                class="tw-w-[100%] img-shadow"
                loading="lazy"
                :alt="$t('equipment.超慢跑')"
              />
            </div>
          </div>
          <div class="equipment-main-item  tw-mb-[44px] tw-w-[342px] max-sm:tw-w-[252px]">
            <div
              class="title dd-fs-36-32 tw-leading-[56px] tw-tracking-[-2%] tw-mb-[33px] max-sm:tw-mb-[27px] tw-text-basecolor"
            >
              {{ $t("equipment.小红书小店") }}
            </div>
            <img
              src="@/assets/images/xiaohongshu.png"
              class="tw-w-[100%] img-shadow"
              loading="lazy"
              :alt="$t('equipment.超慢跑')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
setPageLayout("default");
</script>
<style lang="scss" scoped>
.equipment {
  .equipment-introduce-pc {
    background-image: url("@/assets/images/equipment-bg.png"); /* 路径根据实际文件位置修改 */
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 573px;
    // transform: translateY(-93px);
  }
  .equipment-main {
    width: 100%;
    .equipment-main-item {
      // width: 26.7%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 11px;

      .img {
        width: 26.7%;
      }
      .img-shadow {
        box-shadow: 0px 13px 26.1px 0px #0000000a, 0px -8px 20.9px 0px #00000005;
      }
    }
  }
}
.erweima-image {
  box-shadow: 0px 13px 26.1px 0px #0000000a, 0px -8px 20.9px 0px #00000005;
}
</style>

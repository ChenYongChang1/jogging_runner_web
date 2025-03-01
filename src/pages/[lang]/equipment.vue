<template>
  <div class="equipment">
    <div class="equipment-introduce-pc tw-relative">
     <div class="header-text tw-top-[347px] sm:tw-top-[225px] tw-absolute tw-left-[9.2%] max-sm:tw-left-[50%] max-sm:tw-min-w-[339px] max-sm:tw-translate-x-[-50%]">
      <div
        class="header-text-one tw-text-[#fff] dd-fs-84 tw-font-[400] tw-leading-[94px] tw-mb-[18px]"
      >
        Roomfit超慢跑
      </div>
      <div
        class="context-text-two tw-text-[#fff] dd-fs-42 tw-font-[500] tw-leading-[50px]"
      >
        为超慢跑而生的运动品牌
      </div>
     </div>
    </div>
    <div class="equipment-content-pc dd-container tw-mt-[80px] tw-bg-[#fff]">
      <div class="title tw-flex max-sm:tw-justify-center tw-justify-left  tw-items-center tw-mb-[48px]">
        <div class="tw-text-[#4a4a4a] dd-fs-46 tw-font-[600] tw-leading-[50px]">
          扫码查看详情
        </div>
        <img
          src="@/assets/images/up-down.png"
          class="tw-w-[42px] tw-h-[42px]"
        />
      </div>
      <div class="equipment-main tw-flex tw-items-center tw-justify-between sm:tw-flex-row tw-flex-col">
        <div class="equipment-main-item tw-w[342px] max-sm:tw-w[252px]">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">
            微信小店
          </div>
          <img src="@/assets/images/weixin.png" class="tw-w-[100%]" alt="" />
        </div>
        <div class="equipment-main-item">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">
            抖音小店
          </div>
          <img src="@/assets/images/douyin.png" class="tw-w-[100%]" alt="" />
        </div>
        <div class="equipment-main-item">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">
            小红书小店
          </div>
          <img src="@/assets/images/xiaohongshu.png" class="tw-w-[100%]" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.equipment {
  .equipment-introduce-pc {
    background-image: url("@/assets/images/equipment-bg.png"); /* 路径根据实际文件位置修改 */
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 573px;
    transform: translateY(-93px);
  }
  .equipment-main {
    width: 100%;
    .equipment-main-item {
      // width: 26.7%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 11px;
      .img {
        width: 26.7%;
      }
    }
  }
}
</style>

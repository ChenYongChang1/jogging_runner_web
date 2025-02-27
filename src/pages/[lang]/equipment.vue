<template>
  <div class="equipment">
    <!-- pc 端 -->
    <div class="equipment-introduce-pc"></div>
    <div class="equipment-content-pc dd-container tw-mt-[80px] tw-bg-[#fff]">
      <div class="title tw-flex tw-justify-center tw-items-center tw-mb-[48px]">
        <div class="tw-text-[#4a4a4a] dd-fs-40 tw-font-[600] tw-leading-[50px]">
          扫码查看详情
        </div>
        <img
          src="@/assets/images/up-down.png"
          class="tw-w-[42px] tw-h-[49px]"
        />
      </div>
      <div class="equipment-main tw-flex tw-items-center tw-justify-around tw-mb-[9.3%]">
        <div class="equipment-main-item">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">微信小店</div>
          <img src="@/assets/images/weixin.png" alt="" />
        </div>
        <div class="equipment-main-item">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">抖音小店</div>
          <img src="@/assets/images/douyin.png" alt="" />
        </div>
        <div class="equipment-main-item">
          <div class="title dd-fs-36 tw-leading-[56px] tw-mb-[33px]">小红书小店</div>
          <img src="@/assets/images/xiaohongshu.png" alt="" />
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
      width: 26.7%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 11px;
      .img{
        width: 26.7%;
      }
    }
  }
}
</style>

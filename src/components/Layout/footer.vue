<template>
  <div class="footer-wrapper justify-center items-center w-full">
    <!-- 简介 -->
    <div class="brief-introduction tw-mx-[24px]">
      <!-- pc端简介 -->
      <div
        class="brief-introduction-pc tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-pt-[117px] tw-pb-[120px] tw-px-[182px]"
      >
        <img
          src="~assets/images/footer-introduction.png"
          class="tw-w-[502px] tw-h-[424px]"
        />

        <div class="right-content tw-w-[404px]">
          <div
            class="right-content-header tw-text-[#4A4A4A] tw-text-[48px] tw-font-[600] tw-leading-[56px] tw-text-left tw-pb-[17px]"
          >
            超慢跑
          </div>
          <p
            class="tw-text-[#666666] tw-text-[18px] tw-font-[500] tw-leading-[28.8px] tw-text-left"
          >
            欢迎来到 [超慢跑]，这里是超慢跑爱好者的专属家园！我们致力于全方位推广超慢跑，让这项运动被更多人认识和喜爱。
          </p>
          <p
            class="tw-text-[#666666] tw-text-[18px] tw-font-[500] tw-leading-[28.8px] tw-text-left"
          >
            在超慢跑内容方面，我们精心打造了丰富多元的资讯库。从跑者们的真实故事分享，到不同环境下超慢跑的独特体验，每一篇内容都饱含着对超慢跑的热爱，希望能给大家带来激励与启发。
          </p>
          <p
            class="tw-text-[#666666] tw-text-[18px] tw-font-[500] tw-leading-[28.8px] tw-text-left"
          >
            超慢跑科普是我们的重点板块。我们邀请专业的运动专家，深入浅出地讲解超慢跑的原理、益处，比如它如何提升心肺功能、增强关节灵活性，以及相较于其他运动，超慢跑在运动损伤风险上的优势，让大家科学地认识超慢跑。
          </p>
        </div>
      </div>
    </div>
    <!-- 下载方式 -->
    <footerIntroduction />
    <!-- 网站备案 -->
    <div
      class="website-approve tw-mx-[24px] tw-rounded-[26px]"
      style="background-color: #1e293b"
    >
      <div class="website-approve-pc tw-pt-[93px] tw-pb-[78px] tw-text-center">
        <p
          class="tw-text-[#fff] tw-text-[22px] tw-font-[500] tw-leading-[20px] tw-mb-[33px]"
        >
          The Wind Technology Co., Ltd. © 2025 All rights reserved.
        </p>
        <p
          class="tw-text-[#fff] tw-text-[22px] tw-font-[500] tw-leading-[20px]"
        >
          网站备案号：沪ICP备2023022642号-2
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import footerIntroduction from './footerIntroduction.vue';
</script>
<style lang="scss" scoped>
.footer-wrapper {
  .website-approve {
    background-image: url("../../assets/images/footer-bg.png");
    background-size: cover;
    background-position: center;
  }
}
</style>

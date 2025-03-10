<template>
  <div
    class="footer-wrapper justify-center items-center w-full lg:tw-mt-[120px] tw-mt-[44px]"
  >
    <!-- 简介 -->
    <div class="brief-introduction tw-mx-auto">
      <!-- pc端简介 1280px-->
      <div
        class="brief-introduction-pc dd-container sm:tw-flex lg:tw-items-start lg:tw-flex-row-reverse tw-flex-col tw-justify-center lg:tw-mb-[120px]"
      >
        <div class="right-content lg:tw-w-[40.6%]">
          <div
            class="right-content-header max-lg:tw-text-center tw-text-[#4A4A4A] dd-fs-48 tw-font-[600] tw-leading-[56px] tw-text-left tw-pb-[17px]"
          >
            {{ $t('common.超慢跑') }}
          </div>
          <p
            class="tw-text-[#666666] tw-text-[18px] tw-font-[500] tw-leading-[28.8px] tw-text-left"
          >
            {{
              $t(
                'common.欢迎来到_超慢跑_，这里是超慢跑爱好者的专属家园！我们致力于全方位推广超慢跑，让这项运动被更多人认识和喜爱。在超慢跑内容方面，我们精心打造了丰富多元的资讯库。从跑者们的真实故事分享，到不同环境下超慢跑的独特体验，每一篇内容都饱含着对超慢跑的热爱，希望能给大家带来激励与启发。超慢跑科普是我们的重点板块。我们邀请专业的运动专家，深入浅出地讲解超慢跑的原理、益处，比如它如何提升心肺功能、增强关节灵活性，以及相较于其他运动，超慢跑在运动损伤风险上的优势，让大家科学地认识超慢跑。'
              )
            }}
          </p>
        </div>
        <img
          src="~assets/images/footer-introduction.png"
          :alt="$t('common.超慢跑')"
          loading="lazy"
          class="lg:tw-w-[48%] lg:tw-mr-[9.4%] tw-w-full tw-mb-[2rem]"
        />
      </div>
    </div>
    <!-- 下载方式 -->
    <footerIntroduction />
    <!-- 网站备案 -->
    <div
      class="website-approve tw-mx-[24px] tw-mt-[25px] tw-rounded-[24px] max-md:tw-mb-[10px]"
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
          {{ $t('common.网站备案号：沪ICP备2024086239号-2') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import footerIntroduction from './footerIntroduction.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isEquipment = computed(() => {
  return route.name?.includes('equipment')
})
// import { isAndroid, isIOS, checkAppInstalled, isMobileDevice } from "@/utils/detect"; // 修改为导入正确的函数
// import { ref, computed, onMounted } from "vue";
// import { useRoute } from "vue-router";
</script>
<style lang="scss" scoped>
.footer-wrapper {
  .website-approve {
    background-image: url('../../assets/images/footer-bg.png');
    background-size: cover;
    background-position: center;
  }
}
</style>

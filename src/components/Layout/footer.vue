<template>
  <div
    class="footer-wrapper justify-center items-center w-full lg:tw-mt-[120px] tw-mt-[44px]"
  >
  {{ isMobileDevice() }}

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
            {{ $t("common.超慢跑") }}
          </div>
          <p
            class="tw-text-[#666666] tw-text-[18px] tw-font-[500] tw-leading-[28.8px] tw-text-left"
          >
            {{
              $t(
                "common.欢迎来到_超慢跑_，这里是超慢跑爱好者的专属家园！我们致力于全方位推广超慢跑，让这项运动被更多人认识和喜爱。在超慢跑内容方面，我们精心打造了丰富多元的资讯库。从跑者们的真实故事分享，到不同环境下超慢跑的独特体验，每一篇内容都饱含着对超慢跑的热爱，希望能给大家带来激励与启发。超慢跑科普是我们的重点板块。我们邀请专业的运动专家，深入浅出地讲解超慢跑的原理、益处，比如它如何提升心肺功能、增强关节灵活性，以及相较于其他运动，超慢跑在运动损伤风险上的优势，让大家科学地认识超慢跑。"
              )
            }}
          </p>
        </div>
        <img
          src="~assets/images/footer-introduction.png"
          class="lg:tw-w-[48%] lg:tw-mr-[9.4%] tw-w-full tw-mb-[2rem]"
        />
      </div>
    </div>
    <!-- 下载方式 -->
    <footerIntroduction />
    <!-- 网站备案 -->
    <div
      class="website-approve tw-mx-[24px] tw-mt-[25px] tw-rounded-[26px]"
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
          {{ $t("common.网站备案号：沪ICP备2024086239号-2") }}
        </p>
      </div>
    </div>
    <!-- 移动端展示下载或者打开app -->
     <!--       v-if="isMobileDevice()" -->
    <div
      class="mobile-download tw-w-full tw-h-[58px] tw-flex tw-items-center tw-justify-between"
    >
      <div class="tw-flex tw-items-center tw-space-x-2 md:tw-space-x-3">
        <img
          src="~/assets/images/logo.png"
          alt="Logo"
          class="tw-w-8 tw-h-8 md:tw-w-10 sm·:tw-h-10"
        />
        <div>
          <div
            class="tw-text-base md:tw-text-lg tw-text-[#3EDB30] tw-font-bold tw-text-green-500"
          >
            超慢跑专用APP
          </div>
          <div class="tw-text-xs md:tw-text-sm tw-text-[#ccc] tw-text-gray-500">
            节拍器、打卡、更多内容
          </div>
        </div>
      </div>
      <div>
        <!-- 下载 -->
        <bw-button
          :active="true"
          v-if="isAppInstalled"
          class="tw-w-[74px] tw-h-[34px] tw-rounded-[17px]"
          @click="openOrDownloadApp('open')"
          >打开</bw-button
        >
        <bw-button
          :active="true"
          v-else
          class="tw-w-[74px] tw-h-[34px] tw-rounded-[17px]"
          @click="openOrDownloadApp('download')"
          >下载</bw-button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import footerIntroduction from "./footerIntroduction.vue";
import { isAndroid, isIOS, checkAppInstalled, isMobileDevice } from "@/utils/detect"; // 修改为导入正确的函数
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const isAppInstalled = ref<boolean>(false);
const scheme = ref<string>("");
const downloadUrl = ref<string>(""); // 下载软件地址

onMounted(async () => {
  if (isAndroid()) {
    scheme.value = "windjog://article?id=1&title=标题&url=http://www.baidu.com";
    downloadUrl.value = "";
  } else if (isIOS()) {
    scheme.value =
      "jogging://jogging.net/article?id=1&title=标题&url=http://www.baidu.com";
    downloadUrl.value = "";
  }
  // 使用新的异步函数来检查应用是否已安装
  isAppInstalled.value = await checkAppInstalled(scheme.value);
});

const openOrDownloadApp = (str: string) => {
  window.location.href = str === "open" ? scheme.value : downloadUrl.value;
};
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

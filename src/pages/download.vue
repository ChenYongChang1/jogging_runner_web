<template>
  <div class="download-page">
    <div class="download-tabar tw-w-[100%]">
      <!-- pc端 -->
      <banner-card>
        <template #inner>
          <img
            src="@/assets/images/home.png"
            class="tw-w-[36.1%] max-sm:tw-w-[69.6%] max-sm:tw-mt-[20px] tw-hidden max-md:tw-block tw-mx-auto"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
        </template>
      </banner-card>
      <!-- <div
        class="download-tabar dd-content-padding tw-bg-[#F8FFF8] tw-flex tw-pt-[24px] tw-justify-center tw-items-center max-sm:tw-flex-col tw-flex-row tw-w-[100%] tw-mx-auto tw-mb-[64px]"
      >
        <div
          class="download-tabar-left tw-w-[60%] max-sm:tw-w-[100%] max-sm:tw-mr-[0] tw-flex tw-flex-col max-sm:tw-justify-center max-sm:tw-items-center tw-justify-start"
        >
          <p
            class="download-tabar-title tw-text-[#333333] dd-fs-60 tw-pb-[15px] dd-runner-font"
          >
            {{ $t('download.超慢跑超健康') }}
          </p>
          <p
            class="download-tabar-title tw-text-[#333333] dd-fs-54 dd-runner-font"
          >
            {{ $t('download.随时随地健康健美') }}
          </p>
          <div class="download-app tw-pt-[25px]">
            <el-popover
              popper-class="download-app-popover"
              trigger="manual"
              v-model:visible="visible"
              @mouseenter="showPopover"
              @mouseleave="hidePopover"
              @click="togglePopover"
              placement="left-start"
            >
              <template #reference>
                <BwButton
                  class="download-app-btn tw-w-[120px] tw-flex tw-items-center tw-justify-center"
                  :active="true"
                  @mouseenter="showPopover"
                  @click="togglePopover"
                  >{{ $t('download.下载APP')
                  }}<el-icon class="tw-ml-[5px] tw-font-[500]"
                    ><img
                      src="@/assets/icon/Download.svg"
                      loading="lazy"
                      :alt="$t('download.超慢跑')" /></el-icon
                ></BwButton>
              </template>
              <div
                class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"
              >
                <img
                  src="@/assets/images/erweima.png"
                  class="tw-w-[125px] tw-mb-[5px]"
                  loading="lazy"
                  :alt="$t('download.超慢跑')"
                />
                <div
                  class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"
                >
                  {{ $t('download.扫码下载超慢跑') }}
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        <img
          src="@/assets/images/home.png"
          class="tw-w-[36.1%] max-sm:tw-w-[69.6%] max-sm:tw-mt-[35px]"
          :alt="$t('download.超慢跑')"
          loading="lazy"
        />
      </div> -->
      <!-- pc端介绍 -->
      <div
        class="download-describe tw-rounded-[24px] tw-bg-[#EDFFEE] tw-overflow-hidden tw-w-[96.6%] tw-mx-auto tw-mb-[64px] max-sm:tw-mb-[44px]"
      >
        <div
          class="top-content tw-px-[13.2%] max-xsm:tw-px-[2%] tw-mb-[54px] max-md:tw-mb-[28px] tw-flex tw-flex-col tw-justify-center tw-items-center"
        >
          <div
            class="tw-w-[30%] tw-max-w-[133px] tw-h-[16px] max-md:tw-h-[8px] tw-rounded-[16px] tw-bg-themecolor tw-mx-auto tw-mt-[54px] tw-mb-[40px] max-md:tw-mb-[0] max-md:tw-mt-[20px]"
          ></div>
          <div
            class="download-describe-header dd-fs-84-44 tw-leading-[94px] tw-mb-[26px] max-md:tw-mb-[0] dd-runner-font"
          >
            {{ $t("download.超慢跑超健康") }}
          </div>
          <div class="describe-content-text dd-fs-30-16 tw-leading-[50px] max-sm:tw-leading-[24px] tw-tracking-[2%] tw-text-basecolor tw-text-center">
            {{
              $t(
                "download.超慢跑节拍器是为所有人设计的跑步步频节拍器，适合跑步初学者、健康减肥者、想要提高心肺功能、减少运动伤害的跑者。通过精准的节拍控制，超慢跑节拍器帮助您维持恒定的超慢跑步频，从而优化跑步效果，让您的每一步都充满节奏感和舒适感。"
              )
            }}
          </div>
        </div>
        <div
          class="bottom-content tw-flex tw-justify-between tw-items-baseline"
        >
          <img
            src="@/assets/images/download-image-1.png"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
          <img
            src="@/assets/images/download-image-2.png"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
          <img
            src="@/assets/images/download-image-3.png"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
          <img
            src="@/assets/images/download-image-4.png"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
          <img
            src="@/assets/images/download-image-5.png"
            :alt="$t('download.超慢跑')"
            loading="lazy"
          />
        </div>
      </div>
      <!-- pc端文字介绍 -->
      <div
        class="download-text-describe tw-flex tw-flex-col tw-rounded-[24px] tw-bg-[#FBFBFB] tw-w-[96.6%] tw-mx-auto tw-px-[118px] max-sm:tw-px-[22px] tw-pt-[48px] max-sm:tw-py-[28px] tw-pb-[54px]"
      >
        <div class="text-describe-title dd-fs-48-28">
          {{ $t("download.为什么推荐超慢跑：") }}
        </div>
        <div class="text-describe-content dd-fs-20">
          <div class="text dd-fs-20">
            {{
              $t("download.超慢跑的原理基于“低强度、长时间”的有氧运动理论。")
            }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.低强度的运动可以使心率保持在最大心率的60%-70%之间，这一区间被认为是最佳的脂肪燃烧和心肺功能提升区间。在这个心率区间内，身体主要使用脂肪作为能量来源，而非糖原，这有助于脂肪减少和体重管理。"
              )
            }}
          </div>
        </div>
        <div class="text-describe-title dd-fs-48-28">
          {{ $t("download.超慢跑有什么好处：") }}
        </div>
        <div class="text-describe-content dd-fs-20">
          <div class="text dd-fs-20">
            {{
              $t(
                "download.-提高心肺功能：长期的超慢跑可以增强心脏功能，提高氧气利用率。"
              )
            }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.-减少运动伤害：由于跑步强度低，对关节和肌肉的压力小，因此能显著降低运动伤害的风险。"
              )
            }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.-促进脂肪燃烧：在低强度运动下，身体更倾向于使用脂肪作为能源，有助于体重控制和减肥。"
              )
            }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.-提高睡眠质量：规律的超慢跑可以改善睡眠质量，帮助身体和心理更好地放松。"
              )
            }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.-增强心理健康：慢跑过程中，跑者往往能享受到跑步带来的放松和快乐，有助于减少压力和抑郁情绪。"
              )
            }}
          </div>
        </div>
        <div class="text-describe-title dd-fs-48-28">
          {{ $t("download.超慢跑节拍器指南：") }}
        </div>
        <div class="text-describe-content dd-fs-20">
          <div class="text dd-fs-20">{{ $t("download.-步频调音器-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.支持步频调节，根据您的日常习惯选择你的跑步步频，包含爆火的180步频慢跑、150步频、200步频等经典步频，还有几十种不同速度的步频，不管你是骑自行车踏频，还是健走，还是快跑，总有一款适合你，快定制你的跑步节拍吧"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.-超慢跑节拍-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.超多跑步节拍音乐供选择，跟着节拍一步一步跑，不伤膝盖。音乐与节拍的结合，边跑步边享受，让跑步充满乐趣~"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.-计步器-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.你只管跑，数据交给我们，每次慢跑都会帮你记录步数、公里数、消耗的卡路里、跑步时间~"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.倒数计时器-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.每天一个小目标，设置锻炼时间，即可启动超慢跑计时器，定时提醒！"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.-数据分析-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.詳細記錄您的跑步數據，包括速度、步頻、跑步時間和消耗的卡路里，並通過圖表和分析報告展示您的進步。"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.-定制通知-") }}</div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.想运动又怕忘记怎么办？超慢跑节拍器支持定制通知哦，周一到周日每天都可以设置运动提醒，到点定时运动提醒，不怕忘记~"
              )
            }}
          </div>
          <div class="text dd-fs-20">{{ $t("download.-免费无广-") }}</div>
          <div class="text dd-fs-20">
            {{ $t("download.绿色安全，纯粹无广，免费哒！冲鸭~") }}
          </div>
          <div class="text dd-fs-20">
            {{
              $t(
                "download.一天15分鐘，不喘不累、強化心肺，不管你要锻炼身体，还是要健身减肥，超慢跑节拍器都是你不二选择，冲鸭~"
              )
            }}
          </div>
          <div class="text dd-fs-20">
            {{ $t("download.立即下载，改变从现在开始！") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerCard from "~/components/pages/banner/BannerCard.vue";

setPageLayout("default");
const popover = ref(null);
const visible = ref(false);
// 鼠标悬停时显示
const showPopover = () => {
  visible.value = true;
};
const hidePopover = () => {
  visible.value = false;
};
// 点击时切换显示状态
const togglePopover = () => {
  console.log("惦记了");
  visible.value = true;
};
// import BwButton from "~/components/base/BwButton.vue";
</script>
<style lang="scss" scoped>
.text-describe-title {
  @apply tw-mb-[22px] tw-font-[600] tw-leading-[56px] tw-tracking-[-2%] tw-text-center tw-text-basecolor max-sm:tw-mb-[8px];
}
.text-describe-content {
  // margin-bottom: 64px;
  @apply tw-mb-[64px] max-sm:tw-mb-[28px]  tw-font-[500] tw-tracking-[0%] tw-text-text666 tw-leading-[160%] tw-text-center;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
}
.bottom-content {
  img {
    width: 17.4%;
  }
}
</style>

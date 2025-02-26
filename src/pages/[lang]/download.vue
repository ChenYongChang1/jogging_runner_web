<template>
  <div class="download-page">
    <div class="download-tabar tw-w-[100%] tw-bg-[#F8FFF8]">
      <!-- pc端 -->
      <div
        class="download-tabar-pc tw-hidden sm:tw-flex tw-pt-[24px] tw-justify-center tw-items-center tw-w-[1280px] tw-mx-auto tw-mb-[64px]"
      >
        <div class="download-tabar-left tw-w-[48%] tw-mr-[15.9%]">
          <p
            class="download-tabar-title tw-text-[#333333] tw-text-[50px] tw-font-[700] tw-pb-[15px]"
          >
            超慢跑超健康
          </p>
          <p
            class="download-tabar-title tw-text-[#333333] tw-text-[50px] tw-font-[700]"
          >
            随时随地健康健美
          </p>
          <div class="download-app tw-pt-[25px]">
            <el-popover
              trigger="manual"
              v-model:visible="visible"
              @mouseenter="showPopover"
              @mouseleave="hidePopover"
              @click="togglePopover"
              placement="left-start"
              width="144"
            >
              <template #reference>
                <BwButton
                  class="download-app-btn tw-w-[120px] tw-flex tw-items-center tw-justify-center"
                  :active="true"
                  @mouseenter="showPopover"
                  @click="togglePopover"
                  >下载APP<el-icon class="tw-ml-[5px] tw-font-[500]"
                    ><Download /></el-icon
                ></BwButton>
              </template>
              <div
                class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-[144px] tw-px-[9px] tw-py-[8px]"
              >
                <img
                  src="@/assets/images/erweima.png"
                  class="tw-w-[125px] tw-mb-[5px]"
                  alt=""
                />
                <div
                  class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"
                >
                  扫码下载超慢跑
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        <img src="@/assets/images/home.png" class="tw-w-[36.1%]" />
      </div>
      <!-- pc端介绍 -->
      <div
        class="download-describe-pc tw-hidden sm:tw-flex tw-rounded-[24px] tw-bg-[#EDFFEE] tw-w-[96.6%] tw-mx-auto tw-mb-[64px]"
      ></div>
      <!-- pc端文字介绍 -->
      <div
        class="download-text-describe-pc tw-hidden sm:tw-flex tw-rounded-[24px] tw-bg-[#FBFBFB] tw-w-[96.6%] tw-mx-auto tw-mb-[120px] tw-px-[118px] tw-pt-[48px] tw-pb-[54px]"
      >
        <div class="text-describe-title">为什么推荐超慢跑：</div>
        <div class="text-describe-content">
          <div class="text">
            超慢跑的原理基于“低强度、长时间”的有氧运动理论。
          </div>
          <div class="text">
            低强度的运动可以使心率保持在最大心率的60%-70%之间，这一区间被认为是最佳的脂肪燃烧和心肺功能提升区间。在这个心率区间内，身体主要使用脂肪作为能量来源，而非糖原，这有助于脂肪减少和体重管理。
          </div>
        </div>
        <div class="text-describe-title">超慢跑有什么好处：</div>
        <div class="text-describe-content">
          <div class="text">
            -提高心肺功能：长期的超慢跑可以增强心脏功能，提高氧气利用率。
          </div>
          <div class="text">
            -减少运动伤害：由于跑步强度低，对关节和肌肉的压力小，因此能显著降低运动伤害的风险。
          </div>
          <div class="text">
            -促进脂肪燃烧：在低强度运动下，身体更倾向于使用脂肪作为能源，有助于体重控制和减肥。
          </div>
          <div class="text">
            -提高睡眠质量：规律的超慢跑可以改善睡眠质量，帮助身体和心理更好地放松。
          </div>
          <div class="text">
            -增强心理健康：慢跑过程中，跑者往往能享受到跑步带来的放松和快乐，有助于减少压力和抑郁情绪。
          </div>
        </div>
        <div class="text-describe-title">超慢跑节拍器指南：</div>
        <div class="text-describe-content">
          <div class="text">-步频调音器-</div>
          <div class="text">
            支持步频调节，根据您的日常习惯选择你的跑步步频，包含爆火的180步频慢跑、150步频、200步频等经典步频，还有几十种不同速度的步频，不管你是骑自行车踏频，还是健走，还是快跑，总有一款适合你，快定制你的跑步节拍吧
          </div>
          <div class="text">-超慢跑节拍-</div>
          <div class="text">
            超多跑步节拍音乐供选择，跟着节拍一步一步跑，不伤膝盖。音乐与节拍的结合，边跑步边享受，让跑步充满乐趣~
          </div>
          <div class="text">-计步器-</div>
          <div class="text">
            你只管跑，数据交给我们，每次慢跑都会帮你记录步数、公里数、消耗的卡路里、跑步时间~
          </div>
          <div class="text">倒数计时器-</div>
          <div class="text">
            每天一个小目标，设置锻炼时间，即可启动超慢跑计时器，定时提醒！
          </div>
          <div class="text">-数据分析-</div>
          <div class="text">
            詳細記錄您的跑步數據，包括速度、步頻、跑步時間和消耗的卡路里，並通過圖表和分析報告展示您的進步。
          </div>
          <div class="text">-定制通知-</div>
          <div class="text">
            想运动又怕忘记怎么办？超慢跑节拍器支持定制通知哦，周一到周日每天都可以设置运动提醒，到点定时运动提醒，不怕忘记~
          </div>
          <div class="text">-免费无广-</div>
          <div class="text">绿色安全，纯粹无广，免费哒！冲鸭~</div>
          <div class="text">
            一天15分鐘，不喘不累、強化心肺，不管你要锻炼身体，还是要健身减肥，超慢跑节拍器都是你不二选择，冲鸭~
          </div>
          <div class="text">立即下载，改变从现在开始！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Download } from "@element-plus/icons-vue";

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
  visible.value = !visible.value;
};
// import BwButton from "~/components/base/BwButton.vue";
</script>

<style lang="scss" scoped>
.text-describe-title {
  margin-bottom: 22px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -2%;
  text-align: center;
  color: #4a4a4a;
}
.text-describe-content {
  margin-bottom: 64px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: center;
  color: #666666;
}
</style>

<template>
  <div class="dd-content-padding banner-tabar lg:tw-mb-[64px] tw-mb-[28px]">
    <div
      class="dd-container tw-flex md:tw-justify-between max-md:tw-justify-center max-md:tw-text-center"
    >
      <div>
        <p class="home-tabar-title dd-runner-font">
          {{ $t("index.超慢跑超健康") }}<br />
          {{ $t("index.随时随地健康健美") }}
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
                class="download-app-btn tw-w-[166px] tw-h-[56px] max-md:tw-mx-auto max-md:tw-mb-[32px] tw-flex tw-items-center tw-justify-center"
                :active="true"
                @mouseenter="showPopover"
                @mouseleave="hidePopover"
                @click="togglePopover"
              >
                <span class="tw-text-[18px]">{{ $t("index.下载APP") }}</span>
                <img
                  src="@/assets/icon/pc-download.svg"
                  class="tw-w-[24px] tw-ml-[4px]"
                  loading="lazy"
                  :alt="$t('index.超慢跑')"
              /></BwButton>
            </template>
            <div
              class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"
            >
              <img
                src="@/assets/images/erweima.png"
                class="tw-w-[125px] tw-mb-[5px]"
                loading="lazy"
                :alt="$t('index.超慢跑')"
              />
              <div
                class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"
              >
                {{ $t("index.扫码下载超慢跑") }}
              </div>
            </div>
          </el-popover>
        </div>
      </div>
      <img
        src="@/assets/images/home.png"
        loading="lazy"
        class="tw-w-[36.1%] max-md:tw-hidden"
        :alt="$t('index.超慢跑')"
      />
    </div>
    <slot name="inner"></slot>
  </div>
  <slot name="tabs"></slot>
</template>

<script lang="ts" setup>
const tabarList = ref([]);
const searchValue = ref("");
const homeBwListRef = ref();

const slots = useSlots();

// 判断设备类型
const deviceType = computed(() =>
  typeof window !== "undefined" ? (window.innerWidth > 640 ? "pc" : "h5") : "pc"
);
const visible = ref(false);
// 鼠标悬停时显示
const showPopover = () => {
  if (deviceType.value === "pc") {
    visible.value = true;
  }
};
const hidePopover = () => {
  visible.value = false;
};
// 点击时切换显示状态
const togglePopover = () => {
  if (deviceType.value === "pc") {
    visible.value = true;
  } else {
    window.location.href = "https://chaomanpao.com/jogging/share.html";
  }
};
</script>

<style lang="scss" scoped>
.banner-tabar {
  background: url("@/assets/images/home-bg.png") repeat-x center center;
  // background-repeat: repeat;
  // background-size: contain;
  // background-position: 30% center;
  @apply tw-w-full lg:tw-h-[600px] xl:tw-h-[784px];
  // tw-overflow-hidden
}
.home-tabar-title {
  @apply tw-text-[#333333] ss:tw-text-[40px] md:tw-text-[56px] lg:tw-text-[70px] xl:tw-text-[84px] tw-font-[400];
  @apply md:tw-pt-[60px] lg:tw-pt-[90px] xl:tw-pt-[130px];
}
</style>

<template>
  <div class="card-row">
    <div class="card-title dd-title-text">
      Zone 2 心率計算：有效達成運動目標並提升心臟健康的關鍵！
    </div>
    <bw-media class="tw-mb-[22px]" type="image"></bw-media>
    <div
      class="next-title dd-fs-30 tw-font-[600] tw-text-basecolor tw-leading-[55px]"
    >
      Zone 2 心率計算：
    </div>
    <div class="sub-text tw-mb-[10px]">
      超慢跑的原理基于“低强度、长时间”的有氧运动理论。
      低强度的运动可以使心率保持在最大心率的60%-70%之间，这一区间被认为是最佳的脂肪燃烧和心肺功能提升区间。在这个心率区间内，身体主要使用脂肪作为能量来源，而非糖原，这有助于脂肪减少和体重管理。
    </div>
    <div
      class="look-views lg:tw-flex tw-justify-between tw-items-center tw-flex-wrap ss:tw-mb-[1.125rem]"
    >
      <div class="look-nums tw-flex">
        <img
          src="@/assets/icon/look.svg"
          class="tw-w-[18px] tw-mr-[8px]"
          alt=""
        />
        <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
          >25.2万人看过</span
        >
      </div>
      <bw-button type="border" class="ss:tw-mx-auto lg:tw-mx-0 tw-w-fit">
        <div class="tw-flex">
          <span class="tw-mr-[6px]">阅读全文</span>
          <img src="@/assets/icon/to-right.svg" class="tw-w-[18px]" alt="" />
        </div>
      </bw-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "BwArticleCard" });
</script>

<style lang="scss" scoped>
.card-row {
  width: 100%;
  box-shadow: 0 6px 14px 0 rgba($color: #000000, $alpha: 0.06),
    0 -4px 14px 0 rgba($color: #000000, $alpha: 0.04);
  @apply tw-rounded-[32px] tw-p-[24px] tw-text-justify;
  .card-title {
    @apply tw-font-[600] tw-text-basecolor lg:tw-leading-[55px] lg:tw-mb-[30px] ss:tw-mb-[1.375rem];
  }
  .sub-text {
    @apply tw-text-text666 lg:tw-text-[20px] ss:tw-text-[1rem] tw-font-[500] lg:tw-leading-[32px] ss:tw-leading-[1.5rem];
  }
}
</style>

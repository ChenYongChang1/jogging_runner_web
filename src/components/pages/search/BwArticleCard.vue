<template>
  <div class="card-row">
    <div class="card-title dd-title-text">
      {{ article.title }}
    </div>
    <bw-media
      class="tw-mb-[22px]"
      :src="article.cover"
      :alt="article.title"
      type="image"
    ></bw-media>
    <!-- <div
      class="next-title dd-fs-30 tw-font-[600] tw-text-basecolor tw-leading-[55px]"
    >
      Zone 2 心率計算：
    </div> -->
    <div class="sub-text tw-mb-[10px]">
      {{ article.desc || "" }}
    </div>
    <div
      class="look-views lg:tw-flex tw-justify-between tw-items-center tw-flex-wrap"
    >
      <div class="look-nums tw-flex max-lg:tw-mb-[1.125rem]">
        <img
          src="@/assets/icon/look.svg"
          class="tw-w-[18px] tw-mr-[8px]"
          :alt="$t('common.超慢跑')"
          loading="lazy"
        />
        <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
          >{{ setVisitNum(article.visitNum) }}{{ $t("common.人看过") }}</span
        >
      </div>
      <nuxt-link :to="linkToInfo()">
        <bw-button
          type="border"
          class="ss:tw-mx-auto tw-px-[20px] tw-py-[3px] lg:tw-mx-0 tw-w-fit btn-card"
        >
          <div class="tw-flex tw-items-center">
            <span class="tw-mr-[6px]  ss:tw-text-[18px] md:tw-text-[20px] tw-font-[500]">{{ $t("common.阅读全文") }}</span>
            <img
              src="@/assets/icon/to-right.svg"
              class="tw-block tw-w-[18px] tw-mt-[2px]"
              :alt="$t('common.超慢跑')"
              loading="lazy"
            />
          </div>
        </bw-button>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({ name: "BwArticleCard" });
const props = defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
});
const router = useRouter();
const linkToInfo = () => {
  return getRouteLink(`/post/${props.article.id}.html`);
};
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
.btn-card:hover {
  img {
    filter: brightness(0) invert(1); // 将图标改为白色
  }
}
</style>

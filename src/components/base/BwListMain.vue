<template>
  <div class="bw-list-item" v-for="(item, index) in tableList" :key="index">
    <div>
      <div
        class="bw-list-item-img tw-mb-[20px] tw-rounded-[26px] tw-w-[100%] tw-overflow-hidden"
      >
        <BwMedia
          class="tw-rounded-[26px] tw-w-[100%]"
          :src="item.cover"
          :alt="item.title"
          :type="item.isVideo === 1 ? 'image' : 'video'"
        />
      </div>

      <div class="bw-list-item-title">
        {{ item.title }}
      </div>
      <div class="bw-list-item-content">
        {{ item.desc }}
      </div>
    </div>
    <div>
      <div class="look-nums tw-flex tw-mt-[10px]">
        <img
          src="@/assets/icon/look.svg"
          class="tw-w-[18px] tw-mr-[8px]"
          loading="lazy"
          :alt="item.title"
        />
        <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
          >{{ setVisitNum(item.visitNum) }}{{ $t("common.人看过") }}</span
        >
      </div>
      <div class="tw-flex tw-justify-end">
        <nuxt-link :to="linkToInfo(item)">
          <bw-button
            type="border"
            class="tw-w-[141px] tw-text-center tw-h-[46px] tw-pl-[22px] tw-pr-[13px]"
          >
            <div class="tw-flex tw-justify-center tw-h-[46px]">
              <span class="tw-mr-[6px] tw-leading-[46px]">{{
                $t("common.阅读全文")
              }}</span>
              <img
                src="@/assets/icon/to-right.svg"
                loading="lazy"
                class="tw-w-[18px]"
              />
            </div>
          </bw-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

interface TableListItem {
  id: string;
  cover: string;
  isVideo: number;
  visitNum?: number;
  title?: string;
  desc?: string;
}
const props = defineProps({
  tableList: {
    type: Array as PropType<TableListItem[]>,
    required: true,
  },
});
const linkToInfo = (item: TableListItem) => {
  return getRouteLink(`/post/${item.id}.html`);
};
</script>
<style lang="scss" scoped>
.bw-list-item {
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px #0000000f, 0px -4px 14px 0px #0000000a;
  @apply tw-flex tw-flex-col tw-justify-between;
  @apply tw-w-full tw-px-[16px] tw-pt-[16px] tw-pb-[22px];
  @apply lg:tw-min-w-[300px] lg:tw-max-h-[560px];
  .bw-list-item-img {
    @apply tw-w-full tw-h-[229px] tw-overflow-hidden tw-rounded-[26px];
    img {
      @apply tw-w-full tw-h-full tw-object-cover;
    }
  }

  .bw-list-item-title {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 2%;
    color: #4a4a4a;
  }
  .bw-list-item-content {
    font-family: PingFang SC;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 2%;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  // 添加按钮悬停和点击效果
  .bw-button {
    &:hover,
    &:active {
      background-color: #61cd57 !important;

      span {
        color: #fff;
      }

      img {
        filter: brightness(0) invert(1); // 将图标改为白色
      }
    }
  }
}
</style>

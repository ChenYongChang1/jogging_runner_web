<template>
  <div
    class="bwList tw-mx-auto tw-flex tw-flex-wrap tw-justify-between tw-gap-4"
  >
    <div
      class="bw-list-item tw-w-full sm:tw-w-[48%] lg:tw-w-[29.3%] tw-h-[500px] tw-px-[16px] tw-pt-[16px] tw-pb-[22px]"
      v-for="(item, index) in tableList"
      :key="index"
    >
      <BwMedia
        class="tw-mb-[20px] tw-rounded-[26px]"
        :src="item.url"
        :type="item.type"
      />
      <div class="bw-list-item-title">
        超慢跑和膝蓋的關係？超慢跑被稱為「膝蓋友善運動」的關鍵原因
      </div>
      <div class="bw-list-item-content">
        超慢跑是一項膝蓋友善的運動，運動新手、有膝蓋問題的人都能簡單入門。了解超慢跑與膝蓋的關聯，並說明它能幫助你輕鬆達成健康目標的原因。
      </div>
      <div class="look-nums tw-flex tw-mt-[10px]">
        <img
          src="@/assets/icon/look.svg"
          class="tw-w-[18px] tw-mr-[8px]"
          alt=""
        />
        <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
          >25.2万人看过</span
        >
      </div>
      <div class="tw-flex tw-justify-end">
        <bw-button type="border" class="tw-w-[140px]">
          <div class="tw-flex">
            <span class="tw-mr-[6px]">阅读全文</span>
            <img src="@/assets/icon/to-right.svg" class="tw-w-[18px]" alt="" />
          </div>
        </bw-button>
      </div>
    </div>
    <BwPagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface TableListItem {
  url: string;
  type: string;
  [key: string]: string | undefined;
  title?: string;
}
const props = defineProps({
  tableList: {
    type: Array as PropType<TableListItem[]>,
    default: () => [],
  },
});
const total = ref<number>(0);
const pageSize = ref<number>(10);
const currentPage = ref<number>(1);
// 处理每页条数变化
const handleSizeChange = (newSize:number) => {
  console.log("每页条数变化:", newSize);
};

// 处理页码变化
const handleCurrentChange = (newPage:number) => {
  console.log("页码变化:", newPage);
};
</script>
<style lang="scss" scoped>
.bw-list-item {
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px #0000000f;
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
    height: 88px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 2%;
    color: #666666;
  }
}
</style>

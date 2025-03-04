<template>
  <div class="bwList tw-mx-auto">
    <div class="bw-list-main tw-flex tw-flex-wrap tw-justify-between tw-gap-4">
      <div
        class="bw-list-item tw-w-full sm:tw-w-[48%] lg:tw-w-[29.3%] tw-px-[16px] tw-pt-[16px] tw-pb-[22px]"
        v-for="(item, index) in tableList"
        :key="index"
      >
        <BwMedia
          class="tw-mb-[20px] tw-rounded-[26px] tw-w-[100%] tw-min-h-[229px]"
          :src="item.cover"
          :type="item.isVideo === 1 ? 'image' : 'video'"
        />
        <div class="bw-list-item-title">
          {{item.title}}
        </div>
        <div class="bw-list-item-content">
          {{item.desc}}
        </div>
        <div class="look-nums tw-flex tw-mt-[10px]">
          <img
            src="@/assets/icon/look.svg"
            class="tw-w-[18px] tw-mr-[8px]"
            alt=""
          />
          <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
            >{{ item.visitNum }}万人看过</span
          >
        </div>
        <div class="tw-flex tw-justify-end">
          <bw-button type="border" class="tw-w-[140px] tw-text-center">
            <div class="tw-flex tw-justify-center">
              <span class="tw-mr-[6px]">阅读全文</span>
              <img
                src="@/assets/icon/to-right.svg"
                class="tw-w-[18px]"
                alt=""
              />
            </div>
          </bw-button>
        </div>
      </div>
    </div>
    <div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]">
      <BwPagination
        :current-page="currentPage"
        :page-count="totalPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineExpose } from "vue";

interface TableListItem {
  cover: string;
  isVideo: number;
  visitNum?: number;
  title?: string;
  desc?: string;
  [key: string]: string | number | undefined;  // 添加number类型到索引签名
}
const props = defineProps({
  getListApi: {
    type: Function,
    required: true,
  },
  searchValue: {
    type: String,
    required: false,
    default: "",
  },
});
const tableList = ref<TableListItem[]>([]);
const totalPage = ref<number>(0); // 总页数
const currentPage = ref<number>(1);

const getList = async () => {
  const data = await props.getListApi({
    page: currentPage.value,
    categoryId: "",
    keyword: props.searchValue,
  });
  console.log(data, '888888888', currentPage.value)
  totalPage.value = data?.totalPage;
  currentPage.value = data?.page;
  tableList.value = data?.list;
};

// 处理页码变化
const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
  console.log("页码变化:", newPage);
  getList();
};
// 暴露getList方法供父组件调用
defineExpose({
  getList,
});
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
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 2%;
    color: #666666;
  }
}
</style>

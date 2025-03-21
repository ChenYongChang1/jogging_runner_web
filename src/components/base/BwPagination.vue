<template>
  <div class="custom-pagination" v-if="pageCount > 1">
    <bw-button
      type="border"
      :class="[
        'button-page tw-h-[46px] height-line tw-hidden lsm:tw-block',
        currentPage === 1 ? 'disabled' : '',
      ]"
      :active="false"
      :disabled="currentPage === 1"
      @click="goToFirstPage"
      >{{ $t("common.首页") }}</bw-button
    >
    <bw-button
      type="border"
      :class="['button-page', currentPage === 1 ? 'disabled' : '']"
      class="tw-text-center page-btn tw-flex tw-justify-center tw-items-center"
      :active="false"
      @mouseenter="
        () => {
          isLeftHover = true;
        }
      "
      @mouseleave="
        () => {
          isLeftHover = false;
        }
      "
      :disabled="currentPage === 1"
      @click="goToPrevPage"
    >
      <img
        v-if="isLeftHover && currentPage !== 1"
        class="tw-h-[23px]"
        src="@/assets/icon/to-left-black.svg"
      />
      <img v-else class="tw-h-[23px]" src="@/assets/icon/to-left.svg" />
    </bw-button>
    <client-only>
      <el-pagination
        :current-page="currentPage"
        :page-count="pageCount"
        layout="pager"
        @current-change="handleCurrentChange"
      />
    </client-only>

    <bw-button
      type="border"
      :class="['button-page', currentPage === totalPages ? 'disabled' : '']"
      class="tw-text-center page-btn tw-flex tw-justify-center tw-items-center"
      :active="false"
      :disabled="currentPage === totalPages"
      @mouseenter="
        () => {
          isRightHover = true;
        }
      "
      @mouseleave="
        () => {
          isRightHover = false;
        }
      "
      @click="goToNextPage"
    >
      <img
        v-if="isRightHover && currentPage !== totalPages"
        class="tw-h-[23px]"
        src="@/assets/icon/to-right2-black.svg"
      />
      <img v-else class="tw-h-[23px]" src="@/assets/icon/to-right2.svg" />
    </bw-button>
    <bw-button
      type="border"
      :class="[
        'button-page tw-h-[46px] height-line  tw-hidden lsm:tw-block',
        currentPage === totalPages ? 'disabled' : '',
      ]"
      :active="false"
      :disabled="currentPage === totalPages"
      @click="goToLastPage"
      >{{ $t("common.尾页") }}</bw-button
    >
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

// 定义组件的 props
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1,
  },
  pageCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

// 定义 emits
const emit = defineEmits([
  "update:currentPage",
  "update:pageSize",
  "size-change",
  "current-change",
]);

// 计算总页数
const totalPages = computed(() => props.pageCount);
const isRightHover = ref(false);
const isLeftHover = ref(false);
// 跳转到首页
const goToFirstPage = () => {
  emit("update:currentPage", 1);
  emit("current-change", 1);
};

// 跳转到尾页
const goToLastPage = () => {
  emit("update:currentPage", totalPages.value);
  emit("current-change", totalPages.value);
};

// 跳转到上一页
const goToPrevPage = () => {
  isLeftHover.value = false;
  if (props.currentPage > 1) {
    const newPage = props.currentPage - 1;
    emit("update:currentPage", newPage);
    emit("current-change", newPage);
  }
};

// 跳转到下一页
const goToNextPage = () => {
  isRightHover.value = false;
  if (props.currentPage < totalPages.value) {
    const newPage = props.currentPage + 1;
    emit("update:currentPage", newPage);
    emit("current-change", newPage);
  }
};

// 处理每页条数变化
const handleSizeChange = (newSize) => {
  emit("update:pageSize", newSize);
  emit("size-change", newSize);
};

// 处理页码变化
const handleCurrentChange = (newPage) => {
  emit("update:currentPage", newPage);
  emit("current-change", newPage);
};
</script>
<style lang="scss" scoped>
.custom-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  .button-page {
    border-color: #c0c4cc;
    color: #4a4a4a;
    &.height-line {
      @apply tw-leading-[44px] tw-px-[16px];
    }
  }
  .button-page:not(.disabled) {
    &:hover {
      background-color: #61cd57;
      border-color: #61cd57;
      color: #fff;
    }
  }
  :deep(.el-pager) {
    .number {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
      &.is-active,
      &:hover {
        color: white;
        @apply tw-bg-themecolor tw-rounded-[12px];
      }
    }
  }
}

.bw-button {
  margin: 0;
  padding: 0 8px;
}
.page-btn {
  @apply tw-w-[46px] tw-h-[46px] tw-rounded-[12px];
  &.disabled {
    @apply tw-bg-[#E5E7EB] tw-border-[transparent];
  }
}
</style>

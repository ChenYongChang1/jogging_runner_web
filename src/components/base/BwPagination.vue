<template>
  <div class="custom-pagination">
    <bw-button
      type="border"
      :class="['button-page', currentPage === 1 ? 'disabled' : '']"
      :active="false"
      :disabled="currentPage === 1"
      @click="goToFirstPage"
    >
      首页
    </bw-button>
    <bw-button
      type="border"
      :class="['button-page', currentPage === 1 ? 'disabled' : '']"
      :active="false"
      :disabled="currentPage === 1"
      @click="goToPrevPage"
    >
      <el-icon><img src="@/assets/icon/arrow-left.svg" /></el-icon>
    </bw-button>

    <el-pagination
      :current-page="currentPage"
      :page-count="pageCount"
      layout="pager"
      @current-change="handleCurrentChange"
    />

    <bw-button
      type="border"
      :class="['button-page', currentPage === totalPages ? 'disabled' : '']"
      :active="false"
      :disabled="currentPage === totalPages"
      @click="goToNextPage"
    >
      <el-icon><img src="@/assets/icon/arrow-right.svg" /></el-icon>
    </bw-button>
    <bw-button
      type="border"
      :class="['button-page', currentPage === totalPages ? 'disabled' : '']"
      :active="false"
      :disabled="currentPage === totalPages"
      @click="goToLastPage"
    >
      尾页
    </bw-button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 定义组件的 props
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  }
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
  if (props.currentPage > 1) {
    const newPage = props.currentPage - 1;
    emit("update:currentPage", newPage);
    emit("current-change", newPage);
  }
};

// 跳转到下一页
const goToNextPage = () => {
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
  gap: 8px;
  .button-page {
    border-color: #c0c4cc;
    color: #4a4a4a;
    &:hover,
    &:active {
      background-color: #61cd57;
      border-color: #61cd57;
      color: #fff;
    }
  }
  .disabled {
    border-color: #c0c4cc;
    color: rgb(168, 171, 178);
    cursor: not-allowed;
    &:hover,
    &:active {
      background-color: #fff;
      border-color: #c0c4cc;
      color: rgb(168, 171, 178);
    }
  }
}

.bw-button {
  margin: 0;
  padding: 0 8px;
}
</style>
<style lang="scss">
.el-pager li.is-active,
.el-pager li:hover {
  color: rgb(97 205 87) !important;
}
</style>

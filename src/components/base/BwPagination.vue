<template>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      layout="sizes, prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <!-- 自定义首页和上一页按钮 -->
      <template #prev>
        <el-button type="text" :disabled="currentPage === 1" @click="goToFirstPage">
          首页
        </el-button>
        <el-button type="text" :disabled="currentPage === 1" @click="goToPrevPage">
          <el-icon><arrow-left /></el-icon> <!-- 上一页图标 -->
        </el-button>
      </template>
  
      <!-- 自定义下一页和尾页按钮 -->
      <template #next>
        <el-button type="text" :disabled="currentPage === totalPages" @click="goToNextPage">
          <el-icon><arrow-right /></el-icon> <!-- 下一页图标 -->
        </el-button>
        <el-button type="text" :disabled="currentPage === totalPages" @click="goToLastPage">
          尾页
        </el-button>
      </template>
    </el-pagination>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'; // 引入图标组件
  
  // 定义组件的 props
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  });
  
  // 定义 emits
  const emit = defineEmits(['update:currentPage', 'update:pageSize', 'size-change', 'current-change']);
  
  // 计算总页数
  const totalPages = computed(() => Math.ceil(props.total / props.pageSize));
  
  // 跳转到首页
  const goToFirstPage = () => {
    emit('update:currentPage', 1);
    emit('current-change', 1);
  };
  
  // 跳转到尾页
  const goToLastPage = () => {
    emit('update:currentPage', totalPages.value);
    emit('current-change', totalPages.value);
  };
  
  // 跳转到上一页
  const goToPrevPage = () => {
    if (props.currentPage > 1) {
      const newPage = props.currentPage - 1;
      emit('update:currentPage', newPage);
      emit('current-change', newPage);
    }
  };
  
  // 跳转到下一页
  const goToNextPage = () => {
    if (props.currentPage < totalPages.value) {
      const newPage = props.currentPage + 1;
      emit('update:currentPage', newPage);
      emit('current-change', newPage);
    }
  };
  
  // 处理每页条数变化
  const handleSizeChange = (newSize) => {
    emit('update:pageSize', newSize);
    emit('size-change', newSize);
  };
  
  // 处理页码变化
  const handleCurrentChange = (newPage) => {
    emit('update:currentPage', newPage);
    emit('current-change', newPage);
  };
  </script>
  
  <style scoped>
  .el-button {
    margin: 0 4px; /* 调整按钮间距 */
  }
  </style>
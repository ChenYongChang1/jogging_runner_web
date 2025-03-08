<!-- BwInput.vue -->
<template>
  <div class="bw-input">
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="bw-input-field"
      v-bind="$attrs"
    />
    <!-- 添加清除按钮 -->
    <div
      v-if="clearable && modelValue"
      class="clear-icon tw-cursor-pointer tw-text-[#999] tw-text-[16px] tw-mr-[10px]"
      @click="handleClear"
    >
      ✕
    </div>
    <slot name="append"></slot>
    <!-- 用来插入自定义按钮 -->
  </div>
</template>

<script setup>
import { defineProps, defineModel } from "vue";

// 定义传入的props
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  clearable: {
    type: Boolean,
    default: true
  }
});
const modelValue = defineModel("modelValue", {
  type: String,
  default: "",
});
// 添加清除方法
const handleClear = () => {
  modelValue.value = '';
};

</script>

<style scoped lang="scss">
.bw-input {
  display: flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  padding: 0 14px;
  background-color: #fff;
  color: theme("colors.basecolor");
  &:hover {
    border-color: theme("colors.themecolor/0.5");
  }
  &:focus-within {
    border-color: theme("colors.themecolor");
  }
}

.bw-input-field {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 8px;
  height: 100%;
  font-size: 16px;
  border-radius: inherit;
  background: transparent;
}

.bw-input input::placeholder {
  color: #aaa;
}

.bw-input .append {
  margin-left: 10px;
}
</style>

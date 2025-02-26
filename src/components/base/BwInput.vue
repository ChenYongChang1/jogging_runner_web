<!-- BwInput.vue -->
<template>
    <div class="bw-input">
      <input
        v-model="modelValue"
        :type="type"
        :placeholder="placeholder"
        class="bw-input-field"
      />
      <slot name="append"></slot> <!-- 用来插入自定义按钮 -->
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineModel } from 'vue';
  
  // 定义传入的props
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  });
  const modelValue = defineModel('modelValue', {
    type: String,
    default: '',
  });
  </script>
  
  <style scoped>
  .bw-input {
    display: flex;
    align-items: center;
    border: 2px solid #e5e7eb;
    border-radius: 20px;
    padding: 5px;
    background-color: #fff;
    color: #aaa;
  }
  
  .bw-input-field {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 8px;
    font-size: 14px;
    border-radius: 20px;
  }
  
  .bw-input input::placeholder {
    color: #aaa;
  }
  
  .bw-input .append {
    margin-left: 10px;
  }
  </style>
  
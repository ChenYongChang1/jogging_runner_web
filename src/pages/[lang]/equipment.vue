<template>
  <div class="equipment">
    <!-- pc 端 -->
    <div class="equipment-introduce-pc"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.equipment {
  .equipment-introduce-pc {
    background-image: url("@/assets/images/equipment-bg.png"); /* 路径根据实际文件位置修改 */
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 573px;
    transform: translateY(-93px);
  }
}
</style>

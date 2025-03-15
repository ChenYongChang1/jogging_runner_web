<template>
  <bw-input
    v-model="searchWorld"
    class="bw-search"
    :placeholder="$t('common.请输入您需要搜索的信息')"
    @keydown.enter="search"
  >
    <template #append>
      <BwButton :active="true" @click="search">
        <div class="tw-flex">
          <img
            class="tw-w-[16px] tw-mr-[4px]"
            src="@/assets/icon/Search.svg"
            :alt="$t('common.超慢跑')"
            loading="lazy"
          />
          <span> {{ $t("index.搜索") }}</span>
        </div></BwButton
      >
    </template>
  </bw-input>
</template>
<script setup lang="ts">
import { ref, defineModel } from 'vue'

const searchWorld = defineModel<string>('searchWorld');
const emit = defineEmits(['search'])

const search = () => {
  emit('search')
}


</script>
<style lang="scss" scoped>
.bw-search {
  @apply tw-h-[68px] tw-w-full;
}
</style>

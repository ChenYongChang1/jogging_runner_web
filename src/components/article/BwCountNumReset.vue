<template>
  <slot :computed-list="computedList"></slot>
</template>

<script lang="ts" setup>
import { resetStatistics } from "~/composables/api/home";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const resetNumber = ref({});
const computedList = computed(() => {
  return props.list.map((i) => ({
    ...i,
    visitNum: resetNumber.value[i.id] || i.visitNum,
  }));
});

const getResetNumber = async () => {
  const res = await resetStatistics(props.list.map((i) => i.id));
  resetNumber.value =  res
  
};
onMounted(() => {
  nextTick(() => {
    getResetNumber();
  });
});
// BwCountNumReset
</script>

<style lang="scss" scoped></style>

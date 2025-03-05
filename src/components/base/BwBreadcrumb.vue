<template>
  <div class="breadcrumb tw-flex tw-items-center tw-text-[16px]">
    <nuxt-link :to="getRouteLink('/')" class="home-link">
      <span class="tw-text-[#00B578]">{{ items[0]?.title || "超慢跑" }}</span>
    </nuxt-link>
    <span class="separator tw-mx-2 tw-text-[#00B578]">>></span>
    <template v-for="(item, index) in items" :key="index">
      <template v-if="index === items.length - 1">
        <span class="tw-text-[#999]">{{ item.title }}</span>
      </template>
      <template v-else>
        <nuxt-link
          :to="getRouteLink(item.path || '')"
          class="tw-text-[#00B578]"
          >{{ item.title }}</nuxt-link
        >
        <span class="separator tw-mx-2 tw-text-[#00B578]">>></span>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface BreadcrumbItem {
  title: string;
  path?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<style lang="scss" scoped>
.breadcrumb {
  @apply tw-mb-4;

  .home-link,
  a {
    &:hover {
      @apply tw-opacity-80;
    }
  }

  .separator {
    font-family: "Arial", sans-serif;
    font-weight: normal;
  }
}
</style>

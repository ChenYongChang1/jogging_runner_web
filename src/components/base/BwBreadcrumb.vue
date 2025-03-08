<template>
  <div class="breadcrumb tw-flex tw-flex-wrap tw-items-center tw-text-[16px]">
    <div class="tw-flex tw-items-center">
      <nuxt-link :to="getRouteLink('/')" class="home-link">
        <span class="tw-text-themecolor">{{ $t("common.超慢跑") }}</span>
      </nuxt-link>
      <span class="separator tw-mx-2 tw-text-themecolor">>></span>
      <template v-for="(item, index) in items.slice(0, -1)" :key="index">
        <nuxt-link
          :to="getRouteLink(item.path || '')"
          class="tw-text-themecolor"
          >{{ item.title }}</nuxt-link
        >
        <span class="separator tw-mx-2 tw-text-themecolor">>></span>
      </template>
    </div>

    <span v-if="items.length" class="last-item tw-text-[#999]">
      {{ items[items.length - 1].title }}
    </span>
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

  .last-item {
    @apply tw-w-full tw-mt-2;
    @screen md {
      @apply tw-w-auto tw-mt-0;
    }
  }
}
</style>

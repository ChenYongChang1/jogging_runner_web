<template>
  <div class="breadcrumb tw-flex tw-flex-wrap tw-items-center tw-text-[16px]">
    <div class="tw-leading-[32px]">
      <nuxt-link :to="getRouteLink('/')" class="home-link tw-flex-shrink-0">
        <span class="tw-text-themecolor">{{ $t("common.超慢跑") }}</span>
      </nuxt-link>
      <span class="separator tw-mx-2 tw-text-themecolor  tw-flex-shrink-0">>></span>
      <template v-for="(item, index) in items.slice(0, -1)" :key="index">
        <nuxt-link
          :to="getRouteLink(item.path || '')"
          class="tw-text-themecolor  tw-flex-shrink-0"
          >{{ item.title }}</nuxt-link
        >
        <span class="separator tw-mx-2 tw-text-themecolor  tw-flex-shrink-0">>></span>
      </template>
      <span v-if="items.length" class="last-item tw-text-[#999]  tw-flex-shrink-0 tw-text-wrap">
        {{ items[items.length - 1].title }}
      </span>
    </div>
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
    @apply tw-w-full;
    @screen md {
      @apply tw-w-auto tw-mt-0;
    }
  }
}
</style>

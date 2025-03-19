<template>
  <div>
    <nuxt-link
      class="tw-block tw-w-full tw-text-[20px] tw-font-[500] tw-leading-[32px] tw-text-text666 tw-mb-[12px] hover:tw-text-themecolor"
      :to="getRouteLink(`/post/${article.id}.html`)"
    >
      {{ article.title }}
    </nuxt-link>
    <div class="look-nums tw-flex tw-items-center">
      <img
        src="@/assets/icon/look.svg"
        class="tw-block tw-w-[18px] tw-mr-[8px]"
        :alt="$t('common.超慢跑')"
        loading="lazy"
      />
      <span class="tw-text-[14px] tw-font-[500] tw-text-text999"
        >{{  setVisitNum(article.visitNum) }}{{ $t('common.人看过') }}</span
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({ name: 'ArticleSmallRow' })
const props = defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
})
</script>

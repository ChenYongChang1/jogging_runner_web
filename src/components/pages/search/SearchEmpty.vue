<template>
  <div class="empty-text">
    {{
      $t(
        'common.很抱歉，没有找到与您搜索内容相关的结果。请确认您的关键词拼写是否正确，或者尝试更换关键词再次搜索'
      )
    }}
  </div>
  <img
    class="md:tw-w-[300px] ss:tw-w-[33%] max-lg:tw-mx-auto lg:tw-ml-[127px]"
    src="@/assets/images/empty-search.png"
    loading="lazy"
    alt="超慢跑"
  />
</template>
<style lang="scss" scoped>
.empty-text {
  @apply tw-w-full tw-leading-[55px]  tw-font-[600] md:tw-mb-[136px] tw-text-basecolor;
  @apply max-md:tw-leading-[2.5rem] max-md:tw-mb-[2.75rem] md:tw-text-[36px] ss:tw-text-[1.25rem];
}
</style>

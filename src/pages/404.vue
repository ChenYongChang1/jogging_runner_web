<template>
  <div class="page-error">
    <div
      class="page-404 tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-[120px]"
    >
      <img src="@/assets/images/404.png" alt="" />
      <bw-button
        type="border"
        class="tw-w-[140px] tw-mt-[48px] tw-text-center"
        :active="true"
        @click="goToHome"
      >
        <div class="tw-flex tw-justify-center">
          <span class="tw-mr-[6px]">{{ $t('404.返回首页') }}</span>
        </div>
      </bw-button>
    </div>
  </div>
</template>
<script setup>
const router = useRouter()

const goToHome = () => {
  const href = getRouteLink('/')
  navigateTo(href)
}
</script>

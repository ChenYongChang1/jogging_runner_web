<template>
  <Teleport to=".container">
    <div
      class="mobile-download tw-w-full tw-cursor-pointer tw-hidden max-sm:tw-block"
    >
      <img
        src="@/assets/images/app-open.png"
        class="tw-w-full"
        :alt="$t('common.超慢跑专用APP')"
        loading="lazy"
        @click="openOrDownloadApp"
      />
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
const isAppInstalled = ref(false)
const scheme = ref<string>('')
const downloadUrl = ref<string>('') // 下载软件地址
const props = defineProps({
  articleInfo: {
    type: Object,
    default: () => ({}),
  },
})

onMounted(async () => {
  if (isAndroid()) {
    scheme.value = `windjog://article?id=${props.articleInfo.id}&title=${props.articleInfo.title}&url=${location.href}`
    downloadUrl.value = 'https://chaomanpao.com/jogging/share.html'
  } else if (isIOS()) {
    scheme.value = `jogging://jogging.net/article?id=${props.articleInfo.id}&title=${props.articleInfo.title}&url=${location.href}`
    downloadUrl.value =
      'https://apps.apple.com/app/apple-store/id6502583295?pt=126570476&ct=webtoapp&mt=8'
  }
  // 使用新的异步函数来检查应用是否已安装
  // isAppInstalled.value = await checkAppInstalled(scheme.value);
})

const openOrDownloadApp = () => {
  // const input = document.createElement("input");
  // input.focus();
  // location.href = scheme.value;
  // const t = setTimeout(() => {
  //   console.log("准备下载");

  //   location.href = downloadUrl.value;
  // }, 500);
  // addEventListener("hide", () => {
  //   console.log("hide");

  //   clearTimeout(t);
  // });
  if (isIOS()) {
    var loadDateTime = new Date().getTime()
    setTimeout(function () {
      var timeOutDateTime = new Date().getTime()
      if (timeOutDateTime - loadDateTime < 5000) {
        location.href = downloadUrl.value
      } else {
        close()
      }
    }, 25)
    location.href = scheme.value
  } else if (isAndroid()) {
    var loadDateTime = new Date().getTime()
    var state = open(scheme.value, '_blank')
    setTimeout(function () {
      var timeOutDateTime = new Date().getTime()
      if (timeOutDateTime - loadDateTime < 5000) {
        location.href = downloadUrl.value
      } else {
        close()
      }
    }, 25)
  }

  // ? scheme.value
  // : downloadUrl.value;
  // input.onblur = () => {
  //   console.log('blur');

  //   // location.href = downloadUrl.value;
  // };
}
</script>
<style lang="scss">
.mobile-download {
  position: sticky;
  bottom: 0;
  z-index: 9;
}
</style>

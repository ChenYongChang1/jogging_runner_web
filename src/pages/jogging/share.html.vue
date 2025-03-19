<template>
  <img
    src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/34/9f/46/349f4688-e5a3-8a0e-99b0-d8f96c5cf653/AppIcon-0-0-1x_U007epad-0-0-0-85-220.png/460x0w.webp"
    style="visibility: hidden; height: 0; width: 0"
  />
  <div class="background" id="c1">
    <div v-if="loading" class="weixin-tip">
      <p>
        <img id="nt" src="@/assets/images/live_weixin.webp" />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loading = ref(false);
onMounted(() => {
  var ua = navigator.userAgent.toLowerCase();
  var isApple = /iphone|ipod|ipad|mac/.test(ua);
  var isAndroid = /android/.test(ua);
  var skipUrl;
  function detectPlatform() {
    if (isApple) {
      skipUrl =
        "https://apps.apple.com/app/apple-store/id6502583295?pt=126570476&ct=webtoapp&mt=8";
    }
    if (isAndroid) {
      skipUrl =
        "https://play.google.com/store/apps/details?id=fasting.healthtracker.intermittent.foodtracker";
    }
    if (!(isApple || isAndroid)) {
      skipUrl =
        "https://apps.apple.com/app/apple-store/id6502583295?pt=126570476&ct=webtoapp&mt=8";
    }
  }
  function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
  function startTask() {
    setTimeout(function () {
      if (is_weixin()) {
        // $(".weixin-tip").css("height", winHeight);
        // $(".weixin-tip").show();
        loading.value = true;
      }
    }, 5000);
  }

  var isWeixin = is_weixin();
  detectPlatform();
  startTask();
  window.location.href = skipUrl;
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}
.weixin-tip {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100%;
  z-index: 100;
}
.weixin-tip p {
  text-align: center;
  margin-top: 10%;
  padding: 0 5%;
}
body {
  margin: 0;
  padding: 0;
}
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("");
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.button-container {
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
}
.open-app-button {
  width: 220px;
  height: 50px;
  background-image: url("");
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  overflow: hidden;
}
</style>

<template>
  <header
    class="layout-header tw-bg-white tw-shadow-sm border-b-1"
    :style="{
      borderBottomColor: isEquipment ? '#424242' : '#F7F7F7',
    }"
  >
    <div class="container-custom tw-px-4 md:tw-px-6">
      <!-- 头部主体内容 -->
      <div
        class="tw-flex tw-items-center tw-justify-between tw-py-3 md:tw-py-4 tw-w-full"
      >
        <!-- Logo部分 -->
        <div
          class="tw-flex tw-items-center tw-space-x-2 md:tw-space-x-3 tw-cursor-pointer"
          @click="goHome"
        >
          <img
            src="~/assets/images/logo.png"
            loading="lazy"
            :alt="$t('common.超慢跑')"
            class="tw-w-[48px]"
          />
          <div>
            <div
              class="tw-text-[20px] lg:tw-text-[24px] tw-text-[#3EDB30] tw-text-green-500 dd-runner-font"
            >
              {{ $t("common.超慢跑节拍器") }}
            </div>
            <div
              class="tw-text-xs md:tw-text-sm tw-text-[#ccc] tw-text-gray-500"
              :class="{ 'tw-text-[white]': isEquipment }"
            >
              chaomanpao.com
            </div>
          </div>
        </div>

        <!-- PC端导航 (sm及以上屏幕显示) -->
        <nav class="tw-hidden md:tw-flex tw-items-center tw-space-x-6">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.path"
            :to="getRouteLink(item.path)"
            :class="[
              'navBtn',
              isEquipment ? 'navBtn-equipment' : '',
              { active: currentPath === getRouteLink(item.path) },
            ]"
          >
            {{ item.name }}
          </nuxt-link>

          <!-- 语言切换下拉菜单 -->
          <el-dropdown
            size="large"
            popper-class="language-dropdown"
            @command="changeLanguage"
          >
            <el-button
              type="primary"
              round
              class="languageBtn tw-flex tw-items-center tw-text-sm"
            >
              {{ languageName
              }}<el-icon class="el-icon--right"
                ><img
                  loading="lazy"
                  src="@/assets/icon/ArrowDown.svg"
                  :alt="$t('common.超慢跑')"
              /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in languageList"
                  :key="item.value"
                  :command="item.value"
                  >{{ $t(item.label) }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </nav>

        <!-- 移动端菜单按钮 (sm以下屏幕显示) -->
        <div
          class="tw-flex md:tw-hidden tw-items-center tw-justify-center tw-w-[99px] tw-h-[44px] tw-top-[69px] tw-left-[260px] tw-rounded-[14px] tw-border-[1.5px] tw-text-[#4a4a4a] tw-border-[#E5E7EB] tw-pt-[10px] tw-pr-[16px] tw-pb-[10px] tw-pl-[16px] tw-gap-[10px]"
          @click="isMenuOpen = !isMenuOpen"
        >
          <img
            v-if="!isEquipment"
            src="~/assets/images/morebtn.png"
            :alt="$t('common.超慢跑')"
            loading="lazy"
            class="tw-w-[18px] tw-h-[18px]"
          />
          <img
            v-else
            src="~/assets/images/morebtn-black.png"
            :alt="$t('common.超慢跑')"
            loading="lazy"
            class="tw-w-[18px] tw-h-[18px]"
          />
          <span
            class="tw-text-base"
            :style="{ color: isEquipment ? '#fff' : '#4a4a4a' }"
            >{{ $t("common.更多") }}</span
          >
        </div>
      </div>

      <!-- 移动端下拉菜单 (sm以下屏幕显示) -->
      <!-- 移动端抽屉菜单 -->
      <el-drawer
        v-model="isMenuOpen"
        direction="ltr"
        size="auto"
        :with-header="false"
        class="mobile-menu-drawer"
      >
        <div class="tw-py-4">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.path"
            :to="getRouteLink(item.path)"
            :class="[
              'navBtn-h5',
              isEquipment ? 'navBtn-equipment' : '',
              { active: currentPath === getRouteLink(item.path) },
            ]"
            class="tw-block tw-py-3 tw-px-4 tw-text-gray-500 hover:tw-bg-green-50 hover:tw-text-green-600 active:tw-bg-green-100 active:tw-text-green-700"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </nuxt-link>

          <!-- 移动端语言切换 -->
          <el-dropdown
            popper-class="language-dropdown"
            class="language-dropdown tw-block tw-px-4 tw-py-3"
            @command="changeLanguage"
          >
            <el-button
              type="primary"
              text
              size="small"
              class="languageBtn-h5 tw-w-full tw-justify-between tw-items-center"
            >
              {{ languageName }}
              <el-icon
                ><img
                  loading="lazy"
                  src="@/assets/icon/ArrowDown.svg"
                  :alt="$t('common.超慢跑')"
              /></el-icon>
            </el-button>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in languageList"
                  :key="item.value"
                  :command="item.value"
                  >{{ $t(item.label) }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-drawer>
    </div>
  </header>
</template>
<script setup>
const { $i18n: i18n } = useNuxtApp();
const $t = (...args) => i18n.t(...args);
const switchLocalePath = useSwitchLocalePath();
import { languageList } from "~/assets/js/const";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isEquipment = computed(() => {
  return route.name.includes("equipment");
});
const isMenuOpen = ref(false);

const menuItems = computed(() => [
  { name: $t("common.首页"), path: "/" },
  { name: $t("common.超慢跑节拍器180下载"), path: "/download" },
  { name: $t("common.必备装备"), path: "/equipment" },
]);

const language = computed(() => i18n.locale.value);
const currentPath = computed(() => route.path);
const languageName = computed(() => {
  const languageRow =
    languageList.find((item) => item.value === language.value) ||
    languageList[0];
  return $t(languageRow?.label);
});
const changeLanguage = (str) => {
  navigateTo(switchLocalePath(str));
};
const goHome = () => {
  navigateTo(getRouteLink("/"));
};
</script>
<style lang="scss" scoped>
.layout-header {
  border-bottom: 1px solid #424242;
  z-index: 100;
  .navBtn {
    border-radius: 14px;
    border-width: 1.5px;
    padding: 10px 16px;
    gap: 10px;
    border: 1.5px solid #e5e7eb;
    color: #4a4a4a;
    &:hover,
    &:active,
    &.active {
      background-color: #61cd57;
      border-color: #61cd57;
      color: #fff;
    }
    &-h5 {
      border: none;
      background-color: #fff;
      &:hover,
      &:active,
      &.active {
        color: #61cd57;
      }
    }
  }
  .navBtn-equipment {
    color: #fff;
  }
  .navBtn-h5 {
    color: #4a4a4a;
  }
}
</style>
<style lang="scss">
.layout-header {
  .el-dropdown {
    .languageBtn {
      padding: 22px 16px;
      background: #61cd57;
      border-color: #61cd57;

      &:hover {
        background: #61cd57;
        border-color: #61cd57;
      }
      &-h5 {
        background: #61cd57;
        border-color: #61cd57;
        &:hover {
          background: #61cd57;
          color: #fff;
        }
        color: #fff;
      }
    }
  }
}
.language-dropdown {
  .el-dropdown-menu__item {
    &:hover {
      background-color: #61cd57 !important;
      color: #fff !important;
    }
  }
}
.mobile-menu-drawer {
  .el-drawer__body {
    padding: 0;
  }
}
</style>

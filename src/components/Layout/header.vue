<template>
  <header
    class="layout-header tw-bg-white tw-shadow-sm border-b-1"
    :style="{
      backgroundColor: isEquipment
        ? 'transparent'
        : 'rgba(248, 255, 248, 0.44)',
    }"
  >
    <div class="container-custom tw-px-4 md:tw-px-6">
      <!-- 头部主体内容 -->
      <div
        class="tw-flex tw-items-center tw-justify-between tw-py-3 md:tw-py-4 tw-w-full"
      >
        <!-- Logo部分 -->
        <div class="tw-flex tw-items-center tw-space-x-2 md:tw-space-x-3">
          <img
            src="~/assets/images/logo.png"
            alt="Logo"
            class="tw-w-8 tw-h-8 md:tw-w-10 sm·:tw-h-10"
          />
          <div>
            <h1
              class="tw-text-base md:tw-text-lg tw-text-[#3EDB30] tw-font-bold tw-text-green-500"
            >
              超慢跑节拍器
            </h1>
            <div
              class="tw-text-xs md:tw-text-sm tw-text-[#ccc] tw-text-gray-500"
            >
              chaomanpao.com
            </div>
          </div>
        </div>

        <!-- PC端导航 (sm及以上屏幕显示) -->
        <nav class="tw-hidden md:tw-flex tw-items-center tw-space-x-6">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            :class="['navBtn', isEquipment ? 'navBtn-equipment' : '']"
          >
            {{ item.name }}
          </router-link>

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
              {{ language
              }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in languageList"
                  :key="item.value"
                  :command="item.value"
                  >{{ item.label }}</el-dropdown-item
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
            src="~/assets/images/morebtn.png"
            alt="menu"
            class="tw-w-[18px] tw-h-[18px]"
          />
          <span class="tw-text-base">更多</span>
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
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            :class="['navBtn-h5', isEquipment ? 'navBtn-equipment' : '']"
            class="tw-block tw-py-3 tw-px-4 tw-text-gray-500 hover:tw-bg-green-50 hover:tw-text-green-600 active:tw-bg-green-100 active:tw-text-green-700"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <!-- 移动端语言切换 -->
          <el-dropdown
            popper-class="language-dropdown"
            class="language-dropdown tw-block tw-px-4 tw-py-3"
          >
            <el-button
              type="primary"
              text
              size="small"
              class="languageBtn-h5 tw-w-full tw-justify-between tw-items-center"
            >
              {{ language }} <el-icon><ArrowDown /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in languageList"
                  :key="item.value"
                  :command="item.value"
                  >{{ item.label }}</el-dropdown-item
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
import { ref, computed } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isEquipment = computed(() => {
  return route.name.includes("equipment");
});
const isMenuOpen = ref(false);

const menuItems = [
  { name: "首页", path: "/" },
  { name: "超慢跑节拍器180下载", path: "/download" },
  { name: "必备装备", path: "/essentialEquipment" },
];
const language = ref("中文");
const languageList = [
  { label: "中文", value: "en" },
  { label: "繁文", value: "tw" },
];
const changeLanguage = (str) => {
  language.value = languageList.find((item) => item.value === str)?.label;
};
</script>
<style lang="scss" scoped>
.layout-header {
  z-index: 100;
  .navBtn {
    border-radius: 14px;
    border-width: 1.5px;
    padding: 10px 16px;
    gap: 10px;
    border: 1.5px solid #e5e7eb;
    color: #4a4a4a;
    &:hover,
    &:active {
      background-color: #61cd57;
      border-color: #61cd57;
      color: #fff;
    }
    &-h5 {
      border: none;
      background-color: #fff;
      &:hover,
      &:active {
        color: #61cd57;
      }
    }
  }
  .navBtn-equipment {
    color: #fff;
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

export default defineNuxtRouteMiddleware(() => {
  // 获取当前的语言，假设你使用了 Nuxt I18n 模块来管理语言
  const { $i18n: i18n } = useNuxtApp();
  const currentLang = i18n.locale.value; // 获取当前语言

  // 更新 <html> 标签的 lang 属性
  if (import.meta.client) {
    document.documentElement.lang = currentLang;
  }
});

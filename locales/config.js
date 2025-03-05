import zh from "./module/zh-cn";
console.log(zh, "zh");
const result = defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  fallbackLocale: "zh", // 区配不到的语言就用en
  locale: 'zh',
  messages: {
    zh: zh,
    zht: zh,
    en: zh,
  },
}));
console.log(result());
export default result;

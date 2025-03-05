import zh from "./module/zh-cn";
const result = defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  fallbackLocale: "zh", // 区配不到的语言就用en
  messages: {
    zh: zh,
    zht: zh,
  },
}));
export default result;

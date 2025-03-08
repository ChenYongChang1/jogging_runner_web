import zh from "./module/zh-cn";
import zhtAuto from "./auto-translate/zh-tw";
import zht from "./module/zh-tw";
const mergeLanguage = (o, o2) => {
  const obj = { ...o, ...o2 };
  for (const i in obj) {
    if (typeof obj[i] === "string") {
      obj[i] = o[i] || o2[i];
    } else {
      for (const j in obj[i]) {
        obj[i][j] = o[i]?.[j] || o2[i]?.[j];
      }
    }
  }
  return obj
};
const result = defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  fallbackLocale: "zh", // 区配不到的语言就用en
  messages: {
    zh: zh,
    zht: mergeLanguage(zht, zhtAuto),
  },
}));
export default result;

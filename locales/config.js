import zh from "./module/zh-cn";
import tw from "./module/tw-cn";
import { ref } from 'vue';

const currentLocale = ref('zh');

const result = defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "zh",
  locale: currentLocale.value,
  messages: {
    zh: zh,
    zht: tw,
    en: zh,
  },
}));
console.log(result(), "result");
export const setLocale = (newLocale) => {
  currentLocale.value = newLocale;
};

export default result;
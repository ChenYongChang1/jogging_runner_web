import { languageList } from "~/assets/js/const";

export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated()是一个验证用户是否已经认证的示例方法
    const router = useRouter();
    if (!to.matched?.length) {
      return navigateTo("/404");
    }
    const lang = to.params.lang?.toString();
    const keyLanguage = languageList.map((i) => i.value);
    if (lang && !keyLanguage.includes(lang)) {
      return navigateTo("/404");
    }
});

export const genrePageLink = () => {
  const { $i18n: i18n } = useNuxtApp();
  const route = useRoute();
  
  const localePath = useLocalePath();
  const map: { [k in "zh" | "zht"]: "zh" | "zht" } = { zht: "zh", zh: "zht" };
  const targetLang = map[i18n.locale.value];
  // const targetHref = location.href.replace
  return [
    { rel: "canonical", href: route.fullPath },
    {
      rel: "alternate",
      hreflang: targetLang,
      href: localePath(route.fullPath, targetLang),
    },
  ];
};

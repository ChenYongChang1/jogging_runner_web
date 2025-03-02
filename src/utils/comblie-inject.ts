import { navigateTo } from "nuxt/app";

export const getRouteLink = (link: string) => {
  return link;
};

export const searchPush = (world?: string) => {
  if (world) {
    const searchWorld = encodeURIComponent(world);
    navigateTo(`/search?kw=${searchWorld}`);
    return;
  }
  navigateTo(`/search`);
};

export const getWatchQueryFunc = (queryKey: string[], call: () => any) => {
  const route = useRoute();
  const keys = () => queryKey.map((i) => route.query[i]);
  watch(keys, call);
  return call;
};

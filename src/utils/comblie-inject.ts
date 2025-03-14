import { navigateTo } from "nuxt/app";

export const getRouteLink = (link: string) => {
  const localePath = useLocalePath();

  return localePath(link);
};

export const searchPush = (world?: string) => {
  if (world && world.trim()) {
    const searchWorld = encodeURIComponent(world);
    navigateTo(getRouteLink(`/search?kw=${searchWorld}`));
    // return;
  }
  // navigateTo(getRouteLink(`/search`));
};

export const getWatchQueryFunc = (queryKey: string[], call: () => any) => {
  const route = useRoute();
  const keys = () => queryKey.map((i) => route.query[i]);
  watch(keys, call);
  return call;
};

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


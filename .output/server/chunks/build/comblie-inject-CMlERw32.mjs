import { watch } from 'vue';
import { L as useLocalePath, M as useRoute, n as navigateTo } from './server.mjs';

const getRouteLink = (link) => {
  const localePath = useLocalePath();
  return localePath(link);
};
const searchPush = (world) => {
  if (world) {
    const searchWorld = encodeURIComponent(world);
    navigateTo(getRouteLink(`/search?kw=${searchWorld}`));
    return;
  }
  navigateTo(getRouteLink(`/search`));
};
const getWatchQueryFunc = (queryKey, call) => {
  const route = useRoute();
  const keys = () => queryKey.map((i) => route.query[i]);
  watch(keys, call);
  return call;
};

export { getWatchQueryFunc as a, getRouteLink as g, searchPush as s };
//# sourceMappingURL=comblie-inject-CMlERw32.mjs.map

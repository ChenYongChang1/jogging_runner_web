import { watch } from 'vue';
import { n as navigateTo, f as useRoute } from './server.mjs';

const getRouteLink = (link) => {
  return link;
};
const searchPush = (world) => {
  if (world) {
    const searchWorld = encodeURIComponent(world);
    navigateTo(`/search?kw=${searchWorld}`);
    return;
  }
  navigateTo(`/search`);
};
const getWatchQueryFunc = (queryKey, call) => {
  const route = useRoute();
  const keys = () => queryKey.map((i) => route.query[i]);
  watch(keys, call);
  return call;
};

export { getWatchQueryFunc as a, getRouteLink as g, searchPush as s };
//# sourceMappingURL=comblie-inject-CDusoPZj.mjs.map

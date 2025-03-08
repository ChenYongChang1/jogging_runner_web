import { S as SearchEmpty, _ as __nuxt_component_1, a as _sfc_main$1 } from './SearchEmpty-CRFU3cGd.mjs';
import { d as __nuxt_component_2 } from './to-right-Ds3GYEKb.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData, g as getSearchInfo } from './home-CsjBWASq.mjs';
import { _ as _export_sfc, M as useRoute, u as useRouter, n as navigateTo } from './server.mjs';
import { a as getWatchQueryFunc } from './comblie-inject-CMlERw32.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './BwButton-CqxsMVYs.mjs';
import './nuxt-link-DWUyQGev.mjs';
import './el-popper-CY7jS90x.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const route = useRoute();
    useRouter();
    const searchWorld = ref(((_a = route.query.kw) == null ? void 0 : _a.toString()) || "");
    const currentPage = ref(Number(((_b = route.query.png) == null ? void 0 : _b.toString()) || 1));
    const pageCount = ref(0);
    const tableList = ref([]);
    const categoriesList = ref([]);
    const lastsList = ref([]);
    const handleCurrentChange = () => {
      navigateTo({
        query: {
          kw: encodeURIComponent(searchWorld.value),
          png: currentPage.value
        }
      });
    };
    const getSearchList = async () => {
      const result = await getSearchInfo({
        page: currentPage.value || 1,
        keyword: searchWorld.value || ""
      });
      const { totalPage, page, list, lasts, categories } = result;
      currentPage.value = page || 1;
      pageCount.value = totalPage;
      tableList.value = list;
      lastsList.value = lasts;
      categoriesList.value = categories;
    };
    const search = getWatchQueryFunc(["kw", "png"], getSearchList);
    useAsyncData("search", search);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_article_card = __nuxt_component_1;
      const _component_BwPagination = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dd-container" }, _attrs))} data-v-3a7f16d1><div class="search-box lg:tw-flex xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]" data-v-3a7f16d1><div class="search-content" data-v-3a7f16d1>`);
      if (!unref(tableList).length) {
        _push(ssrRenderComponent(SearchEmpty, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(tableList), (item) => {
        _push(ssrRenderComponent(_component_bw_article_card, {
          key: `article-${item.id}`,
          article: item,
          class: "card-row-item"
        }, null, _parent));
      });
      _push(`<!--]--><div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]" data-v-3a7f16d1>`);
      _push(ssrRenderComponent(_component_BwPagination, {
        "current-page": unref(currentPage),
        "onUpdate:currentPage": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        "page-count": unref(pageCount),
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div></div><div class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px]" data-v-3a7f16d1>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        searchWorld: unref(searchWorld),
        "onUpdate:searchWorld": ($event) => isRef(searchWorld) ? searchWorld.value = $event : null,
        categoriesList: unref(categoriesList),
        lastsList: unref(lastsList)
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __VUE_DEFAULT__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a7f16d1"]]);

export { __VUE_DEFAULT__ as default };
//# sourceMappingURL=search-CMTgCMEh.mjs.map

import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DWUyQGev.mjs';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';
import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, M as useRoute } from './server.mjs';
import { _ as __nuxt_component_1 } from './BwListMain-D2pmfD1D.mjs';
import { _ as _sfc_main$3 } from './ArticleSearchContent-D-BylJSx.mjs';
import { u as useAsyncData, b as getArticleInfo } from './home-CsjBWASq.mjs';
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
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'vue-router';
import './to-right-BrlbmEDM.mjs';
import './BwButton-COfJsUQ6.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BwBreadcrumb",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumb tw-flex tw-flex-wrap tw-items-center tw-text-[16px]" }, _attrs))} data-v-aeaaa2ac><div class="tw-leading-[32px]" data-v-aeaaa2ac>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))("/"),
        class: "home-link tw-flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="tw-text-themecolor" data-v-aeaaa2ac${_scopeId}>${ssrInterpolate(_ctx.$t("common.\u8D85\u6162\u8DD1"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "tw-text-themecolor" }, toDisplayString(_ctx.$t("common.\u8D85\u6162\u8DD1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="separator tw-mx-2 tw-text-themecolor tw-flex-shrink-0" data-v-aeaaa2ac>&gt;&gt;</span><!--[-->`);
      ssrRenderList(_ctx.items.slice(0, -1), (item, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))(item.path || ""),
          class: "tw-text-themecolor tw-flex-shrink-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span class="separator tw-mx-2 tw-text-themecolor tw-flex-shrink-0" data-v-aeaaa2ac>&gt;&gt;</span><!--]-->`);
      });
      _push(`<!--]-->`);
      if (_ctx.items.length) {
        _push(`<span class="last-item tw-text-[#999] tw-flex-shrink-0 tw-text-wrap" data-v-aeaaa2ac>${ssrInterpolate(_ctx.items[_ctx.items.length - 1].title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwBreadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-aeaaa2ac"]]);
const _imports_0 = "" + buildAssetsURL("app-open.DnuSbTvk.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDownload",
  __ssrInlineRender: true,
  props: {
    articleInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    ref(false);
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="mobile-download tw-w-full tw-cursor-pointer tw-hidden max-sm:tw-block"><img${ssrRenderAttr("src", _imports_0)} class="tw-w-full" alt=""></div>`);
      }, ".container", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/info/AppDownload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id].html",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const articleInfo = ref({});
    const showDownload = ref(false);
    const categoriesList = ref([]);
    const lastsList = ref([]);
    const getArticleInfoById = async () => {
      articleInfo.value = await getArticleInfo(id);
      categoriesList.value = articleInfo.value.categories || [];
      lastsList.value = articleInfo.value.lasts || [];
    };
    useAsyncData("getArticleInfoById", getArticleInfoById);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_bw_breadcrumb = __nuxt_component_0;
      const _component_bw_list_main = __nuxt_component_1;
      const _component_article_search_content = _sfc_main$3;
      _push(`<!--[--><div class="dd-container lg:tw-flex" data-v-a6d23dea><div class="detail-content xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]" data-v-a6d23dea>`);
      _push(ssrRenderComponent(_component_bw_breadcrumb, {
        items: [
          {
            title: unref(articleInfo).categoryName,
            path: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))(`/tag/${encodeURIComponent(unref(articleInfo).alias)}`)
          },
          {
            title: unref(articleInfo).title
          }
        ]
      }, null, _parent));
      _push(`<h1 data-v-a6d23dea>${ssrInterpolate(unref(articleInfo).title)}</h1><div data-v-a6d23dea>${(_a = unref(articleInfo).content) != null ? _a : ""}</div><div class="more-read tw-mt-[64px] max-md:tw-mt-[44px]" data-v-a6d23dea><div class="more-read-title dd-fs-36 tw-font-[600] max-md:tw-mb-[22px] tw-mb-[35px]" data-v-a6d23dea>\u66F4\u591A\u9605\u8BFB</div><div class="bw-list-main tw-flex tw-flex-wrap tw-justify-between" data-v-a6d23dea>`);
      _push(ssrRenderComponent(_component_bw_list_main, {
        ref: "homeBwListRef",
        tableList: unref(articleInfo).recommends
      }, null, _parent));
      _push(`</div></div></div><div class="lg:tw-w-[33.9%] xl:tw-pl-[52px] lg:tw-pl-[30px]" data-v-a6d23dea>`);
      _push(ssrRenderComponent(_component_article_search_content, {
        categoriesList: unref(categoriesList),
        lastsList: unref(lastsList)
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(showDownload)) {
        _push(ssrRenderComponent(_sfc_main$1, { "article-info": unref(articleInfo) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __VUE_DEFAULT__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6d23dea"]]);

export { __VUE_DEFAULT__ as default };
//# sourceMappingURL=_id_.html-QvODcWUj.mjs.map

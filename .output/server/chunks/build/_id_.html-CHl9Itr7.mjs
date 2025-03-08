import { _ as __nuxt_component_0 } from './BwBreadcrumb-fPqlaxRx.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, b as getArticleInfo } from './home-CsjBWASq.mjs';
import { M as useRoute } from './server.mjs';
import './nuxt-link-DWUyQGev.mjs';
import './comblie-inject-CMlERw32.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id].html",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const articleInfo = ref({});
    const getArticleInfoById = async () => {
      articleInfo.value = await getArticleInfo(id);
    };
    useAsyncData("getArticleInfoById", getArticleInfoById);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_bw_breadcrumb = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dd-container" }, _attrs))}><div class="xl:tw-pt-[56px] lg:tw-pt-[44px] ss:tw-pt-[32px]">`);
      _push(ssrRenderComponent(_component_bw_breadcrumb, {
        items: [
          {
            title: unref(articleInfo).categoryName,
            path: `/tag/${encodeURIComponent(unref(articleInfo).alias)}`
          },
          {
            title: unref(articleInfo).title
          }
        ]
      }, null, _parent));
      _push(`<h1>${ssrInterpolate(unref(articleInfo).title)}</h1><div>${(_a = unref(articleInfo).content) != null ? _a : ""}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.html-CHl9Itr7.mjs.map

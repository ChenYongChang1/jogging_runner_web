import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './BwButton-CqxsMVYs.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRouter, n as navigateTo } from './server.mjs';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';
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

const _imports_0 = "" + buildAssetsURL("404.7iOGw32G.png");
const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const goToHome = () => {
      const href = getRouteLink("/");
      navigateTo(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-error" }, _attrs))}><div class="page-404 tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-[120px]"><img${ssrRenderAttr("src", _imports_0)} alt="">`);
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: "tw-w-[140px] tw-mt-[48px] tw-text-center",
        active: true,
        onClick: goToHome
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-flex tw-justify-center"${_scopeId}><span class="tw-mr-[6px]"${_scopeId}>${ssrInterpolate(_ctx.$t("404.\u8FD4\u56DE\u9996\u9875"))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-flex tw-justify-center" }, [
                createVNode("span", { class: "tw-mr-[6px]" }, toDisplayString(_ctx.$t("404.\u8FD4\u56DE\u9996\u9875")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=404-B3Z0NGoJ.mjs.map

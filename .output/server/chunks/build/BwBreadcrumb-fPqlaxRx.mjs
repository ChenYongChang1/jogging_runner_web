import { _ as __nuxt_component_0$1 } from './nuxt-link-DWUyQGev.mjs';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BwBreadcrumb",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumb tw-flex tw-flex-wrap tw-items-center tw-text-[16px]" }, _attrs))} data-v-61aa42c4><div class="tw-flex tw-items-center" data-v-61aa42c4>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))("/"),
        class: "home-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<span class="tw-text-[#00B578]" data-v-61aa42c4${_scopeId}>${ssrInterpolate(((_a = _ctx.items[0]) == null ? void 0 : _a.title) || _ctx.$t("common.\u8D85\u6162\u8DD1"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "tw-text-[#00B578]" }, toDisplayString(((_b = _ctx.items[0]) == null ? void 0 : _b.title) || _ctx.$t("common.\u8D85\u6162\u8DD1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="separator tw-mx-2 tw-text-[#00B578]" data-v-61aa42c4>&gt;&gt;</span><!--[-->`);
      ssrRenderList(_ctx.items.slice(0, -1), (item, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))(item.path || ""),
          class: "tw-text-[#00B578]"
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
        _push(`<span class="separator tw-mx-2 tw-text-[#00B578]" data-v-61aa42c4>&gt;&gt;</span><!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (_ctx.items.length) {
        _push(`<span class="last-item tw-text-[#999]" data-v-61aa42c4>${ssrInterpolate(_ctx.items[_ctx.items.length - 1].title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61aa42c4"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BwBreadcrumb-fPqlaxRx.mjs.map

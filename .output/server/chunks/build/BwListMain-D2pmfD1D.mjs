import { a as __nuxt_component_0, b as _imports_0, c as _imports_1 } from './to-right-BrlbmEDM.mjs';
import { B as BwButton } from './BwButton-COfJsUQ6.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';
import { _ as _export_sfc, n as navigateTo } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BwListMain",
  __ssrInlineRender: true,
  props: {
    tableList: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const linkToInfo = (item) => {
      const href = getRouteLink(`/post/${item.id}.html`);
      navigateTo(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BwMedia = __nuxt_component_0;
      const _component_bw_button = BwButton;
      _push(`<!--[-->`);
      ssrRenderList(__props.tableList, (item, index) => {
        _push(`<div class="bw-list-item tw-w-full sm:tw-w-[48%] lg:tw-w-[29.3%] tw-px-[16px] tw-pt-[16px] tw-pb-[22px]" data-v-174c1903><div class="bw-list-item-img tw-mb-[20px] tw-rounded-[26px] tw-w-[100%] tw-overflow-hidden" data-v-174c1903>`);
        _push(ssrRenderComponent(_component_BwMedia, {
          class: "tw-rounded-[26px] tw-w-[100%]",
          src: item.cover,
          type: item.isVideo === 1 ? "image" : "video"
        }, null, _parent));
        _push(`</div><div class="bw-list-item-title" data-v-174c1903>${ssrInterpolate(item.title)}</div><div class="bw-list-item-content" data-v-174c1903>${ssrInterpolate(item.desc)}</div><div class="look-nums tw-flex tw-mt-[10px]" data-v-174c1903><img${ssrRenderAttr("src", _imports_0)} class="tw-w-[18px] tw-mr-[8px]" loading="lazy" alt="" data-v-174c1903><span class="tw-text-[14px] tw-font-[500] tw-text-text999" data-v-174c1903>${ssrInterpolate(item.visitNum)}${ssrInterpolate(_ctx.$t("common.\u4E07\u4EBA\u770B\u8FC7"))}</span></div><div class="tw-flex tw-justify-end" data-v-174c1903>`);
        _push(ssrRenderComponent(_component_bw_button, {
          type: "border",
          class: "tw-w-[141px] tw-text-center tw-h-[46px] tw-pl-[22px] tw-pr-[13px]",
          onClick: ($event) => linkToInfo(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="tw-flex tw-justify-center tw-h-[46px]" data-v-174c1903${_scopeId}><span class="tw-mr-[6px] tw-leading-[46px]" data-v-174c1903${_scopeId}>${ssrInterpolate(_ctx.$t("common.\u9605\u8BFB\u5168\u6587"))}</span><img${ssrRenderAttr("src", _imports_1)} loading="lazy" class="tw-w-[18px]" alt="" data-v-174c1903${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "tw-flex tw-justify-center tw-h-[46px]" }, [
                  createVNode("span", { class: "tw-mr-[6px] tw-leading-[46px]" }, toDisplayString(_ctx.$t("common.\u9605\u8BFB\u5168\u6587")), 1),
                  createVNode("img", {
                    src: _imports_1,
                    loading: "lazy",
                    class: "tw-w-[18px]",
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwListMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-174c1903"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BwListMain-D2pmfD1D.mjs.map

import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as __nuxt_component_0$1, b as _imports_0$1, c as _imports_1 } from './to-right-BrlbmEDM.mjs';
import { B as BwButton } from './BwButton-COfJsUQ6.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRouter, n as navigateTo } from './server.mjs';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "BwArticleCard" },
  __name: "BwArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const linkToInfo = () => {
      const href = getRouteLink(`/post/${props.article.id}.html`);
      navigateTo(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_media = __nuxt_component_0$1;
      const _component_bw_button = BwButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-row" }, _attrs))} data-v-3568d7ec><div class="card-title dd-title-text" data-v-3568d7ec>${ssrInterpolate(__props.article.title)}</div>`);
      _push(ssrRenderComponent(_component_bw_media, {
        class: "tw-mb-[22px]",
        src: __props.article.cover,
        type: "image"
      }, null, _parent));
      _push(`<div class="sub-text tw-mb-[10px]" data-v-3568d7ec>${ssrInterpolate(__props.article.desc || "")}</div><div class="look-views lg:tw-flex tw-justify-between tw-items-center tw-flex-wrap ss:tw-mb-[1.125rem]" data-v-3568d7ec><div class="look-nums tw-flex max-lg:tw-mb-[1.125rem]" data-v-3568d7ec><img${ssrRenderAttr("src", _imports_0$1)} class="tw-w-[18px] tw-mr-[8px]" alt="" data-v-3568d7ec><span class="tw-text-[14px] tw-font-[500] tw-text-text999" data-v-3568d7ec>${ssrInterpolate(__props.article.visitNum || 0)}${ssrInterpolate(_ctx.$t("common.\u4EBA\u770B\u8FC7"))}</span></div>`);
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: "ss:tw-mx-auto lg:tw-mx-0 tw-w-fit",
        onClick: linkToInfo
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-flex" data-v-3568d7ec${_scopeId}><span class="tw-mr-[6px]" data-v-3568d7ec${_scopeId}>${ssrInterpolate(_ctx.$t("common.\u9605\u8BFB\u5168\u6587"))}</span><img${ssrRenderAttr("src", _imports_1)} class="tw-w-[18px]" alt="" data-v-3568d7ec${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-flex" }, [
                createVNode("span", { class: "tw-mr-[6px]" }, toDisplayString(_ctx.$t("common.\u9605\u8BFB\u5168\u6587")), 1),
                createVNode("img", {
                  src: _imports_1,
                  class: "tw-w-[18px]",
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/BwArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3568d7ec"]]);
const _imports_0 = "" + buildAssetsURL("empty-search.DwlgOxyN.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="empty-text" data-v-3d203b13>${ssrInterpolate(_ctx.$t(
    "common.\u5F88\u62B1\u6B49\uFF0C\u6CA1\u6709\u627E\u5230\u4E0E\u60A8\u641C\u7D22\u5185\u5BB9\u76F8\u5173\u7684\u7ED3\u679C\u3002\u8BF7\u786E\u8BA4\u60A8\u7684\u5173\u952E\u8BCD\u62FC\u5199\u662F\u5426\u6B63\u786E\uFF0C\u6216\u8005\u5C1D\u8BD5\u66F4\u6362\u5173\u952E\u8BCD\u518D\u6B21\u641C\u7D22"
  ))}</div><img class="md:tw-w-[300px] ss:tw-w-[33%] max-lg:tw-mx-auto lg:tw-ml-[127px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3d203b13><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/SearchEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchEmpty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3d203b13"]]);

export { SearchEmpty as S, __nuxt_component_0 as _ };
//# sourceMappingURL=SearchEmpty-okRShDCt.mjs.map

import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "BwButton" },
  __name: "BwButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "default"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bw-button tw-px-[16px] tw-h-[42px] tw-rounded-[14px] tw-flex-shrink-0", [`btn-${__props.type}`, { active: __props.active }]]
      }, _attrs))} data-v-a564c17d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a564c17d"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BwButton-13DdQ1TY.mjs.map

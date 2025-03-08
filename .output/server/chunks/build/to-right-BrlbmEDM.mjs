import { mergeModels, useModel, mergeProps, defineComponent, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDynamicModelProps, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_2 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2019C15.4183%2019%2019%2015.4183%2019%2011C19%206.58172%2015.4183%203%2011%203C6.58172%203%203%206.58172%203%2011C3%2015.4183%206.58172%2019%2011%2019Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21%2021L16.65%2016.65'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "BwInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: true
    }
  }, {
    "modelValue": {
      type: String,
      default: ""
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bw-input tw-bg-[#F8F8F8]" }, _attrs))} data-v-aab909c7><input${ssrRenderAttrs((_temp0 = mergeProps({
        type: __props.type,
        placeholder: __props.placeholder,
        class: "bw-input-field"
      }, _ctx.$attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, modelValue.value))))} data-v-aab909c7>`);
      if (__props.clearable && modelValue.value) {
        _push(`<div class="clear-icon tw-cursor-pointer tw-text-[#999] tw-text-[16px] tw-mr-[10px]" data-v-aab909c7> \u2715 </div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "append", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BwInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aab909c7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "BwMedia" },
  __name: "BwMedia",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const mediaTypeEnum = {
      [
        "image"
        /* image */
      ]: ["jpg", "png", "jpeg", "svg", "gif"],
      [
        "video"
        /* video */
      ]: ["mp4"]
    };
    const mediaType = computed(() => {
      const [srcContent = ""] = props.src.split("?");
      const pointSplit = srcContent.split(".");
      const suffix = pointSplit.pop() || "";
      const type = Object.keys(mediaTypeEnum).find((index) => {
        const medias = mediaTypeEnum[index] || [];
        return medias.includes(suffix);
      });
      return props.type || type;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(mediaType) === "image") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          src: __props.src,
          loading: "lazy",
          class: "tw-w-full tw-object-contain tw-rounded-[8px] media-zoom",
          alt: ""
        }, _attrs))} data-v-df58da3f>`);
      } else if (unref(mediaType) === "video") {
        _push(`<img${ssrRenderAttrs(mergeProps({
          src: __props.src,
          class: "tw-w-full tw-object-contain tw-rounded-[8px] video",
          alt: ""
        }, _attrs))} data-v-df58da3f>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwMedia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df58da3f"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_75_2108)'%3e%3cpath%20d='M9.00005%204.385C12.3251%204.385%2015.3531%207.615%2016.5096%209C15.3531%2010.385%2012.3251%2013.615%209.00005%2013.615C5.67505%2013.615%202.64705%2010.385%201.49055%209C2.64705%207.615%205.67505%204.385%209.00005%204.385ZM9.00005%203C4.87405%203%201.37805%206.937%200.199052%208.4325C0.070199%208.59358%200%208.79372%200%209C0%209.20628%200.070199%209.40642%200.199052%209.5675C1.37805%2011.063%204.87405%2015%209.00005%2015C13.1261%2015%2016.6221%2011.063%2017.8011%209.5675C17.9299%209.40642%2018.0001%209.20628%2018.0001%209C18.0001%208.79372%2017.9299%208.59358%2017.8011%208.4325C16.6221%206.937%2013.1261%203%209.00005%203ZM9.00005%207.615C9.74555%207.615%2010.3501%208.235%2010.3501%209C10.3501%209.765%209.74555%2010.385%209.00005%2010.385C8.25455%2010.385%207.65005%209.765%207.65005%209C7.65005%208.235%208.25455%207.615%209.00005%207.615ZM9.00005%206.231C7.90805%206.231%206.92355%206.9055%206.50605%207.9405C6.08805%208.9755%206.31905%2010.166%207.09105%2010.958C7.4632%2011.3438%207.94362%2011.6077%208.46888%2011.7149C8.99413%2011.822%209.53953%2011.7673%2010.0331%2011.558C11.0421%2011.13%2011.7001%2010.12%2011.7001%209C11.7001%207.4705%2010.4916%206.231%209.00055%206.231H9.00005Z'%20fill='%23999999'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_75_2108'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.68158%202.91202C6.87501%202.91202%207.06148%202.98856%207.19925%203.12633L12.536%208.44224C12.8213%208.72752%2012.8213%209.18814%2012.536%209.47342L7.19925%2014.7907C6.91258%2015.0718%206.45196%2015.069%206.16807%2014.7866C5.88419%2014.5027%205.88279%2014.0448%206.1639%2013.7596L10.9816%208.95853L6.16251%204.15611C5.95377%203.94737%205.89115%203.63426%206.00387%203.36151C6.11937%203.09014%206.38516%202.91202%206.68158%202.91202Z'%20fill='%2361CD57'/%3e%3c/svg%3e";

export { BwInput as B, _imports_2 as _, __nuxt_component_0 as a, _imports_0 as b, _imports_1 as c };
//# sourceMappingURL=to-right-BrlbmEDM.mjs.map

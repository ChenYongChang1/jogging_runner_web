import { a as __nuxt_component_0, b as _imports_0, c as _imports_1, d as __nuxt_component_2 } from './to-right-Ds3GYEKb.mjs';
import { _ as __nuxt_component_0$1 } from './BwButton-CqxsMVYs.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useRouter, s as shared_cjs_prodExports, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { g as getSearchInfo } from './home-CsjBWASq.mjs';
import { g as getRouteLink } from './comblie-inject-CMlERw32.mjs';

const Loading = function(options = {}) {
  return void 0;
};
const INSTANCE_KEY = Symbol("ElLoading");
const createInstance = (el, binding) => {
  var _a, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => shared_cjs_prodExports.isObject(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = shared_cjs_prodExports.isString(key) && (vm == null ? void 0 : vm[key]) || key;
    if (data)
      return ref(data);
    else
      return data;
  };
  const getProp = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${shared_cjs_prodExports.hyphenate(name)}`));
  const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
  const options = {
    text: getProp("text"),
    svg: getProp("svg"),
    svgViewBox: getProp("svgViewBox"),
    spinner: getProp("spinner"),
    background: getProp("background"),
    customClass: getProp("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  };
};
const updateOptions = (newOptions, originalOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else if (binding.value && binding.oldValue) {
        if (shared_cjs_prodExports.isObject(binding.value))
          updateOptions(binding.value, instance.options);
      } else {
        instance == null ? void 0 : instance.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = null;
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BwList",
  __ssrInlineRender: true,
  props: {
    searchValue: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const tableList = ref([]);
    const totalPage = ref(0);
    const currentPage = ref(1);
    const loading = ref(false);
    const getList = async () => {
      loading.value = true;
      try {
        const data = await getSearchInfo({
          page: currentPage.value,
          alias: "",
          keyword: props.searchValue
        });
        totalPage.value = data == null ? void 0 : data.totalPage;
        currentPage.value = data == null ? void 0 : data.page;
        tableList.value = data == null ? void 0 : data.list;
      } catch (e) {
        console.log(e);
      } finally {
        loading.value = false;
      }
    };
    const handleCurrentChange = (newPage) => {
      currentPage.value = newPage;
      getList();
    };
    useRouter();
    const linkToInfo = (item) => {
      const href = getRouteLink(`/post/${item.id}.html`);
      navigateTo(href);
    };
    getList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BwMedia = __nuxt_component_0;
      const _component_bw_button = __nuxt_component_0$1;
      const _component_BwPagination = __nuxt_component_2;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bwList tw-mx-auto" }, _attrs))} data-v-e68b793f><div${ssrRenderAttrs(mergeProps({ class: "bw-list-main tw-flex tw-flex-wrap tw-justify-between tw-gap-4" }, ssrGetDirectiveProps(_ctx, _directive_loading, loading.value)))} data-v-e68b793f><!--[-->`);
      ssrRenderList(tableList.value, (item, index) => {
        _push(`<div class="bw-list-item tw-w-full sm:tw-w-[48%] lg:tw-w-[29.3%] tw-px-[16px] tw-pt-[16px] tw-pb-[22px]" data-v-e68b793f>`);
        _push(ssrRenderComponent(_component_BwMedia, {
          class: "tw-mb-[20px] tw-rounded-[26px] tw-w-[100%] tw-min-h-[229px]",
          src: item.cover,
          type: item.isVideo === 1 ? "image" : "video"
        }, null, _parent));
        _push(`<div class="bw-list-item-title" data-v-e68b793f>${ssrInterpolate(item.title)}</div><div class="bw-list-item-content" data-v-e68b793f>${ssrInterpolate(item.desc)}</div><div class="look-nums tw-flex tw-mt-[10px]" data-v-e68b793f><img${ssrRenderAttr("src", _imports_0)} class="tw-w-[18px] tw-mr-[8px]" loading="lazy" alt="" data-v-e68b793f><span class="tw-text-[14px] tw-font-[500] tw-text-text999" data-v-e68b793f>${ssrInterpolate(item.visitNum)}${ssrInterpolate(_ctx.$t("common.\u4E07\u4EBA\u770B\u8FC7"))}</span></div><div class="tw-flex tw-justify-end" data-v-e68b793f>`);
        _push(ssrRenderComponent(_component_bw_button, {
          type: "border",
          class: "tw-w-[140px] tw-text-center",
          onClick: ($event) => linkToInfo(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="tw-flex tw-justify-center" data-v-e68b793f${_scopeId}><span class="tw-mr-[6px]" data-v-e68b793f${_scopeId}>${ssrInterpolate(_ctx.$t("common.\u9605\u8BFB\u5168\u6587"))}</span><img${ssrRenderAttr("src", _imports_1)} loading="lazy" class="tw-w-[18px]" alt="" data-v-e68b793f${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "tw-flex tw-justify-center" }, [
                  createVNode("span", { class: "tw-mr-[6px]" }, toDisplayString(_ctx.$t("common.\u9605\u8BFB\u5168\u6587")), 1),
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
      _push(`<!--]--></div><div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]" data-v-e68b793f>`);
      _push(ssrRenderComponent(_component_BwPagination, {
        "current-page": currentPage.value,
        "page-count": totalPage.value,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BwList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e68b793f"]]);

export { BwList as B };
//# sourceMappingURL=BwList-CgC0_mMP.mjs.map

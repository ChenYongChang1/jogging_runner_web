import { _ as __nuxt_component_1 } from './BwListMain-D2pmfD1D.mjs';
import { _ as __nuxt_component_1$1 } from './BwPagination-B4RSCpjF.mjs';
import { defineComponent, ref, mergeProps, isRef, useSSRContext } from 'vue';
import { u as useRouter, s as shared_cjs_prodExports } from './server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { g as getSearchInfo } from './home-CsjBWASq.mjs';

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
    getList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_list_main = __nuxt_component_1;
      const _component_BwPagination = __nuxt_component_1$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bwList tw-mx-auto" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "bw-list-main tw-flex tw-flex-wrap tw-justify-between tw-gap-4" }, ssrGetDirectiveProps(_ctx, _directive_loading, loading.value)))}>`);
      _push(ssrRenderComponent(_component_bw_list_main, { tableList: tableList.value }, null, _parent));
      _push(`</div><div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]">`);
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

export { _sfc_main as _ };
//# sourceMappingURL=BwList-C892C766.mjs.map

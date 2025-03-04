import { a as __nuxt_component_0, b as _imports_0, c as _imports_1, d as __nuxt_component_1$1 } from './to-right-7or-DgZP.mjs';
import { _ as __nuxt_component_1 } from './BwButton-13DdQ1TY.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BwList",
  __ssrInlineRender: true,
  props: {
    getListApi: {
      type: Function,
      required: true
    },
    searchValue: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const tableList = ref([]);
    const totalPage = ref(0);
    const currentPage = ref(1);
    const getList = async () => {
      const data = await props.getListApi({
        page: currentPage.value,
        categoryId: "",
        keyword: props.searchValue
      });
      totalPage.value = data == null ? void 0 : data.totalPage;
      currentPage.value = data == null ? void 0 : data.page;
      tableList.value = data == null ? void 0 : data.list;
    };
    const handleCurrentChange = (newPage) => {
      currentPage.value = newPage;
      console.log("\u9875\u7801\u53D8\u5316:", newPage);
      getList();
    };
    __expose({
      getList
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BwMedia = __nuxt_component_0;
      const _component_bw_button = __nuxt_component_1;
      const _component_BwPagination = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bwList tw-mx-auto" }, _attrs))} data-v-81719cfa><div class="bw-list-main tw-flex tw-flex-wrap tw-justify-between tw-gap-4" data-v-81719cfa><!--[-->`);
      ssrRenderList(unref(tableList), (item, index) => {
        _push(`<div class="bw-list-item tw-w-full sm:tw-w-[48%] lg:tw-w-[29.3%] tw-px-[16px] tw-pt-[16px] tw-pb-[22px]" data-v-81719cfa>`);
        _push(ssrRenderComponent(_component_BwMedia, {
          class: "tw-mb-[20px] tw-rounded-[26px] tw-w-[100%] tw-min-h-[229px]",
          src: item.cover,
          type: item.isVideo === 1 ? "image" : "video"
        }, null, _parent));
        _push(`<div class="bw-list-item-title" data-v-81719cfa>${ssrInterpolate(item.title)}</div><div class="bw-list-item-content" data-v-81719cfa>${ssrInterpolate(item.desc)}</div><div class="look-nums tw-flex tw-mt-[10px]" data-v-81719cfa><img${ssrRenderAttr("src", _imports_0)} class="tw-w-[18px] tw-mr-[8px]" alt="" data-v-81719cfa><span class="tw-text-[14px] tw-font-[500] tw-text-text999" data-v-81719cfa>${ssrInterpolate(item.visitNum)}\u4E07\u4EBA\u770B\u8FC7</span></div><div class="tw-flex tw-justify-end" data-v-81719cfa>`);
        _push(ssrRenderComponent(_component_bw_button, {
          type: "border",
          class: "tw-w-[140px] tw-text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="tw-flex tw-justify-center" data-v-81719cfa${_scopeId}><span class="tw-mr-[6px]" data-v-81719cfa${_scopeId}>\u9605\u8BFB\u5168\u6587</span><img${ssrRenderAttr("src", _imports_1)} class="tw-w-[18px]" alt="" data-v-81719cfa${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "tw-flex tw-justify-center" }, [
                  createVNode("span", { class: "tw-mr-[6px]" }, "\u9605\u8BFB\u5168\u6587"),
                  createVNode("img", {
                    src: _imports_1,
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
      _push(`<!--]--></div><div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]" data-v-81719cfa>`);
      _push(ssrRenderComponent(_component_BwPagination, {
        "current-page": unref(currentPage),
        "page-count": unref(totalPage),
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
const BwList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81719cfa"]]);

export { BwList as B };
//# sourceMappingURL=BwList-DsCTz1nv.mjs.map

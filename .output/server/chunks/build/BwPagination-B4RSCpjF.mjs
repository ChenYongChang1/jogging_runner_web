import { B as BwButton } from './BwButton-COfJsUQ6.mjs';
import { E as ElIcon } from './el-popper-CY7jS90x.mjs';
import { computed, ref, mergeProps, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, createVNode, defineComponent, provide, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "data:image/svg+xml,%3csvg%20class='tw-w-4%20tw-h-4'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M15%207L10%2012L15%2017'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20class='tw-w-4%20tw-h-4'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M15%207L10%2012L15%2017'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20class='tw-w-4%20tw-h-4'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M9%207L14%2012L9%2017'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20class='tw-w-4%20tw-h-4'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M9%207L14%2012L9%2017'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "BwPagination",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    pageCount: {
      type: Number,
      required: true,
      default: 0
    }
  },
  emits: [
    "update:currentPage",
    "update:pageSize",
    "size-change",
    "current-change"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const totalPages = computed(() => props.pageCount);
    const isRightHover = ref(false);
    const isLeftHover = ref(false);
    const goToFirstPage = () => {
      emit("update:currentPage", 1);
      emit("current-change", 1);
    };
    const goToLastPage = () => {
      emit("update:currentPage", totalPages.value);
      emit("current-change", totalPages.value);
    };
    const goToPrevPage = () => {
      if (props.currentPage > 1) {
        const newPage = props.currentPage - 1;
        emit("update:currentPage", newPage);
        emit("current-change", newPage);
      }
    };
    const goToNextPage = () => {
      if (props.currentPage < totalPages.value) {
        const newPage = props.currentPage + 1;
        emit("update:currentPage", newPage);
        emit("current-change", newPage);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_button = BwButton;
      const _component_el_icon = ElIcon;
      const _component_client_only = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-pagination" }, _attrs))} data-v-3750b61e>`);
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: ["button-page", __props.currentPage === 1 ? "disabled" : ""],
        active: false,
        disabled: __props.currentPage === 1,
        onClick: goToFirstPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("common.\u9996\u9875"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("common.\u9996\u9875")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: [["button-page", __props.currentPage === 1 ? "disabled" : ""], "tw-text-center tw-w-[46px] tw-flex tw-justify-center tw-items-center"],
        active: false,
        onMouseenter: () => {
          isLeftHover.value = true;
        },
        onMouseleave: () => {
          isLeftHover.value = false;
        },
        disabled: __props.currentPage === 1,
        onClick: goToPrevPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isLeftHover.value && __props.currentPage !== 1) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} data-v-3750b61e${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} data-v-3750b61e${_scopeId2}>`);
                  }
                } else {
                  return [
                    isLeftHover.value && __props.currentPage !== 1 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_0
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _imports_1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  isLeftHover.value && __props.currentPage !== 1 ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: [["button-page", __props.currentPage === totalPages.value ? "disabled" : ""], "tw-text-center tw-w-[46px] tw-flex tw-justify-center tw-items-center"],
        active: false,
        disabled: __props.currentPage === totalPages.value,
        onMouseenter: () => {
          isRightHover.value = true;
        },
        onMouseleave: () => {
          isRightHover.value = false;
        },
        onClick: goToNextPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isRightHover.value && __props.currentPage !== totalPages.value) {
                    _push3(`<img${ssrRenderAttr("src", _imports_2)} data-v-3750b61e${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", _imports_3)} data-v-3750b61e${_scopeId2}>`);
                  }
                } else {
                  return [
                    isRightHover.value && __props.currentPage !== totalPages.value ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_2
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _imports_3
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  isRightHover.value && __props.currentPage !== totalPages.value ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_2
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_3
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: ["button-page", __props.currentPage === totalPages.value ? "disabled" : ""],
        active: false,
        disabled: __props.currentPage === totalPages.value,
        onClick: goToLastPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("common.\u5C3E\u9875"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("common.\u5C3E\u9875")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/BwPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3750b61e"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BwPagination-B4RSCpjF.mjs.map

import { E as ElPopover, _ as _imports_0 } from './erweima-6cWP-aLm.mjs';
import { E as ElIcon } from './el-popper-CY7jS90x.mjs';
import { ref, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1 } from './home-D_NGkayi.mjs';
import { B as BwInput, _ as _imports_2$1 } from './to-right-Ds3GYEKb.mjs';
import { _ as __nuxt_component_0 } from './BwButton-CqxsMVYs.mjs';
import { B as BwList } from './BwList-CgC0_mMP.mjs';
import { u as useAsyncData, a as getCategory } from './home-CsjBWASq.mjs';
import { g as getRouteLink, s as searchPush } from './comblie-inject-CMlERw32.mjs';
import { n as navigateTo } from './server.mjs';
import './dropdown-D5ZlVybY.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tabarList = ref([]);
    const searchValue = ref("");
    const homeBwListRef = ref();
    const handleSearch = () => {
      searchPush(searchValue.value);
    };
    useAsyncData("getCategoryList", async () => {
      var _a;
      const res = await getCategory();
      tabarList.value = ((_a = res.value) == null ? void 0 : _a.data) || [];
      return tabarList.value;
    });
    const handleView = (alias) => {
      const href = getRouteLink(`/tag/${alias}`);
      navigateTo(href);
    };
    const visible = ref(false);
    const showPopover = () => {
      visible.value = true;
    };
    const hidePopover = () => {
      visible.value = false;
    };
    const togglePopover = () => {
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_icon = ElIcon;
      const _component_Download = resolveComponent("Download");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))}><div class="home-tabar tw-w-[100%] tw-bg-[#F8FFF8]"><div class="home-tabar-pc tw-flex tw-pt-[24px] tw-justify-between tw-items-center dd-container tw-mx-auto"><div class="home-tabar-left tw-w-[54%] max-lg:tw-mr-0 max-lg:tw-text-center max-lg:tw-w-[100%]"><p class="home-tabar-title tw-text-[#333333] dd-fs-84 tw-font-[400] tw-pb-[15px]">${ssrInterpolate(_ctx.$t("index.\u8D85\u6162\u8DD1\u8D85\u5065\u5EB7"))}</p><p class="home-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[400]">${ssrInterpolate(_ctx.$t("index.\u968F\u65F6\u968F\u5730\u5065\u5EB7\u5065\u7F8E"))}</p><div class="download-app tw-pt-[25px]">`);
      _push(ssrRenderComponent(_component_el_popover, {
        "popper-class": "download-app-popover",
        trigger: "manual",
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        onMouseenter: showPopover,
        onMouseleave: hidePopover,
        onClick: togglePopover,
        placement: "left-start"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__nuxt_component_0, {
              class: "download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center",
              active: true,
              onMouseenter: showPopover,
              onMouseleave: hidePopover,
              onClick: togglePopover
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("index.\u4E0B\u8F7DAPP"))}`);
                  _push3(ssrRenderComponent(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Download, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Download)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("index.\u4E0B\u8F7DAPP")), 1),
                    createVNode(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                      default: withCtx(() => [
                        createVNode(_component_Download)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(__nuxt_component_0, {
                class: "download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center",
                active: true,
                onMouseenter: showPopover,
                onMouseleave: hidePopover,
                onClick: togglePopover
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("index.\u4E0B\u8F7DAPP")), 1),
                  createVNode(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                    default: withCtx(() => [
                      createVNode(_component_Download)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="tw-w-[125px] tw-mb-[5px]" loading="lazy" alt=""${_scopeId}><div class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"${_scopeId}>${ssrInterpolate(_ctx.$t("index.\u626B\u7801\u4E0B\u8F7D\u8D85\u6162\u8DD1"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "popover-download tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                createVNode("img", {
                  src: _imports_0,
                  class: "tw-w-[125px] tw-mb-[5px]",
                  loading: "lazy",
                  alt: ""
                }),
                createVNode("div", { class: "text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]" }, toDisplayString(_ctx.$t("index.\u626B\u7801\u4E0B\u8F7D\u8D85\u6162\u8DD1")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><img${ssrRenderAttr("src", _imports_1)} loading="lazy" class="tw-w-[36.1%] max-lg:tw-hidden"></div></div><div class="home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-translate-y-[-75px] max-lg:tw-translate-y-0 tw-mx-auto">`);
      if (unref(tabarList).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(tabarList), (item, index) => {
          _push(`<div class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] tw-pl-[16px] tw-pr-[10px]" style="${ssrRenderStyle({
            backgroundImage: `url(${item == null ? void 0 : item.backGroup})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          })}"><div class="tabar-item-text dd-fs-34 tw-font-[700] tw-leading-[47.6px] tw-text-[#333]">${ssrInterpolate(item.name)}</div><div class="tabar-item-right tw-flex tw-justify-between tw-items-center">`);
          _push(ssrRenderComponent(__nuxt_component_0, {
            style: {
              background: item.buttonColor,
              borderColor: item.buttonColor
            },
            class: "tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[98px] max-md:tw-h-[30px!important] max-md:tw-leading-[30px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[8px] tw-text-center",
            active: true,
            onClick: ($event) => handleView(item.alias)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("home.\u70B9\u51FB\u67E5\u770B"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("home.\u70B9\u51FB\u67E5\u770B")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<img${ssrRenderAttr("src", item.icon)} class="tw-w-[85px] max-lg:tw-w-[50px]" loading="lazy"></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] tw-pl-[16px] tw-pr-[10px] tw-bg-gray-100 tw-animate-pulse"><div class="tw-h-[47.6px] tw-w-[150px] tw-bg-gray-200 tw-rounded"></div><div class="tw-flex tw-justify-between tw-items-center tw-mt-4"><div class="tw-w-[132px] tw-h-[46px] tw-bg-gray-200 tw-rounded-[30px]"></div><div class="tw-w-[85px] tw-h-[85px] tw-bg-gray-200 tw-rounded"></div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><div class="search-input tw-mt-[-11px] dd-container tw-mx-auto max-lg:tw-mt-[28px]">`);
      _push(ssrRenderComponent(BwInput, {
        modelValue: unref(searchValue),
        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
        placeholder: _ctx.$t("index.\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"),
        onKeyup: handleSearch
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__nuxt_component_0, {
              onClick: handleSearch,
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-flex"${_scopeId2}><img class="tw-w-[16px] tw-mr-[4px]"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("index.\u641C\u7D22"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex" }, [
                      createVNode("img", {
                        class: "tw-w-[16px] tw-mr-[4px]",
                        src: _imports_2$1,
                        alt: ""
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("index.\u641C\u7D22")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(__nuxt_component_0, {
                onClick: handleSearch,
                active: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-flex" }, [
                    createVNode("img", {
                      class: "tw-w-[16px] tw-mr-[4px]",
                      src: _imports_2$1,
                      alt: ""
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("index.\u641C\u7D22")), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BwList, {
        ref_key: "homeBwListRef",
        ref: homeBwListRef,
        searchValue: unref(searchValue),
        class: "dd-container tw-mx-auto"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Do7ehK5X.mjs.map

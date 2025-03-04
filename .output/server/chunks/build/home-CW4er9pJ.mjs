import { E as ElIcon } from './el-popper-FHfxn3dr.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './Download-BQYsqbad.mjs';
import { _ as _imports_1 } from './home-D_NGkayi.mjs';
import { _ as _imports_0$1 } from './Search-CSQLLmd3.mjs';
import { _ as __nuxt_component_1 } from './BwButton-13DdQ1TY.mjs';
import { _ as __nuxt_component_0$1 } from './to-right-7or-DgZP.mjs';
import { B as BwList } from './BwList-DsCTz1nv.mjs';
import { u as useAsyncData, g as getSearchInfo, a as getCategory } from './home-BPk0mUbK.mjs';
import './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './el-scrollbar-DPoqsEkW.mjs';

const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const tabarListStyles = ref([
      "background: linear-gradient(180deg, #E9F9FF 0%, #F4FFFD 100%)",
      "background: linear-gradient(180deg, #FFF7DE 0%, #FFFCF4 100%)",
      "background: linear-gradient(180deg, #E9ECFF 0%, #F4F5FF 100%)",
      "background: linear-gradient(180deg, #E3FFE5 0%, #F3FFF9 100%);margin-right: 0"
    ]);
    const tabarList = ref([]);
    const searchValue = ref("");
    const homeBwListRef = ref();
    const handleSearch = () => {
      var _a;
      (_a = homeBwListRef.value) == null ? void 0 : _a.getList();
    };
    const getCategoryList = async () => {
      const res2 = await getCategory();
      console.log(res2, "0000000");
      return res2;
    };
    useAsyncData("getCategoryList", getCategoryList);
    const res = ref("-");
    useAsyncData("d", async () => res.value = await getCategory());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))}><div class="home-tabar tw-w-[100%] tw-bg-[#F8FFF8]"><div class="home-tabar-pc tw-flex tw-pt-[24px] tw-justify-between tw-items-center dd-container tw-mx-auto"><div class="home-tabar-left tw-w-[54%] max-lg:tw-mr-0 max-lg:tw-text-center max-lg:tw-w-[100%]"><p class="home-tabar-title tw-text-[#333333] dd-fs-84 tw-font-[400] tw-pb-[15px]"> \u8D85\u6162\u8DD1\u8D85\u5065\u5EB7 </p><p class="home-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[400]"> \u968F\u65F6\u968F\u5730\u5065\u5EB7\u5065\u7F8E </p><div class="download-app tw-pt-[25px]">`);
      _push(ssrRenderComponent(__nuxt_component_1, {
        class: "download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center",
        active: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4E0B\u8F7DAPP`);
            _push2(ssrRenderComponent(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("\u4E0B\u8F7DAPP"),
              createVNode(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><img${ssrRenderAttr("src", _imports_1)} class="tw-w-[36.1%] max-lg:tw-hidden"></div></div><div class="home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-translate-y-[-75px] max-lg:tw-translate-y-0 tw-mx-auto">${ssrInterpolate(unref(res))} <!--[-->`);
      ssrRenderList(unref(tabarList), (item, index) => {
        _push(`<div class="tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pl-[16px] tw-pr-[10px]" style="${ssrRenderStyle(unref(tabarListStyles)[index])}"><img${ssrRenderAttr("src", item.backGroup)} class="tw-absolute tw-h-[42px] tw-top-[5px] tw-left-[10px]"><div class="tabar-item-text dd-fs-34 tw-font-[700] tw-leading-[47.6px] tw-text-[#333]">${ssrInterpolate(item.name)}</div><div class="tabar-item-right tw-flex tw-justify-between tw-items-center">`);
        _push(ssrRenderComponent(__nuxt_component_1, {
          style: { background: item.buttonColor },
          class: "tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[98px] max-md:tw-h-[30px!important] max-md:tw-leading-[30px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[8px] tw-text-center",
          active: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u70B9\u51FB\u67E5\u770B`);
            } else {
              return [
                createTextVNode("\u70B9\u51FB\u67E5\u770B")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<img${ssrRenderAttr("src", item.icom)} class="tw-w-[85px] max-lg:tw-w-[50px]"></div></div>`);
      });
      _push(`<!--]--></div><div class="search-input tw-mt-[-11px] dd-container tw-mx-auto max-lg:tw-mt-[28px]">`);
      _push(ssrRenderComponent(__nuxt_component_0$1, {
        modelValue: unref(searchValue),
        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__nuxt_component_1, {
              onClick: handleSearch,
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u641C\u7D22 `);
                } else {
                  return [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u641C\u7D22 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(__nuxt_component_1, {
                onClick: handleSearch,
                active: true
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: ""
                      })
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u641C\u7D22 ")
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
        getListApi: unref(getSearchInfo),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[lang]/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-CW4er9pJ.mjs.map

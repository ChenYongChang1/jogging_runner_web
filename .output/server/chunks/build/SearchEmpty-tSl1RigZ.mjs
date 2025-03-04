import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_0$3, b as _imports_0$2, c as _imports_1 } from './to-right-7or-DgZP.mjs';
import { _ as __nuxt_component_1 } from './BwButton-13DdQ1TY.mjs';
import { defineComponent, mergeModels, useModel, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
import { s as searchPush, g as getRouteLink } from './comblie-inject-CDusoPZj.mjs';
import { E as ElIcon } from './el-popper-FHfxn3dr.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-DWUyQGev.mjs';
import { _ as _imports_0$1 } from './Search-CSQLLmd3.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    const router = useRouter();
    const linkToInfo = () => {
      const href = getRouteLink(`/post/${props.article.id}.html`);
      router.push(href);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_media = __nuxt_component_0$3;
      const _component_bw_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-row" }, _attrs))} data-v-ff16240c><div class="card-title dd-title-text" data-v-ff16240c>${ssrInterpolate(__props.article.title)}</div>`);
      _push(ssrRenderComponent(_component_bw_media, {
        class: "tw-mb-[22px]",
        src: __props.article.cover,
        type: "image"
      }, null, _parent));
      _push(`<div class="sub-text tw-mb-[10px]" data-v-ff16240c>${ssrInterpolate(__props.article.desc || "")}</div><div class="look-views lg:tw-flex tw-justify-between tw-items-center tw-flex-wrap ss:tw-mb-[1.125rem]" data-v-ff16240c><div class="look-nums tw-flex max-lg:tw-mb-[1.125rem]" data-v-ff16240c><img${ssrRenderAttr("src", _imports_0$2)} class="tw-w-[18px] tw-mr-[8px]" alt="" data-v-ff16240c><span class="tw-text-[14px] tw-font-[500] tw-text-text999" data-v-ff16240c>${ssrInterpolate(__props.article.visitNum || 0)}\u4EBA\u770B\u8FC7</span></div>`);
      _push(ssrRenderComponent(_component_bw_button, {
        type: "border",
        class: "ss:tw-mx-auto lg:tw-mx-0 tw-w-fit",
        onClick: linkToInfo
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-flex" data-v-ff16240c${_scopeId}><span class="tw-mr-[6px]" data-v-ff16240c${_scopeId}>\u9605\u8BFB\u5168\u6587</span><img${ssrRenderAttr("src", _imports_1)} class="tw-w-[18px]" alt="" data-v-ff16240c${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-flex" }, [
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
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/BwArticleCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ff16240c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "ArticleSmallRow" },
  __name: "ArticleSmallRow",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "tw-block tw-w-full tw-text-[20px] tw-font-[500] tw-leading-[32px] tw-text-text666 tw-mb-[12px] hover:tw-text-themecolor",
        to: `/post/${__props.article.id}.html`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.article.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.article.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="look-nums tw-flex"><img${ssrRenderAttr("src", _imports_0$2)} class="tw-w-[18px] tw-mr-[8px]" alt=""><span class="tw-text-[14px] tw-font-[500] tw-text-text999">${ssrInterpolate(__props.article.visitNum)}\u4EBA\u770B\u8FC7</span></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/ArticleSmallRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "ArticleSearchContent" },
  __name: "ArticleSearchContent",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    categoriesList: {
      type: Array,
      default: () => []
    },
    lastsList: {
      type: Array,
      default: () => []
    }
  }, {
    "searchWorld": {
      type: String
    },
    "searchWorldModifiers": {}
  }),
  emits: ["update:searchWorld"],
  setup(__props) {
    const searchWorld = useModel(__props, "searchWorld");
    const search = () => {
      searchPush(searchWorld.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_bw_input = __nuxt_component_0$1;
      const _component_BwButton = __nuxt_component_1;
      const _component_el_icon = ElIcon;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<!--[--><div class="ss:tw-w-full xl:tw-w-[330px]"><div class="search-title dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] xl:tw-mb-[28px] ss:tw-mb-[1.125rem]"> \u641C\u7D22 </div><div class="tw-h-[64px] tw-w-full xl:tw-mb-[68px] ss:tw-mb-[2.75rem]">`);
      _push(ssrRenderComponent(_component_bw_input, {
        modelValue: searchWorld.value,
        "onUpdate:modelValue": ($event) => searchWorld.value = $event,
        class: "tw-h-[68px] tw-w-full",
        onKeydown: search
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BwButton, {
              active: true,
              onClick: search
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
              createVNode(_component_BwButton, {
                active: true,
                onClick: search
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
      _push(`</div><div class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"> \u6700\u65B0\u6587\u7AE0 </div><div class="article-list bw-mb-[64px]"><!--[-->`);
      ssrRenderList(__props.lastsList, (item) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: `lasts-${item.id}`,
          class: "tw-mb-[28px]",
          article: item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]"> \u6587\u7AE0\u5206\u7C7B </div><div class="article-list max-lg:tw-mb-[2.75rem]"><!--[-->`);
      ssrRenderList(__props.categoriesList, (item) => {
        _push(`<div class="article-rows tw-mb-[26px]"><div class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor">${ssrInterpolate(item.name)}</div><!--[-->`);
        ssrRenderList(item.childs || [], (citem) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "article-type tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]",
            to: `/tag/${citem.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(citem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(citem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/ArticleSearchContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("empty-search.DwlgOxyN.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="empty-text" data-v-37cfe62f> \u5F88\u62B1\u6B49\uFF0C\u6CA1\u6709\u627E\u5230\u4E0E\u60A8\u641C\u7D22\u5185\u5BB9\u76F8\u5173\u7684\u7ED3\u679C\u3002\u8BF7\u786E\u8BA4\u60A8\u7684\u5173\u952E\u8BCD\u62FC\u5199\u662F\u5426\u6B63\u786E\uFF0C\u6216\u8005\u5C1D\u8BD5\u66F4\u6362\u5173\u952E\u8BCD\u518D\u6B21\u641C\u7D22 </div><img class="md:tw-w-[300px] ss:tw-w-[33%] max-lg:tw-mx-auto lg:tw-ml-[127px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-37cfe62f><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/SearchEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchEmpty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-37cfe62f"]]);

export { SearchEmpty as S, __nuxt_component_0 as _, _sfc_main$1 as a };
//# sourceMappingURL=SearchEmpty-tSl1RigZ.mjs.map

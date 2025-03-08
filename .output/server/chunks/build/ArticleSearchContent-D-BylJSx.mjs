import { B as BwInput, _ as _imports_2, b as _imports_0 } from './to-right-BrlbmEDM.mjs';
import { B as BwButton } from './BwButton-COfJsUQ6.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DWUyQGev.mjs';
import { g as getRouteLink, s as searchPush } from './comblie-inject-CMlERw32.mjs';
import { defineComponent, mergeModels, useModel, withCtx, createVNode, toDisplayString, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "tw-block tw-w-full tw-text-[20px] tw-font-[500] tw-leading-[32px] tw-text-text666 tw-mb-[12px] hover:tw-text-themecolor",
        to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))(`/post/${__props.article.id}.html`)
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
      _push(`<div class="look-nums tw-flex"><img${ssrRenderAttr("src", _imports_0)} class="tw-w-[18px] tw-mr-[8px]" alt=""><span class="tw-text-[14px] tw-font-[500] tw-text-text999">${ssrInterpolate(__props.article.visitNum)}${ssrInterpolate(_ctx.$t("common.\u4EBA\u770B\u8FC7"))}</span></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/ArticleSmallRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_bw_input = BwInput;
      const _component_BwButton = BwButton;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><div class="ss:tw-w-full xl:tw-w-[330px]"><div class="search-title dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] xl:tw-mb-[28px] ss:tw-mb-[1.125rem]">${ssrInterpolate(_ctx.$t("common.\u641C\u7D22"))}</div><div class="tw-h-[64px] tw-w-full xl:tw-mb-[68px] ss:tw-mb-[2.75rem]">`);
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
                  _push3(`<div class="tw-flex"${_scopeId2}><img class="tw-w-[16px] tw-mr-[4px]"${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("index.\u641C\u7D22"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex" }, [
                      createVNode("img", {
                        class: "tw-w-[16px] tw-mr-[4px]",
                        src: _imports_2,
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
              createVNode(_component_BwButton, {
                active: true,
                onClick: search
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-flex" }, [
                    createVNode("img", {
                      class: "tw-w-[16px] tw-mr-[4px]",
                      src: _imports_2,
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
      _push(`</div><div class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]">${ssrInterpolate(_ctx.$t("common.\u6700\u65B0\u6587\u7AE0"))}</div><div class="article-list bw-mb-[64px]"><!--[-->`);
      ssrRenderList(__props.lastsList, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: `lasts-${item.id}`,
          class: "tw-mb-[28px]",
          article: item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="dd-title-text tw-font-[500] tw-text-basecolor tw-leading-[50px] tw-mb-[28px]">${ssrInterpolate(_ctx.$t("common.\u6587\u7AE0\u5206\u7C7B"))}</div><div class="article-list max-lg:tw-mb-[2.75rem]"><!--[-->`);
      ssrRenderList(__props.categoriesList, (item) => {
        _push(`<div class="article-rows tw-mb-[26px]"><div class="article-title tw-text-[24px] tw-font-[600] tw-leading-[38px] tw-mb-[12px] tw-text-basecolor">${ssrInterpolate(item.name)}</div><!--[-->`);
        ssrRenderList(item.childs || [], (citem) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "article-type tw-block tw-pl-[18px] tw-text-[20px] tw-font-[500] tw-text-text666 tw-mb-[12px]",
            to: ("getRouteLink" in _ctx ? _ctx.getRouteLink : unref(getRouteLink))(`/tag/${citem.id}`)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/search/ArticleSearchContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ArticleSearchContent-D-BylJSx.mjs.map

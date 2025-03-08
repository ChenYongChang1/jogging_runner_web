import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElPopover, _ as _imports_1 } from './erweima-Br56okd0.mjs';
import { B as BwButton } from './BwButton-COfJsUQ6.mjs';
import { E as ElIcon } from './el-popper-CY7jS90x.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1$1 } from './home-5I45rcA-.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './dropdown-D5ZlVybY.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'vue-router';

const _imports_3 = "" + buildAssetsURL("download-image-1.Br7r211k.png");
const _imports_4 = "" + buildAssetsURL("download-image-2.DsUZeDRW.png");
const _imports_5 = "" + buildAssetsURL("download-image-3.CiLS8eyQ.png");
const _imports_6 = "" + buildAssetsURL("download-image-4.CrdttLXh.png");
const _imports_7 = "" + buildAssetsURL("download-image-5.QcZE_V8s.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "download",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const visible = ref(false);
    const showPopover = () => {
      visible.value = true;
    };
    const hidePopover = () => {
      visible.value = false;
    };
    const togglePopover = () => {
      console.log("\u60E6\u8BB0\u4E86");
      visible.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_BwButton = BwButton;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "download-page" }, _attrs))} data-v-366262d2><div class="download-tabar tw-w-[100%] tw-bg-[#fff]" data-v-366262d2><div class="download-tabar tw-bg-[#F8FFF8] tw-flex tw-pt-[24px] tw-justify-center tw-items-center max-sm:tw-flex-col tw-flex-row tw-w-[100%] tw-mx-auto tw-mb-[64px]" data-v-366262d2><div class="download-tabar-left tw-w-[60%] max-sm:tw-w-[100%] max-sm:tw-mr-[0] tw-flex tw-flex-col max-sm:tw-justify-center max-sm:tw-items-center tw-justify-start" data-v-366262d2><p class="download-tabar-title tw-text-[#333333] dd-fs-60 tw-font-[700] tw-pb-[15px]" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u8D85\u6162\u8DD1\u8D85\u5065\u5EB7"))}</p><p class="download-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[700]" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u968F\u65F6\u968F\u5730\u5065\u5EB7\u5065\u7F8E"))}</p><div class="download-app tw-pt-[25px]" data-v-366262d2>`);
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
            _push2(ssrRenderComponent(_component_BwButton, {
              class: "download-app-btn tw-w-[120px] tw-flex tw-items-center tw-justify-center",
              active: true,
              onMouseenter: showPopover,
              onClick: togglePopover
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("download.\u4E0B\u8F7DAPP"))}`);
                  _push3(ssrRenderComponent(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-366262d2${_scopeId3}>`);
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("download.\u4E0B\u8F7DAPP")), 1),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BwButton, {
                class: "download-app-btn tw-w-[120px] tw-flex tw-items-center tw-justify-center",
                active: true,
                onMouseenter: showPopover,
                onClick: togglePopover
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("download.\u4E0B\u8F7DAPP")), 1),
                  createVNode(_component_el_icon, { class: "tw-ml-[5px] tw-font-[500]" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
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
            _push2(`<div class="popover-download tw-flex tw-flex-col tw-items-center tw-justify-center" data-v-366262d2${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="tw-w-[125px] tw-mb-[5px]" alt="" data-v-366262d2${_scopeId}><div class="text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]" data-v-366262d2${_scopeId}>${ssrInterpolate(_ctx.$t("download.\u626B\u7801\u4E0B\u8F7D\u8D85\u6162\u8DD1"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "popover-download tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                createVNode("img", {
                  src: _imports_1,
                  class: "tw-w-[125px] tw-mb-[5px]",
                  alt: ""
                }),
                createVNode("div", { class: "text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]" }, toDisplayString(_ctx.$t("download.\u626B\u7801\u4E0B\u8F7D\u8D85\u6162\u8DD1")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><img${ssrRenderAttr("src", _imports_1$1)} class="tw-w-[36.1%] max-sm:tw-w-[69.6%] max-sm:tw-mt-[35px]" data-v-366262d2></div><div class="download-describe tw-rounded-[24px] tw-bg-[#EDFFEE] tw-w-[96.6%] tw-mx-auto tw-mb-[64px]" data-v-366262d2><div class="top-content tw-px-[13.2%] max-xsm:tw-px-[2%] tw-mb-[54px] tw-flex tw-flex-col tw-justify-center tw-items-center" data-v-366262d2><div class="tw-w-[30%] tw-max-w-[133px] tw-h-[16px] tw-rounded-[16px] tw-bg-themecolor tw-mx-auto tw-mt-[54px] tw-mb-[40px]" data-v-366262d2></div><div class="download-describe-header dd-fs-84 tw-mb-[26px]" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u8D85\u6162\u8DD1\u8D85\u5065\u5EB7"))}</div><div class="describe-content-text dd-fs-30" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u8D85\u6162\u8DD1\u8282\u62CD\u5668\u662F\u4E3A\u6240\u6709\u4EBA\u8BBE\u8BA1\u7684\u8DD1\u6B65\u6B65\u9891\u8282\u62CD\u5668\uFF0C\u9002\u5408\u8DD1\u6B65\u521D\u5B66\u8005\u3001\u5065\u5EB7\u51CF\u80A5\u8005\u3001\u60F3\u8981\u63D0\u9AD8\u5FC3\u80BA\u529F\u80FD\u3001\u51CF\u5C11\u8FD0\u52A8\u4F24\u5BB3\u7684\u8DD1\u8005\u3002\u901A\u8FC7\u7CBE\u51C6\u7684\u8282\u62CD\u63A7\u5236\uFF0C\u8D85\u6162\u8DD1\u8282\u62CD\u5668\u5E2E\u52A9\u60A8\u7EF4\u6301\u6052\u5B9A\u7684\u8D85\u6162\u8DD1\u6B65\u9891\uFF0C\u4ECE\u800C\u4F18\u5316\u8DD1\u6B65\u6548\u679C\uFF0C\u8BA9\u60A8\u7684\u6BCF\u4E00\u6B65\u90FD\u5145\u6EE1\u8282\u594F\u611F\u548C\u8212\u9002\u611F\u3002"
      ))}</div></div><div class="bottom-content tw-flex tw-justify-between tw-items-baseline" data-v-366262d2><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-366262d2><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-366262d2><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-366262d2><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-366262d2><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-366262d2></div></div><div class="download-text-describe tw-flex tw-flex-col tw-rounded-[24px] tw-bg-[#FBFBFB] tw-w-[96.6%] tw-mx-auto\xDF tw-px-[118px] max-sm:tw-px-[26px] tw-pt-[48px] tw-pb-[54px]" data-v-366262d2><div class="text-describe-title dd-fs-48-28" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u4E3A\u4EC0\u4E48\u63A8\u8350\u8D85\u6162\u8DD1\uFF1A"))}</div><div class="text-describe-content dd-fs-20" data-v-366262d2><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u8D85\u6162\u8DD1\u7684\u539F\u7406\u57FA\u4E8E\u201C\u4F4E\u5F3A\u5EA6\u3001\u957F\u65F6\u95F4\u201D\u7684\u6709\u6C27\u8FD0\u52A8\u7406\u8BBA\u3002"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u4F4E\u5F3A\u5EA6\u7684\u8FD0\u52A8\u53EF\u4EE5\u4F7F\u5FC3\u7387\u4FDD\u6301\u5728\u6700\u5927\u5FC3\u7387\u768460%-70%\u4E4B\u95F4\uFF0C\u8FD9\u4E00\u533A\u95F4\u88AB\u8BA4\u4E3A\u662F\u6700\u4F73\u7684\u8102\u80AA\u71C3\u70E7\u548C\u5FC3\u80BA\u529F\u80FD\u63D0\u5347\u533A\u95F4\u3002\u5728\u8FD9\u4E2A\u5FC3\u7387\u533A\u95F4\u5185\uFF0C\u8EAB\u4F53\u4E3B\u8981\u4F7F\u7528\u8102\u80AA\u4F5C\u4E3A\u80FD\u91CF\u6765\u6E90\uFF0C\u800C\u975E\u7CD6\u539F\uFF0C\u8FD9\u6709\u52A9\u4E8E\u8102\u80AA\u51CF\u5C11\u548C\u4F53\u91CD\u7BA1\u7406\u3002"
      ))}</div></div><div class="text-describe-title dd-fs-48-28" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u8D85\u6162\u8DD1\u6709\u4EC0\u4E48\u597D\u5904\uFF1A"))}</div><div class="text-describe-content dd-fs-20" data-v-366262d2><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.-\u63D0\u9AD8\u5FC3\u80BA\u529F\u80FD\uFF1A\u957F\u671F\u7684\u8D85\u6162\u8DD1\u53EF\u4EE5\u589E\u5F3A\u5FC3\u810F\u529F\u80FD\uFF0C\u63D0\u9AD8\u6C27\u6C14\u5229\u7528\u7387\u3002"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.-\u51CF\u5C11\u8FD0\u52A8\u4F24\u5BB3\uFF1A\u7531\u4E8E\u8DD1\u6B65\u5F3A\u5EA6\u4F4E\uFF0C\u5BF9\u5173\u8282\u548C\u808C\u8089\u7684\u538B\u529B\u5C0F\uFF0C\u56E0\u6B64\u80FD\u663E\u8457\u964D\u4F4E\u8FD0\u52A8\u4F24\u5BB3\u7684\u98CE\u9669\u3002"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.-\u4FC3\u8FDB\u8102\u80AA\u71C3\u70E7\uFF1A\u5728\u4F4E\u5F3A\u5EA6\u8FD0\u52A8\u4E0B\uFF0C\u8EAB\u4F53\u66F4\u503E\u5411\u4E8E\u4F7F\u7528\u8102\u80AA\u4F5C\u4E3A\u80FD\u6E90\uFF0C\u6709\u52A9\u4E8E\u4F53\u91CD\u63A7\u5236\u548C\u51CF\u80A5\u3002"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.-\u63D0\u9AD8\u7761\u7720\u8D28\u91CF\uFF1A\u89C4\u5F8B\u7684\u8D85\u6162\u8DD1\u53EF\u4EE5\u6539\u5584\u7761\u7720\u8D28\u91CF\uFF0C\u5E2E\u52A9\u8EAB\u4F53\u548C\u5FC3\u7406\u66F4\u597D\u5730\u653E\u677E\u3002"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.-\u589E\u5F3A\u5FC3\u7406\u5065\u5EB7\uFF1A\u6162\u8DD1\u8FC7\u7A0B\u4E2D\uFF0C\u8DD1\u8005\u5F80\u5F80\u80FD\u4EAB\u53D7\u5230\u8DD1\u6B65\u5E26\u6765\u7684\u653E\u677E\u548C\u5FEB\u4E50\uFF0C\u6709\u52A9\u4E8E\u51CF\u5C11\u538B\u529B\u548C\u6291\u90C1\u60C5\u7EEA\u3002"
      ))}</div></div><div class="text-describe-title dd-fs-48-28" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u8D85\u6162\u8DD1\u8282\u62CD\u5668\u6307\u5357\uFF1A"))}</div><div class="text-describe-content dd-fs-20" data-v-366262d2><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u6B65\u9891\u8C03\u97F3\u5668-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u652F\u6301\u6B65\u9891\u8C03\u8282\uFF0C\u6839\u636E\u60A8\u7684\u65E5\u5E38\u4E60\u60EF\u9009\u62E9\u4F60\u7684\u8DD1\u6B65\u6B65\u9891\uFF0C\u5305\u542B\u7206\u706B\u7684180\u6B65\u9891\u6162\u8DD1\u3001150\u6B65\u9891\u3001200\u6B65\u9891\u7B49\u7ECF\u5178\u6B65\u9891\uFF0C\u8FD8\u6709\u51E0\u5341\u79CD\u4E0D\u540C\u901F\u5EA6\u7684\u6B65\u9891\uFF0C\u4E0D\u7BA1\u4F60\u662F\u9A91\u81EA\u884C\u8F66\u8E0F\u9891\uFF0C\u8FD8\u662F\u5065\u8D70\uFF0C\u8FD8\u662F\u5FEB\u8DD1\uFF0C\u603B\u6709\u4E00\u6B3E\u9002\u5408\u4F60\uFF0C\u5FEB\u5B9A\u5236\u4F60\u7684\u8DD1\u6B65\u8282\u62CD\u5427"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u8D85\u6162\u8DD1\u8282\u62CD-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u8D85\u591A\u8DD1\u6B65\u8282\u62CD\u97F3\u4E50\u4F9B\u9009\u62E9\uFF0C\u8DDF\u7740\u8282\u62CD\u4E00\u6B65\u4E00\u6B65\u8DD1\uFF0C\u4E0D\u4F24\u819D\u76D6\u3002\u97F3\u4E50\u4E0E\u8282\u62CD\u7684\u7ED3\u5408\uFF0C\u8FB9\u8DD1\u6B65\u8FB9\u4EAB\u53D7\uFF0C\u8BA9\u8DD1\u6B65\u5145\u6EE1\u4E50\u8DA3~"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u8BA1\u6B65\u5668-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u4F60\u53EA\u7BA1\u8DD1\uFF0C\u6570\u636E\u4EA4\u7ED9\u6211\u4EEC\uFF0C\u6BCF\u6B21\u6162\u8DD1\u90FD\u4F1A\u5E2E\u4F60\u8BB0\u5F55\u6B65\u6570\u3001\u516C\u91CC\u6570\u3001\u6D88\u8017\u7684\u5361\u8DEF\u91CC\u3001\u8DD1\u6B65\u65F6\u95F4~"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u5012\u6570\u8BA1\u65F6\u5668-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u6BCF\u5929\u4E00\u4E2A\u5C0F\u76EE\u6807\uFF0C\u8BBE\u7F6E\u953B\u70BC\u65F6\u95F4\uFF0C\u5373\u53EF\u542F\u52A8\u8D85\u6162\u8DD1\u8BA1\u65F6\u5668\uFF0C\u5B9A\u65F6\u63D0\u9192\uFF01"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u6570\u636E\u5206\u6790-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u8A73\u7D30\u8A18\u9304\u60A8\u7684\u8DD1\u6B65\u6578\u64DA\uFF0C\u5305\u62EC\u901F\u5EA6\u3001\u6B65\u983B\u3001\u8DD1\u6B65\u6642\u9593\u548C\u6D88\u8017\u7684\u5361\u8DEF\u91CC\uFF0C\u4E26\u901A\u904E\u5716\u8868\u548C\u5206\u6790\u5831\u544A\u5C55\u793A\u60A8\u7684\u9032\u6B65\u3002"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u5B9A\u5236\u901A\u77E5-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u60F3\u8FD0\u52A8\u53C8\u6015\u5FD8\u8BB0\u600E\u4E48\u529E\uFF1F\u8D85\u6162\u8DD1\u8282\u62CD\u5668\u652F\u6301\u5B9A\u5236\u901A\u77E5\u54E6\uFF0C\u5468\u4E00\u5230\u5468\u65E5\u6BCF\u5929\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u8FD0\u52A8\u63D0\u9192\uFF0C\u5230\u70B9\u5B9A\u65F6\u8FD0\u52A8\u63D0\u9192\uFF0C\u4E0D\u6015\u5FD8\u8BB0~"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.-\u514D\u8D39\u65E0\u5E7F-"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u7EFF\u8272\u5B89\u5168\uFF0C\u7EAF\u7CB9\u65E0\u5E7F\uFF0C\u514D\u8D39\u54D2\uFF01\u51B2\u9E2D~"))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t(
        "download.\u4E00\u592915\u5206\u9418\uFF0C\u4E0D\u5598\u4E0D\u7D2F\u3001\u5F37\u5316\u5FC3\u80BA\uFF0C\u4E0D\u7BA1\u4F60\u8981\u953B\u70BC\u8EAB\u4F53\uFF0C\u8FD8\u662F\u8981\u5065\u8EAB\u51CF\u80A5\uFF0C\u8D85\u6162\u8DD1\u8282\u62CD\u5668\u90FD\u662F\u4F60\u4E0D\u4E8C\u9009\u62E9\uFF0C\u51B2\u9E2D~"
      ))}</div><div class="text" data-v-366262d2>${ssrInterpolate(_ctx.$t("download.\u7ACB\u5373\u4E0B\u8F7D\uFF0C\u6539\u53D8\u4ECE\u73B0\u5728\u5F00\u59CB\uFF01"))}</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/download.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __VUE_DEFAULT__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-366262d2"]]);

export { __VUE_DEFAULT__ as default };
//# sourceMappingURL=download-RlFGSm92.mjs.map

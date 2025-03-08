import { defineComponent, ref, computed, mergeProps, unref, createVNode, render, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, b as getArticleInfo } from './home-CsjBWASq.mjs';
import { N as setPageLayout, M as useRoute, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BwGoodsRow",
  __ssrInlineRender: true,
  props: {
    goodsRow: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "goods-row" }, _attrs))} data-v-90907ebb><div class="goods-img" data-v-90907ebb><img${ssrRenderAttr("src", __props.goodsRow.cover)} alt="" data-v-90907ebb></div><div class="goods-next" data-v-90907ebb><div class="goods-title" data-v-90907ebb>${ssrInterpolate(__props.goodsRow.title)}</div><div class="goods-buy" data-v-90907ebb><div class="goods-price" data-v-90907ebb><span data-v-90907ebb>\xA5</span> ${ssrInterpolate((_a = (__props.goodsRow.price || 0) / 100) == null ? void 0 : _a.toFixed(2))}</div><div class="goods-tobuy" data-v-90907ebb>${ssrInterpolate(_ctx.$t("common.\u7ACB\u5373\u8D2D\u4E70"))}</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("composables/goods/BwGoodsRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BwGoodsRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90907ebb"]]);
const genreContent = (text, goodsList) => {
  const goodsMap = {};
  let count = 0;
  const content = text.replace(/##insert_goods##/g, () => {
    const className = `goods-${count}`;
    goodsMap[className] = goodsList[count++];
    if (count > goodsList.length) {
      count = 0;
    }
    return `<div class="${className}"></div>`;
  });
  setTimeout(() => {
    for (const className in goodsMap) {
      const dom = (void 0).querySelector(`.${className}`);
      const instance = createVNode(BwGoodsRow, {
        goodsRow: goodsMap[className]
      });
      render(instance, dom);
    }
  });
  return content;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "info-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    setPageLayout("none");
    const route = useRoute();
    const id = route.params.id;
    const articleInfo = ref({});
    const getArticleInfoById = async () => {
      articleInfo.value = await getArticleInfo(id);
    };
    const contentHtml = computed(
      () => {
        var _a;
        return genreContent(((_a = articleInfo.value) == null ? void 0 : _a.content) || "", articleInfo.value.relGoods);
      }
    );
    useAsyncData("info", getArticleInfoById);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-px-[1rem] tw-py-[0.5rem]" }, _attrs))}>`);
      if (unref(articleInfo).cover) {
        _push(`<img class="tw-w-full tw-object-contain tw-mb-[1.25rem]"${ssrRenderAttr("src", unref(articleInfo).cover)}${ssrRenderAttr("alt", unref(articleInfo).title)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="tw-text-basecolor tw-font-[500] tw-text-[1.25rem] tw-mb-[1rem]">${ssrInterpolate(unref(articleInfo).title)}</h1><div>${(_a = unref(contentHtml)) != null ? _a : ""}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/moblie/info-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=info-_id_-pnjJ9t1W.mjs.map

import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { b as getArticleInfo } from './home-BPk0mUbK.mjs';
import { f as useRoute } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id].html",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const articleInfo = ref({});
    const getArticleInfoById = async () => {
      articleInfo.value = await getArticleInfo(id);
    };
    getArticleInfoById();
    console.log(articleInfo);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dd-container" }, _attrs))}><h1>${ssrInterpolate(unref(articleInfo).title)}</h1><div>${(_a = unref(articleInfo).content) != null ? _a : ""}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[lang]/post/[id].html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.html-CCjW7jKy.mjs.map

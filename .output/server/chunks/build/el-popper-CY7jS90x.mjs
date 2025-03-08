import { warn, defineComponent, computed, createElementBlock, openBlock, mergeProps, unref, renderSlot } from 'vue';
import { s as shared_cjs_prodExports, k as isNumber$1, l as isStringNumber, g as useNamespace, o as isUndefined } from './server.mjs';

function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => shared_cjs_prodExports.isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!shared_cjs_prodExports.isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (shared_cjs_prodExports.hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (shared_cjs_prodExports.hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallDirective = (directive, name) => {
  directive.install = (app) => {
    app.directive(name, directive);
  };
  return directive;
};
const withNoopInstall = (component) => {
  component.install = shared_cjs_prodExports.NOOP;
  return component;
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber$1(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (shared_cjs_prodExports.isString(value)) {
    return value;
  }
}
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__ = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);

export { ElIcon as E, _export_sfc as _, withInstallDirective as a, buildProps as b, addUnit as c, withNoopInstall as d, definePropType as e, buildProp as f, fromPairs as g, withInstall as w };
//# sourceMappingURL=el-popper-CY7jS90x.mjs.map

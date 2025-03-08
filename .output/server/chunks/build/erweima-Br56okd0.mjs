import { defineComponent, computed, ref, unref, createBlock, openBlock, mergeProps, withCtx, renderSlot, createCommentVNode, createElementBlock, normalizeClass, toDisplayString, createTextVNode } from 'vue';
import { E as ElTooltip, u as useTooltipContentProps, d as dropdownProps, a as useTooltipTriggerProps } from './dropdown-D5ZlVybY.mjs';
import { w as withInstall, a as withInstallDirective, _ as _export_sfc, b as buildProps, c as addUnit } from './el-popper-CY7jS90x.mjs';
import { f as isBoolean$1, g as useNamespace } from './server.mjs';

const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean$1(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};
const updateEventKeyRaw = `onUpdate:visible`;
const __default__ = defineComponent({
  name: "ElPopover"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popoverProps,
  emits: popoverEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const onUpdateVisible = computed(() => {
      return props[updateEventKeyRaw];
    });
    const ns = useNamespace("popover");
    const tooltipRef = ref();
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const style = computed(() => {
      return [
        {
          width: addUnit(props.width)
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    expose({
      popperRef,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef
      }, _ctx.$attrs, {
        trigger: _ctx.trigger,
        placement: _ctx.placement,
        disabled: _ctx.disabled,
        visible: _ctx.visible,
        transition: _ctx.transition,
        "popper-options": _ctx.popperOptions,
        tabindex: _ctx.tabindex,
        content: _ctx.content,
        offset: _ctx.offset,
        "show-after": _ctx.showAfter,
        "hide-after": _ctx.hideAfter,
        "auto-close": _ctx.autoClose,
        "show-arrow": _ctx.showArrow,
        "aria-label": _ctx.title,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "popper-class": unref(kls),
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        "gpu-acceleration": unref(gpuAcceleration),
        "onUpdate:visible": unref(onUpdateVisible),
        onBeforeShow: beforeEnter,
        onBeforeHide: beforeLeave,
        onShow: afterEnter,
        onHide: afterLeave
      }), {
        content: withCtx(() => [
          _ctx.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("title")),
            role: "title"
          }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]);
    };
  }
});
var Popover = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "popover.vue"]]);
const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";
const ElPopoverDirective = withInstallDirective(PopoverDirective, VPopover);
const ElPopover = withInstall(Popover, {
  directive: ElPopoverDirective
});
const _imports_1 = "data:image/png;base64,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";

export { ElPopover as E, _imports_1 as _ };
//# sourceMappingURL=erweima-Br56okd0.mjs.map

<script setup>
import { props } from "@/components/atoms/Button/props.js";
import "@/components/atoms/Button/style.scss";
import { reactive, defineEmits, computed, watch } from "vue";

const _props = defineProps(props);
const emit = defineEmits(["clicked"]);
const states = reactive({
  active: _props.forceActive,
});
watch(
  () => _props.forceActive,
  (val) => {
    states.active = val;
  }
);
const handleClick = () => {
  states.active = _props.forceActive ? _props.forceActive : !states.active;
  emit("clicked", states.active);
};
const handleModifier = computed(() =>
  states.active ? "atomsButton--active" : null
);
const handleType = computed(() =>
  _props.type ? `atomsButton--${_props.type}` : null
);
const handleRounded = computed(() =>
  _props.rounded ? `atomsButton--rounded` : null
);
</script>
<template>
  <button
    @click="handleClick"
    :class="['atomsButton', handleModifier, handleType, handleRounded]"
  >
    {{ text }}
    <slot />
  </button>
</template>

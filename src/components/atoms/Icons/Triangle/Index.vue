<script setup>
import { props } from "@/components/atoms/Icons/Triangle/props.js";
import "@/components/atoms/Icons/Triangle/style.scss";
import { computed } from "vue";
const _props = defineProps(props);
const handleModifier = computed(() =>
  _props.rotate ? "atomsIconsTriangle--rotate" : null
);
const setColor = computed(() => ({
  borderTop: `4px solid ${_props.color ? `var(--${_props.color})` : null}`,
}));
</script>
<template>
  <div :style="setColor" :class="['atomsIconsTriangle', handleModifier]"></div>
</template>

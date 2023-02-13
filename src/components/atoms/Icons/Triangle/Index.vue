<script setup>
import { props } from "@/components/atoms/Icons/Triangle/props.js";
import "@/components/atoms/Icons/Triangle/style.scss";
import { computed } from "vue";
const _props = defineProps(props);
const handleModifier = computed(() => (_props.rotate ? "rotate" : null));
</script>
<template>
  <div v-bem:atomsIconsTriangle="handleModifier"></div>
</template>

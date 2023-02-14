<script setup>
import { props } from "@/components/atoms/Image/props.js";
import "@/components/atoms/Image/style.scss";

const _props = defineProps(props);
</script>
<template>
  <img class="atomsImage" :width="width" :height="height" :src="source" />
</template>

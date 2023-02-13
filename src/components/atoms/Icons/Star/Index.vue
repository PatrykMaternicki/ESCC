<script setup>
import { props } from "@/components/atoms/Icons/Star/props.js";
import "@/components/atoms/Icons/Star/style.scss";
const _props = defineProps(props);
</script>
<template>
  <div v-bem:atomsIconsStar>
    <div v-bem:atomsIconsStar__empty></div>
    <div
      v-show="modifier === 'full'"
      v-bem:atomsIconsStar__full
      :style="{ width: _props.width }"
    ></div>
  </div>
</template>

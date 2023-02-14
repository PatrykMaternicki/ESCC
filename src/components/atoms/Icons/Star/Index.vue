<script setup>
import { props } from "@/components/atoms/Icons/Star/props.js";
import "@/components/atoms/Icons/Star/style.scss";
const _props = defineProps(props);
</script>
<template>
  <div class="atomsIconsStar">
    <div class="atomsIconsStar__empty"></div>
    <div
      v-show="modifier === 'full'"
      class="atomsIconsStar__full"
      :style="{ width: `${width}` }"
    ></div>
  </div>
</template>

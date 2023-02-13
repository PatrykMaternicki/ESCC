<script setup>
import { props } from "@/components/atoms/Button/props.js";
import "@/components/atoms/Button/style.scss";
import { reactive, defineEmits, computed } from "vue";

const _props = defineProps(props);
const emit = defineEmits(["clicked"]);
const states = reactive({
  active: _props.active,
});
const handleClick = () => {
  states.active = !states.active;
  emit("clicked", states.active);
};
const handleModifier = computed(() => (states.active ? "active" : null));
</script>
<template>
  <button @click="handleClick" v-bem:atomsButton="handleModifier">
    {{ text }}
    <slot />
  </button>
</template>

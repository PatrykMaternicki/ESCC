<script setup>
import { props } from "@/components/atoms/Forms/props.js";
import "@/components/atoms/Forms/Text/style.scss";
import { ref } from "vue";

const _props = defineProps(props);
const model = ref("");
</script>
<template>
  <div class="atomsFormsText">
    <label :for="value" class="atomsFormsText__label">
      {{ label }}
    </label>
    <input
      :id="value"
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="atomsFormsText__input"
      @input="$emit(`update:${value}`, $event.target.value)"
    />
  </div>
</template>

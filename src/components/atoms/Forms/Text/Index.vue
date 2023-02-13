<script setup>
import { props } from "@/components/atoms/Forms/Text/props.js";
import "@/components/atoms/Forms/Text/style.scss";
import { reactive, defineEmits, computed, ref } from "vue";

const _props = defineProps(props);
const model = ref("");
</script>
<template>
  <div v-bem:atomsFormsText>
    <label :for="value" v-bem:atomsFormsText__label>
      {{ label }}
    </label>
    <input
      :id="value"
      type="text"
      v-model="model"
      :placeholder="placeholder"
      v-bem:atomsFormsText__input
      @input="$emit(`update:${value}`, $event.target.value)"
    />
  </div>
</template>

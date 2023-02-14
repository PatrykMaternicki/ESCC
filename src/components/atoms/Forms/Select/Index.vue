<script setup>
import { props } from "@/components/atoms/Forms/props.js";
import { props as additionalProps } from "@/components/atoms/Forms/Select/props.js";
import "@/components/atoms/Forms/Select/style.scss";
import AtomsIconsTriangle from "@/components/atoms/Icons/Triangle/Index.vue";

import { ref, defineEmits, computed } from "vue";

const _props = defineProps(Object.assign(props, additionalProps));

const emits = defineEmits(["changed"]);
const model = ref(_props.defaultValue);
const active = ref(false);
const handleClickOutside = () => active.value = false
const getCategories = computed(() =>
  _props.filterable
    ? _props.options.filter((option) => option.includes(model.value))
    : _props.options
);
const handleClick = (option) => {
  model.value = option;
  active.value = false;
  emits(`change-${_props.value}`, model.value);
};
</script>
<template>
  <div v-bem:atomsFormsSelect v-click-outside="handleClickOutside">
    <label :for="value" v-bem:atomsFormsSelect__label>
      {{ label }}
    </label>
    <div v-bem:atomsFormsSelect__wrapper>
      <input
        :id="value"
        type="text"
        v-model="model"
        :placeholder="placeholder"
        v-bem:atomsFormsSelect__input
        @click="active = true"
      />
      <div v-bem:atomsFormsSelect__triangleWrapper>
        <AtomsIconsTriangle
          :rotate="active"
          :color="active ? 'primary' : 'secondary'"
        />
      </div>
    </div>
    <ul
      v-if="getCategories.length > 0 && active"
      v-bem:atomsFormsSelect__options
    >
      <li
        :key="index"
        v-for="(option, index) in getCategories"
        v-bem:atomsFormsSelect__item
        @click="handleClick(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

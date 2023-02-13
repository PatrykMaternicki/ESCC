<script setup>
import { props } from "@/components/molecules/cards/WithImage/props.js";
import AtomsImage from "@/components/atoms/Image/Index.vue";

import "@/components/molecules/Cards/WithImage/style.scss";

const _props = defineProps(props);
</script>
<template>
  <div v-bem:moleculesCardsWithImage>
    <AtomsImage :source="source" />
    <div v-bem:moleculesCardsWithImage__container>
      <h2 v-bem:moleculesCardsWithImage__title v-if="title">{{ title }}</h2>
      <p v-bem:moleculesCardsWithImage__content v-if="content">{{ content }}</p>
      <slot name="bottom"> </slot>
    </div>
  </div>
</template>

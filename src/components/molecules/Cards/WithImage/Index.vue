<script setup>
import { props } from "@/components/molecules/cards/WithImage/props.js";
import AtomsImage from "@/components/atoms/Image/Index.vue";
import AtomsIconsStar from "@/components/atoms/Icons/Star/Index.vue";
import { computed } from "vue";

import "@/components/molecules/Cards/WithImage/style.scss";

const calculateDiscount = computed(() =>
  Number.parseInt(
    _props.price - (_props.price * _props.discountPercentage) / 100
  )
);

const trancated = computed(() => _props.content.substring(0, 40).concat("..."));

const _props = defineProps(props);
</script>
<template>
  <div class="moleculesCardsWithImage">
    <AtomsImage :source="source" />
    <div class="moleculesCardsWithImage__container">
      <h2 class="moleculesCardsWithImage__title" v-if="title">{{ title }}</h2>
      <p class="moleculesCardsWithImage__content" v-if="content">
        {{ trancated }}
      </p>
      <div class="moleculesCardsWithImage__bottomContainer">
        <div>
          <p class="moleculesCardsWithImage__price" v-if="price">
            $ {{ calculateDiscount }}
          </p>
          <p class="moleculesCardsWithImage__priceUnderline">$ {{ price }}</p>
        </div>
        <div>
          <AtomsIconsStar
            :key="i"
            v-for="i in 5"
            :modifier="Math.ceil(rating) >= i ? 'full' : 'empty'"
            :width="
              rating < i
                ? `${100 - Number.parseFloat((5 - rating) * 100)}%`
                : null
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

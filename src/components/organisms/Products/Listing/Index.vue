<script setup>
import { props } from "@/components/organisms/Products/Listing/props.js";
import MoleculesCardsWithImage from "@/components/molecules/Cards/WithImage/Index.vue";
defineProps(props);
</script>

<template>
  <div v-bem:OrganismsProductsListing>
    <MoleculesCardsWithImage
      :key="item.id"
      :content="item.description"
      :source="item.thumbnail"
      :title="item.title"
      :price="item.price"
      :discount-percentage="item.discountPercentage"
      :rating="item.rating"
      v-for="item in products"
    >
    </MoleculesCardsWithImage>
  </div>
</template>

<script setup>
import { props } from "@/components/organisms/Products/Listing/props.js";
import "@/components/organisms/Products/Listing/style.scss";
import MoleculesCardsWithImage from "@/components/molecules/Cards/WithImage/Index.vue";
defineProps(props);
</script>

<template>
  <div class="organismsProductsListing">
    <MoleculesCardsWithImage
      v-for="item in products"
      :key="item.id"
      :content="item.description"
      :source="item.thumbnail"
      :title="item.title"
      :price="item.price"
      :discount-percentage="item.discountPercentage"
      :rating="item.rating"
    />
  </div>
</template>

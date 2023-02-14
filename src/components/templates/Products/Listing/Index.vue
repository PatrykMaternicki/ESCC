<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores";
import OrganismsProductsListing from "@/components/organisms/Products/Listing/Index.vue";
import OrganismsProdctsTop from "@/components/organisms/Products/Top/Index.vue";

const mainStore = useMainStore();
onMounted(async () => {
  await mainStore.findProductsByPhrase();
  await mainStore.getCategories();
});

const resData = computed(() => mainStore.resData);
const products = computed(() => mainStore.products);
const categories = computed(() => mainStore.categories);
</script>

<template>
  <OrganismsProdctsTop
    :categories="categories"
    @change-category="mainStore.findProductByCategory($event)"
    @search="mainStore.findProductsByPhrase($event)"
    @sort-by="mainStore.sortProductBy($event)"
    @reset-sort="mainStore.resetSort()"
  />
  <OrganismsProductsListing :products="products" />
</template>

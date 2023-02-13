<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores";
import OrganismsProductsListing from "@/components/organisms/Products/Listing/Index.vue";

const mainStore = useMainStore();
onMounted(async () => await mainStore.findProductsByPhrase());

const resData = computed(() => mainStore.resData);
const products = computed(() => mainStore.products);
</script>

<template>
  <Suspense>
    <OrganismsProductsListing :products="products" />
    <template #fallback> loading data... </template>
  </Suspense>
</template>

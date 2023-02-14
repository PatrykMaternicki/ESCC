<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores";
import OrganismsProductsListing from "@/components/organisms/Products/Listing/Index.vue";
import OrganismsProdctsTop from "@/components/organisms/Products/Top/Index.vue";
import OrganismsProductsBottom from "@/components/organisms/Products/Bottom/Index.vue";

const mainStore = useMainStore();
onMounted(async () => {
  await mainStore.findProductsByPhrase();
  await mainStore.getCategories();
});

const resData = computed(() => mainStore.resData);
const products = computed(() => mainStore.products);
const categories = computed(() => mainStore.categories);
const total = computed(() => mainStore.total);
const limit = computed(() => mainStore.limit);
const pages = computed(() => mainStore.pages);
const currentPage = computed(() => mainStore.currentPage);
</script>

<template>
  <OrganismsProdctsTop
    :categories="categories"
    :total="total"
    :limit="limit"
    @change-category="mainStore.findProductByCategory($event)"
    @search="mainStore.setPhrase($event)"
    @sort-by="mainStore.sortProductBy($event)"
    @reset-sort="mainStore.resetSort()"
  />
  <OrganismsProductsListing :products="products" />
  <OrganismsProductsBottom
    @change-limit="mainStore.changeLimit($event)"
    @change-page="mainStore.changePage($event)"
    @previous-page="mainStore.previousPage()"
    @next-page="mainStore.nextPage()"
    :pages="pages"
    :current-page="currentPage"
  />
</template>

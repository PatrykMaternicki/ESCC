<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores";
import { usePaginationStore } from "@/stores/pagination";
import "@/components/templates/Products/Listing/style.scss";
import OrganismsProductsListing from "@/components/organisms/Products/Listing/Index.vue";
import OrganismsProdctsTop from "@/components/organisms/Products/Top/Index.vue";
import OrganismsProductsBottom from "@/components/organisms/Products/Bottom/Index.vue";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const paginationStore = usePaginationStore();
onMounted(async () => {
  await mainStore.findProductsByPhrase();
  await mainStore.getCategories();
});

const { products, categories } = storeToRefs(mainStore);
const { limit, displayLimit, currentPage, total, pages } =
  storeToRefs(paginationStore);
</script>

<template>
  <div class="templatesProductsListing">
    <OrganismsProdctsTop
      :categories="categories"
      :total="total"
      :limit="displayLimit"
      @change-category="mainStore.findProductByCategory($event)"
      @search="mainStore.setPhrase($event)"
      @sort-by="mainStore.sortProductBy($event)"
      @reset-sort="mainStore.resetSort()"
    />
    <OrganismsProductsListing :products="products" />
    <OrganismsProductsBottom
      @change-limit="paginationStore.changeLimit($event)"
      @change-page="paginationStore.changePage($event)"
      @previous-page="paginationStore.previousPage()"
      @next-page="paginationStore.nextPage()"
      :pages="pages"
      :current-page="currentPage"
    />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import AtomsButtons from "@/components/atoms/Button/Index.vue";
import AtomsIconsTriangle from "@/components/atoms/icons/Triangle/Index.vue";
import AtomsFormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
import { reactive, ref } from "vue";

const states = reactive({
  sortClicked: false,
  categories: [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ],
});
const searchText = ref("");
const searchCategory = ref("");
</script>

<template>
  <div>
    <AtomsButtons
      @clicked="states.sortClicked = $event"
      :active="states.sortClicked"
    >
      <AtomsIconsTriangle :cache="sortClicked" :rotate="states.sortClicked" />
    </AtomsButtons>
    {{ searchText }}
    <AtomsIconsTriangle :cache="sortClicked" :rotate="states.sortClicked" />
    <AtomsFormsText
      v-model:searchbar="searchText"
      label="Search:"
      value="searchbar"
      placeholder="What are you looking for?"
    />
    lololo {{ searchCategory }}
    <AtomsFormsSelect
      v-model:category="searchCategory"
      label="Category:"
      value="category"
      placeholder="Select Category"
      :options="states.categories"
    />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

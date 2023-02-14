<script setup>
import { props } from "@/components/organisms/Products/Top/props.js";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
import AtomsFormsText from "@/components/atoms/Forms/Text/Index.vue";
import AtomsButtons from "@/components/atoms/Button/Index.vue";
import AtomsIconsTriangle from "@/components/atoms/icons/Triangle/Index.vue";

import "@/components/organisms/Products/Top/style.scss";
import { reactive } from "vue";
defineProps(props);

const emit = defineEmits(["sortByNumber", "resetSort"]);
const states = reactive({
  counts: {
    price: 0,
    stock: 0,
    rating: 0,
  },
});

const increaseCount = (key) => states.counts[key]++;
const resetCount = (key) => (states.counts[key] = 0);
const isMoreThan2 = (key) => states.counts[key] > 2;
const showTriangle = (key) =>
  states.counts[key] <= 2 && states.counts[key] !== 0
    ? "organismsProductsTop__triangleWrapper--show"
    : null;
const rotateTriangle = (key) => states.counts[key] === 2;
const emitSort = (key) => emit("sortBy", { key, value: states.counts[key] });

const doStock = () => {
  increaseCount("stock");
  emitSort("stock");
  resetCount("price");
  resetCount("rating");
  if (isMoreThan2("stock")) {
    resetCount("stock");
    emit("resetSort");
  }
};

const doPrice = () => {
  increaseCount("price");
  emitSort("price");
  resetCount("stock");
  resetCount("rating");
  if (isMoreThan2("price")) {
    resetCount("price");
    emit("resetSort");
  }
};

const doRating = () => {
  increaseCount("rating");
  emitSort("rating");
  resetCount("stock");
  resetCount("price");
  if (isMoreThan2("rating")) {
    resetCount("rating");
    emit("resetSort");
  }
};
</script>

<template>
  <div class="organismsProductsTop">
    <h1 class="organismsProductsTop__title">Frontend Challenge</h1>
    <div class="organismsProductsTop__inputWrapper">
      <div class="organismsProductsTop__searchWrapper">
        <AtomsFormsText
          @update:searchbar="$emit('search', $event)"
          label="Search:"
          value="searchbar"
          placeholder="What are you looking for?"
        />
      </div>

      <div class="organismsProductsTop__categoryWrapper">
        <AtomsFormsSelect
          @change-categories="$emit('change-category', $event)"
          label="Category:"
          value="categories"
          placeholder="Select Category"
          :options="categories"
        />
      </div>
    </div>
    <hr class="organismsProductsTop__line" />
    <div class="organismsProductsTop__buttonContainer">
      <div>
        <div class="organismsProductsTop__buttonsWrapper">
          <AtomsButtons
            @clicked="doPrice"
            :force-active="
              states.counts.price <= 2 && states.counts.price !== 0
            "
            text="price"
          >
            <div
              :class="[
                'organismsProductsTop__triangleWrapper',
                showTriangle('price'),
              ]"
            >
              <AtomsIconsTriangle :rotate="rotateTriangle('price')" />
            </div>
          </AtomsButtons>
        </div>

        <div class="organismsProductsTop__buttonsWrapper">
          <AtomsButtons
            @clicked="doStock"
            :force-active="
              states.counts.stock <= 2 && states.counts.stock !== 0
            "
            text="stock"
          >
            <div
              :class="[
                'organismsProductsTop__triangleWrapper',
                showTriangle('stock'),
              ]"
            >
              <AtomsIconsTriangle :rotate="rotateTriangle('stock')" />
            </div>
          </AtomsButtons>
        </div>

        <div class="organismsProductsTop__buttonsWrapper">
          <AtomsButtons
            @clicked="doRating"
            :force-active="
              states.counts.rating <= 2 && states.counts.rating !== 0
            "
            text="rating"
          >
            <div
              :class="[
                'organismsProductsTop__triangleWrapper',
                showTriangle('rating'),
              ]"
            >
              <AtomsIconsTriangle :rotate="rotateTriangle('rating')" />
            </div>
          </AtomsButtons>
        </div>
      </div>
      <div>
        <p class="organismsProductsTop__total">{{ limit }} of {{ total }}</p>
      </div>
    </div>
  </div>
</template>

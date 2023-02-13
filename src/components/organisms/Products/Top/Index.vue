<script setup>
import { props } from "@/components/organisms/Products/Top/props.js";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
import AtomsFormsText from "@/components/atoms/Forms/Text/Index.vue";
import "@/components/organisms/Products/Top/style.scss";
defineProps(props);
</script>

<template>
  <div v-bem:organismsProductsListing>
    <div>
      <AtomsFormsSelect
        @change-categories="$emit('change-category', $event)"
        label="Category:"
        value="categories"
        placeholder="Select Category"
        :options="categories"
      />

      <AtomsFormsText
        @update:searchbar="$emit('search', $event)"
        label="Search:"
        value="searchbar"
        placeholder="What are you looking for?"
      />
    </div>
  </div>
</template>

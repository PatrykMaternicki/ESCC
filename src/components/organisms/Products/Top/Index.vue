<script setup>
import { props } from "@/components/organisms/Products/Top/props.js";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
import "@/components/organisms/Products/Top/style.scss";
import { ref } from "vue";
defineProps(props);
defineEmits(["change-category"]);
const searchCategory = ref("");
</script>

<template>
  <div v-bem:organismsProductsListing>
    <div>
      {{ searchCategory }}
      <AtomsFormsSelect
        @change-categories="($event) => $emit('change-category', $event)"
        label="Category:"
        value="categories"
        placeholder="Select Category"
        :options="categories"
      />
    </div>
  </div>
</template>

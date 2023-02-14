<script setup>
import "@/components/organisms/Products/Bottom/style.scss";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
</script>
<template>
  <div v-bem:organismsProductsBottom>
    <div v-bem:organismsProductsBottom__limitWrapper>
      <AtomsFormsSelect
        @change-limit="$emit('change-limit', $event)"
        default-value="10"
        :filterable="false"
        value="limit"
        :options="['10', '25', '50', '100']"
      />
    </div>
  </div>
</template>

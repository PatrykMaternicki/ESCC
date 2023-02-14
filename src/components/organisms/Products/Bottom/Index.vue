<script setup>
import "@/components/organisms/Products/Bottom/style.scss";
import AtomsFormsSelect from "@/components/atoms/Forms/Select/Index.vue";
import MoleculesNavigationsPagination from "@/components/molecules/Navigations/Pagination/Index.vue";
import { props } from "@/components/organisms/Products/Bottom/props.js";

defineProps(props);
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
    <molecules-navigations-pagination
      @change-page="$emit('change-page', $event)"
      @previous-page="$emit('previous-page', $event)"
      @next-page="$emit('next-page', $event)"
      :pages="pages"
      :current-page="currentPage"
    />
  </div>
</template>

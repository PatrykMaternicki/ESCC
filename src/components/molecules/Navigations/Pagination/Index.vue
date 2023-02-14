<script setup>
import "@/components/molecules/Navigations/Pagination/style.scss";
import { props } from "@/components/molecules/Navigations/Pagination/props.js";
import AtomsButtons from "@/components/atoms/Button/Index.vue";
import { computed } from "vue";

const _props = defineProps(props);

const startPage = () => {
  if (_props.currentPage === 0) {
    return 1;
  }

  if (_props.currentPage === _props.pages) {
    return _props.pages - 5 + 1;
  }

  return _props.currentPage - 1;
};

const endPage = () => {
  return Math.min(startPage() + 5 - 1, _props.pages);
};

const pages = () => {
  const range = [];

  for (let i = startPage(); i <= endPage(); i += 1) {
    range.push(i);
  }

  return range;
};
</script>
<template>
  <div v-bem:moleculesNavigationsPagination>
    <div v-bem:moleculesNavigationsPagination__button>
      <atoms-buttons
        text="<"
        type="outline"
        :rounded="true"
        @click="$emit('previous-page')"
      />
    </div>
    <div
      v-for="i in pages()"
      :key="i"
      v-bem:moleculesNavigationsPagination__button
    >
      <atoms-buttons
        @click="$emit('change-page', i - 1)"
        :text="i"
        type="outline"
        :force-active="currentPage + 1 === i"
        :rounded="true"
      />
    </div>
    <div v-bem:moleculesNavigationsPagination__button>
      <atoms-buttons
        type="outline"
        text=">"
        :rounded="true"
        @click="$emit('next-page')"
      />
    </div>
  </div>
</template>

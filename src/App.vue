<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import AtomsButtons from "@/components/atoms/Button/Index.vue";
import AtomsIconsTriangle from "@/components/atoms/icons/Triangle/Index.vue";
import AtomsFormsSelect from "@/components/atoms/Forms/Text/Index.vue";
import { reactive, ref } from "vue";

const states = reactive({
  sortClicked: false,
});
const searchText = ref("");
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
    <AtomsFormsSelect
      v-model:searchbar="searchText"
      label="Search:"
      value="searchbar"
      placeholder="What are you looking for?"
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

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import AtomsButtons from "@/components/atoms/Button/Index.vue";
import AtomsIconsTriangle from "@/components/atoms/icons/Triangle/Index.vue";
import { reactive } from "vue";

const states = reactive({
  sortClicked: false,
});
</script>

<template>
  <div>
    <AtomsButtons
      @clicked="states.sortClicked = $event"
      :active="states.sortClicked"
    >
      <AtomsIconsTriangle :cache="sortClicked" :rotate="states.sortClicked" />
    </AtomsButtons>
    <AtomsIconsTriangle :cache="sortClicked" :rotate="states.sortClicked" />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

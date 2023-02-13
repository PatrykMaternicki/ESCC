import { createApp } from "vue";
import "@/assets/scss/index.scss";
import { beforeMount, updated } from "@/directives/bem.js";

import App from "./App.vue";

const app = createApp(App);
app.directive("bem", {
  beforeMount,
  updated,
});
app.mount("#app");

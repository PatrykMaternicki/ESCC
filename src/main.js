import { createApp } from "vue";
import "./style.css";
import { beforeMount } from "@/directives/bem.js";

import App from "./App.vue";

const app = createApp(App);
app.directive("bem", {
  beforeMount,
});
app.mount("#app");

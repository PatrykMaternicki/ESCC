import { createApp } from "vue";
import "@/assets/scss/index.scss";
import { beforeMount, updated } from "@/directives/bem.js";
import { clickOutside } from "@/directives/clickOutside.js";
import { createPinia } from "pinia";

import App from "./App.vue";

createApp(App)
  .use(createPinia())
  .directive("bem", {
    beforeMount,
    updated,
  })
  .directive("click-outside", clickOutside)
  .mount("#app");

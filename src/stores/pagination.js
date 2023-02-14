import { defineStore } from "pinia";
import { useMainStore } from "@/stores/index";

export const usePaginationStore = defineStore("pagination", {
  state: () => ({
    limit: 10,
    displayLimit: 0,
    currentPage: 0,
    total: 0,
  }),

  getters: {
    pages: (state) => (state.total ? Math.ceil(state.total / state.limit) : 0),
  },

  actions: {
    previousPage() {
      const mainStore = useMainStore();
      if (this.currentPage >= 0) {
        this.currentPage = 0;
      } else {
        this.currentPage--;
      }
      mainStore.findProductsByPhrase();
    },

    nextPage() {
      const mainStore = useMainStore();
      if (this.currentPage + 1 >= Math.ceil(this.total / this.limit)) {
        this.currentPage = 0;
      } else {
        this.currentPage++;
      }
      mainStore.findProductsByPhrase();
    },

    changePage(page) {
      const mainStore = useMainStore();
      this.currentPage = page;
      mainStore.findProductsByPhrase();
    },

    changeLimit(limit) {
      const mainStore = useMainStore();
      this.limit = limit;
      this.currentPage = 0;
      mainStore.findProductsByPhrase();
    },
  },
});

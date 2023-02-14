import { defineStore } from "pinia";
import { usePaginationStore } from "@/stores/pagination";

const sortBy = (sortObj, data) => {
  let sorters = {
    asc: (arr) => arr.sort((a, b) => a[sortObj.key] - b[sortObj.key]),
    desc: (arr) => arr.sort((a, b) => b[sortObj.key] - a[sortObj.key]),
  };
  return sorters[sortObj.value === 1 ? "asc" : "desc"](data);
};

export const useMainStore = defineStore("", {
  state: () => ({
    categories: [],
    sortBy: undefined,
    phrase: "",
    items: [],
  }),

  getters: {
    products: (state) => {
      return state.sortBy
        ? sortBy(state.sortBy, [...state.items])
        : state.items;
    },
    _categories: (state) => state.categories,
  },

  actions: {
    async findProductsByPhrase() {
      const paginationStore = usePaginationStore();
      const query =
        this.phrase.length > 0
          ? `/search?q=${this.phrase}&limit=${paginationStore.limit}`
          : `?limit=${paginationStore.limit}`;
      const response = await fetch(
        `https://dummyjson.com/products${query}&skip=${
          paginationStore.currentPage * paginationStore.limit
        }`,
        { mode: "cors" }
      );
      const json = await response.json();
      this.items = json.products;
      paginationStore.displayLimit = json.limit;
      paginationStore.total = json.total;
    },

    async findProductByCategory(category) {
      const paginationStore = usePaginationStore();
      if (category) {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=${paginationStore.limit}`,
          { mode: "cors" }
        );
        const json = await response.json();
        this.items = json.products;
        paginationStore.displayLimit = json.limit;
        paginationStore.total = json.total;
      }
    },

    setPhrase(phrase) {
      this.phrase = phrase;
      this.findProductsByPhrase();
    },

    resetSort() {
      this.sortBy = undefined;
    },

    sortProductBy(sortObj) {
      this.sortBy = sortObj;
    },

    async getCategories() {
      const response = await fetch(
        "https://dummyjson.com/products/categories",
        { mode: "cors" }
      );
      this.categories = await response.json();
    },
  },
});

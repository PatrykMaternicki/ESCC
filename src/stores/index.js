import { defineStore } from "pinia";

const sortBy = (sortObj, data) => {
  let sorters = {
    asc: (arr) => arr.sort((a, b) => a[sortObj.key] - b[sortObj.key]),
    desc: (arr) => arr.sort((a, b) => b[sortObj.key] - a[sortObj.key]),
  };
  return sorters[sortObj.value === 1 ? "asc" : "desc"](data);
};

export const useMainStore = defineStore("", {
  state: () => ({
    resData: {},
    categories: [],
    sortBy: undefined,
    limit: 10,
    phrase: "",
  }),

  getters: {
    products: (state) => {
      return state.sortBy
        ? sortBy(state.sortBy, [...state.resData.products])
        : state.resData.products;
    },
    total: (state) => state.resData.total,
    _categories: (state) => state.categories,
  },

  actions: {
    async findProductsByPhrase() {
      const query =
        this.phrase.length > 0
          ? `/search?q=${this.phrase}&limit=${this.limit}`
          : `?limit=${this.limit}`;
      const response = await fetch(`https://dummyjson.com/products${query}`);
      this.resData = await response.json();
    },

    async findProductByCategory(category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=${this.limit}`
      );
      this.resData = await response.json();
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

    changeLimit(limit) {
      this.limit = limit;
      this.findProductsByPhrase();
    },

    async getCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      this.categories = await response.json();
    },
  },
});

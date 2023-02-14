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
  }),

  getters: {
    products: (state) => {
      console.log(state.sortBy);
      return state.sortBy
        ? sortBy(state.sortBy, [...state.resData.products])
        : state.resData.products;
    },
    _categories: (state) => state.categories,
  },

  actions: {
    async findProductsByPhrase(phrase) {
      const query = phrase ? `/search?q=${phrase}` : "";
      const response = await fetch(`https://dummyjson.com/products${query}`);
      this.resData = await response.json();
    },

    async findProductByCategory(category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      this.resData = await response.json();
    },

    resetSort() {
      this.sortBy = undefined;
    },

    sortProductBy(sortObj) {
      this.sortBy = sortObj;
    },

    async getCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      this.categories = await response.json();
    },
  },
});

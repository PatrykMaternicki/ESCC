import { defineStore } from "pinia";

export const useMainStore = defineStore("", {
  state: () => ({
    resData: {},
    categories: [],
  }),

  getters: {
    products: (state) => state.resData.products,
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

    async getCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      this.categories = await response.json();
    },
  },
});

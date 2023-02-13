import { defineStore } from "pinia";

export const useMainStore = defineStore("", {
  state: () => ({
    resData: {},
  }),

  getters: {
    products: (state) => state.resData.products,
  },

  actions: {
    async findProductsByPhrase(phrase) {
      const query = phrase ? `/search?q=${phrase}` : "";
      const response = await fetch(`https://dummyjson.com/products${query}`);
      this.resData = await response.json();
    },
  },
});

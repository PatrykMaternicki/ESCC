import { defineStore } from "pinia";

const sortBy = (sortObj, data) => {
  let sorters = {
    asc: (arr) => arr.sort((a, b) => a[sortObj.key] - b[sortObj.key]),
    desc: (arr) => arr.sort((a, b) => b[sortObj.key] - a[sortObj.key]),
  };
  return sorters[sortObj.value === 1 ? "asc" : "desc"](data);
};

const pagination = (page, limit, array) =>
  array.slice((page - 1) * limit, page * limit);

export const useMainStore = defineStore("", {
  state: () => ({
    categories: [],
    sortBy: undefined,
    limit: 10,
    currentPage: 0,
    phrase: "",
    items: [],
    _total: 0,
  }),

  getters: {
    products: (state) => {
      return state.sortBy
        ? sortBy(state.sortBy, [...state.items])
        : state.items;
    },
    total: (state) => state._total,
    pages: (state) => (state._total ? Math.ceil(state.total / state.limit) : 0),
    _categories: (state) => state.categories,
  },

  actions: {
    async findProductsByPhrase() {
      const query =
        this.phrase.length > 0
          ? `/search?q=${this.phrase}&limit=${this.limit}`
          : `?limit=${this.limit}`;
      const response = await fetch(
        `https://dummyjson.com/products${query}&skip=${
          this.currentPage * this.limit
        }`
      );
      const json = await response.json();
      this.items = json.products;
      this._total = json.total;
    },

    async findProductByCategory(category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=${this.limit}`
      );
      const json = await response.json();
      this.items = json.products;
      this._total = json.total;
    },

    setPhrase(phrase) {
      this.phrase = phrase;
      this.findProductsByPhrase();
    },

    previousPage() {
      if (this.currentPage >= 0) {
        this.currentPage = 0;
      } else {
        this.currentPage--;
      }
      this.findProductsByPhrase();
    },

    nextPage() {
      if (this.currentPage + 1 >= Math.ceil(this.total / this.limit)) {
        this.currentPage = 0;
      } else {
        this.currentPage++;
      }
      this.findProductsByPhrase();
    },

    resetSort() {
      this.sortBy = undefined;
    },

    sortProductBy(sortObj) {
      this.sortBy = sortObj;
    },

    changePage(page) {
      this.currentPage = page;
      this.findProductsByPhrase();
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

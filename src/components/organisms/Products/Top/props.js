export const props = {
  categories: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 10,
  },
};

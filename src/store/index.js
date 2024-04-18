import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    }
  },
  actions: {
  },
  modules: {
  }
});

export default store;

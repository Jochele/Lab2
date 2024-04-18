<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="newProduct.name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="newProduct.description" required></textarea>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="newProduct.price" required>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: 0
        }
      };
    },
    methods: {
      addProduct() {
        this.$store.commit('addProduct', this.newProduct);
        this.newProduct = {
          name: '',
          description: '',
          price: 0
        };
        this.$emit('product-added');
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  
<template>
    <div>
      <h2>Product List</h2>
      <button @click="goToAddProduct">Add Product</button>
      <table class="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="editProduct(index)">Edit</button>
              <button @click="deleteProduct(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="message" class="alert alert-success" role="alert">
      <p class="message">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    computed: {
      products() {
        return this.$store.state.products;
      },
      message() {
        return this.$route.query.message;
      },
    },
    methods: {
      editProduct(index) {
        this.$router.push(`/edit/${index}`);
      },
      deleteProduct(index) {
        if (confirm("Are you sure you want to delete this product?")) {
          this.$store.dispatch('deleteProduct', index);
        }
      },
      goToAddProduct() {
        this.$router.push('/add');
      },
    },
  };
  </script>
  
  <style>
  .product-table {
  border-collapse: collapse;
  width: 100%;
}

.product-table th, .product-table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.product-table th {
  background-color: #EADBC8;
}

.alert-success {
  text-align: center;
  font-size: 20px;
  color: green;
}

.message {
  margin: 0;
}
  </style>
  

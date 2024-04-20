<template>
    <div>
      <h2>Product List</h2>
     
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
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="message" class="alert alert-success" role="alert">
        <p class="message">{{ message }}</p>
      </div>
  
      <EditProduct v-if="showEditModal" :editedProduct="selectedProduct" @update-name="updateName" @update-description="updateDescription" @update-price="updatePrice" @update-product="updateProduct" @cancel-edit="cancelEdit" />
    </div>
  </template>
  
  <script>
  import EditProduct from './EditProduct.vue';
  
  export default {
    name: 'ProductList',
    components: {
      EditProduct,
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      message() {
        return this.$route.query.message;
      },
    },
    data() {
      return {
        showEditModal: false,
        selectedProduct: null,
      };
    },
    methods: {
      editProduct(product) {
        this.selectedProduct = product;
        this.showEditModal = true;
      },
      updateName(value) {
        this.selectedProduct.name = value;
      },
      updateDescription(value) {
        this.selectedProduct.description = value;
      },
      updatePrice(value) {
        this.selectedProduct.price = value;
      },
      updateProduct() {
        this.showEditModal = false;
      },
      cancelEdit() {
        this.showEditModal = false;
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
  
  .product-table th,
  .product-table td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  .product-table th {
    background-color: #6c3dda;
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
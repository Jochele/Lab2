<template>
    <div class="add-product-container">
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct" class="product-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="newProduct.name" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="newProduct.description" required></textarea>
        </div>
        <div class="form-group">
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
      },
      isExpanded: false
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

<style>
.add-product-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #222222;
  transition: max-width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #ff7f00;
}

label {
  color: #ffffff;
  width: 80px;
  display: flex;
  align-items: center;
}

button {
  background-color: #ff7f00;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

input[type="text"],
input[type="number"],
textarea {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  max-width: 400px;
  margin-left: 20px;
}
</style>



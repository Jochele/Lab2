<template>
  <div class="edit-product-container">
    <h2>Edit Product</h2>
    <form @submit.prevent="updateProduct" class="product-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" :value="editedProduct.name" @input="updateName($event.target.value)" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" :value="editedProduct.description" @input="updateDescription($event.target.value)" required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" :value="editedProduct.price" @input="updatePrice($event.target.value)" required>
      </div>
      <button type="submit">Update Product</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['editedProduct'],
  methods: {
    updateProduct() {
      this.$emit('update-product', this.editedProduct);
    },
    cancelEdit() {
      this.$emit('cancel-edit');
    },
    updateName(value) {
      this.$emit('update-name', value);
    },
    updateDescription(value) {
      this.$emit('update-description', value);
    },
    updatePrice(value) {
      this.$emit('update-price', value);
    }
  }
};
</script>

<style scoped>
.edit-product-container {
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
  margin-top: 10px;
}

button:hover {
  background-color: #fffb00;
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
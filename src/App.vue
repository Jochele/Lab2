<template>
  <div id="app">
    <nav>
      <router-link to="/add-product">Add Product</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #07332c;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ff7f00;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>

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
  font-weight: bold;
  color: #ffffff;
  background-color: #604a6d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffbc79;
}

nav a.router-link-exact-active {
  color: #ffebeb;
}
</style>

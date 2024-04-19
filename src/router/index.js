import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import AddProductForm from '../components/AddProductForm.vue';

const routes = [
  {path: '/', component: ProductList},
  {path: '/add-product',  component: AddProductForm},

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

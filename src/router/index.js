import { createRouter, createWebHistory } from 'vue-router';
import AddProductForm from '../components/AddProductForm.vue';

const routes = [
  {
    path: '/add-product',
    name: 'AddProductForm',
    component: AddProductForm
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

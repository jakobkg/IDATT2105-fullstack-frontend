import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";
import NewUserView from "@/views/NewUserView.vue";

import ModifyItemView from "@/views/ModifyItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/newuser',
      name: 'new user',
      component: NewUserView
    },
    {
      path: '/item/edit/:id',
      name: 'editItem',
      component: ModifyItemView
    },
    {
      path: '/item/edit',
      name: 'createItem',
      component: ModifyItemView
    },
  ]
})

export default router;

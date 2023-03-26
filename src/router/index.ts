import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";
import NewUserView from "@/views/NewUserView.vue";
import ProfileView from '@/views/profile/ProfileView.vue';
import MyItemsView from "@/views/profile/MyItemsView.vue";
import ItemView from "@/views/ItemView.vue";
import EditProfileView from "@/views/profile/EditProfileView.vue";

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
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView
    },
    {
      path: '/profile/my-items',
      name: 'my items',
      component: MyItemsView
    },
    {
      path: '/profile/edit',
      name: 'updateUser',
      component: EditProfileView
    },
  ]
})

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletView from '@/views/WalletView.vue'
import FriendsView from '@/views/FriendsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView,
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsView,
    },
  ],
})

export default router

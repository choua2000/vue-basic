import { createRouter, createWebHistory } from 'vue-router'
//===========router front================================
import Home from '@/views/user/HomeView.vue'
import CartView from '@/views/user/CartView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import Checkout from '@/views/user/Checkout.vue'
import SearchView from '@/views/user/SearchView.vue'
import SuccessView from '@/views/user/SuccessView.vue'
import View from '@/views/user/View.vue'
//============router admin =================
import LoginView from '@/views/admin/LoginView.vue'
import Dashboard from '@/views/admin/DashboardView.vue'
//================== order ==============

import orderDetailView from '@/views/admin/order/DetailView.vue'
import orderListView from '@/views/admin/order/ListView.vue'
//==================product =============

import productUpdateView from '@/views/admin/product/UpdateView.vue'
import productListView from '@/views/admin/product/ListView.vue'
//==============user==================
import UserListView from '@/views/admin/user/ListView.vue'
import userUpdateView from '@/views/admin/user/UpdateView.vue'
// import DashboardView from '@/views/admin/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/view',
      name: 'view',
      component: View,
    },
    {
      path: '/admin/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      
    },
    //Admin order================================================================
    {
      path: '/admin/orders/detail/:id',
      name: 'admin-order-detail',
      component: orderDetailView,

    },
    {
      path: '/admin/orders',
      name: 'admin-order-list',
      component: orderListView,
    },
    // Admin product =============================================================
    {
      path: '/admin/products',
      name: 'admin-products',
      component: productListView,
    },

    {
      path: '/admin/products/create',
      name: 'admin-products-create',
      component: productUpdateView,
    },
    {
      path: '/admin/products/edit/:id',
      name: 'admin-products-update',
      component: productUpdateView,
    },
    // Admin user =================================================================
    {
      path: '/admin/users',
      name: 'admin-users',
      component: UserListView,
    },
    {
      path: '/admin/users-update/:id',
      name: 'admin-users-update',
      component: userUpdateView,
    },
    {
      path: '/admin/users-create',
      name: 'admin-users-create',
      component: userUpdateView,
    }
  ]
})

export default router

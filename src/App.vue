<script setup>
import { onMounted } from 'vue'
import {  RouterView } from 'vue-router'
import { useCartStore } from '@/stores/user/cart'
import { useProductStore } from '@/stores/user/product'
import { useEventStore } from '@/stores/Event'
import Toast from './components/Toast.vue'
const eventStore = useEventStore()
const cartStore = useCartStore()
const productStore = useProductStore()
onMounted(() => {
  // load product when load page
  cartStore.loadCart()
  productStore.loadProducts()
})
</script>

<template>
  <div>
    <Toast
      v-if="eventStore.alert"
      :status="eventStore.data.status"
      :message="eventStore.data.message"
    >
    </Toast>
  <RouterView />
</div>
</template>

<style scoped>
</style>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute ,useRouter} from 'vue-router'
import UserLayout from '@/layouts/userLayout.vue'
import Product from '@/components/Product.vue'
import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'
const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const searchText = ref('')
const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name: 'cart' })
}
watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })


const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})
</script>

<template>
    <UserLayout>
        <div class="text-3xl m-4">Search: <b>{{ searchText }}</b></div>
        <product 
        :products="filterProducts"
        :addToCart="addToCart"
        ></product>
    </UserLayout>
</template>



<style lang="scss" scoped></style>
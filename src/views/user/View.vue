<script setup>
import userLayout from '@/layouts/userLayout.vue';
import { useCartStore } from '@/stores/user/cart';

const userStore = useCartStore()
</script>
<template>
    <userLayout>
        <div class="container mx-auto mt-10">
            <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

            <div class="shadow-md my-10 p-6">

                <div v-if="cartItems">
                    <!-- Loop through each cart item -->
                    <div v-for="item in cartItems" :key="item.id" class="flex items-center border-b py-4">
                        <!-- Product Image -->
                        <div class="w-1/4">
                            <img :src="item.image" alt="Product Image" class="w-24 h-24 object-cover">
                        </div>
                        <!-- Product Details -->
                        <div class="w-2/4">
                            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
                            <p class="text-gray-500">${{ item.price }}</p>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <p class="text-center text-gray-500">Your cart is empty.</p>
                </div>

            </div>
        </div>
    </userLayout>
</template>




<style lang="scss" scoped></style>